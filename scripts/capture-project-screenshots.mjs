import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const DEBUG_PORT = 9337;
const VIEWPORT = { width: 1440, height: 900 };
const OUTPUT_DIR = join(process.cwd(), "src", "assets", "images", "cases");
const PROFILE_DIR = join(tmpdir(), `portfolio-project-capture-${process.pid}`);

const projects = [
  { slug: "studio-kather", url: "https://studiokather.com/" },
  { slug: "karine-azevedo", url: "https://karineazevedo.vercel.app/" },
  { slug: "batista-assessoria", url: "https://batistaecontabil.vercel.app/" },
];

function connectCDP(url) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    const pending = new Map();
    let requestId = 0;

    socket.addEventListener("open", () => {
      resolve({
        send(method, params = {}) {
          return new Promise((resolveRequest, rejectRequest) => {
            const id = ++requestId;
            pending.set(id, { resolve: resolveRequest, reject: rejectRequest });
            socket.send(JSON.stringify({ id, method, params }));
          });
        },
        close() {
          socket.close();
        },
      });
    });

    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (!message.id || !pending.has(message.id)) return;
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    });

    socket.addEventListener("error", reject);
  });
}

async function waitForBrowser() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
      if (response.ok) return response.json();
    } catch {
      // O navegador ainda está iniciando.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Não foi possível iniciar o Edge para capturar as páginas.");
}

async function captureProject(project) {
  const response = await fetch(
    `http://127.0.0.1:${DEBUG_PORT}/json/new?${encodeURIComponent(project.url)}`,
    { method: "PUT" },
  );
  if (!response.ok) throw new Error(`Falha ao abrir ${project.url}`);

  const page = await response.json();
  const cdp = await connectCDP(page.webSocketDebuggerUrl);

  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    ...VIEWPORT,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await cdp.send("Page.navigate", { url: project.url });

  await new Promise((resolve) => setTimeout(resolve, 3500));
  await cdp.send("Runtime.evaluate", {
    expression: "document.fonts?.ready",
    awaitPromise: true,
  });

  const { result } = await cdp.send("Runtime.evaluate", {
    expression: "Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)",
    returnByValue: true,
  });
  const maxScroll = Math.max(0, result.value - VIEWPORT.height);
  const positions = [0, Math.round(maxScroll * 0.48), maxScroll];

  for (let index = 0; index < positions.length; index += 1) {
    await cdp.send("Runtime.evaluate", {
      expression: `window.scrollTo({ top: ${positions[index]}, behavior: "instant" })`,
    });
    await new Promise((resolve) => setTimeout(resolve, 900));

    const screenshot = await cdp.send("Page.captureScreenshot", {
      format: "jpeg",
      quality: 86,
      fromSurface: true,
    });
    const filename = `${project.slug}-${String(index + 1).padStart(2, "0")}.jpg`;
    await writeFile(join(OUTPUT_DIR, filename), Buffer.from(screenshot.data, "base64"));
    console.log(`Capturado: ${filename}`);
  }

  cdp.close();
}

await mkdir(OUTPUT_DIR, { recursive: true });

const edge = spawn(
  EDGE_PATH,
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--disable-background-networking",
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true },
);

try {
  const browser = await waitForBrowser();
  for (const project of projects) {
    await captureProject(project);
  }

  const browserCDP = await connectCDP(browser.webSocketDebuggerUrl);
  await browserCDP.send("Browser.close");
  browserCDP.close();
} finally {
  edge.kill();
}
