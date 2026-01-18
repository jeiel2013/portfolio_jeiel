import React, { useEffect, useRef } from "react";
import {
  Home,
  Github,
  Linkedin,
  Mail,
  Star,
  ExternalLink,
  Send,
  Instagram,
  Twitter,
} from "lucide-react";
const currentYear = new Date().getFullYear();

const Links = () => {
  const canvasRef = useRef(null);

  // Animação de partículas (stars)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;
    const stars = [];
    const numStars = 40;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -10) this.reset();
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initStars = () => {
      for (let i = 0; i < numStars; i++) stars.push(new Star());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    initStars();
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const links = [
    {
      title: "Portfólio",
      url: "/",
      icon: <Home className="w-5 h-5" />,
      description: "Voltar para a home",
      color: "primary",
      delay: "100ms",
    },
    {
      title: "GitHub",
      url: "https://github.com/jeiel2013",
      icon: <Github className="w-5 h-5" />,
      description: "Meus códigos open source",
      color: "primary",
      external: true,
      delay: "200ms",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/jeiel2013",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Conecte-se profissionalmente",
      color: "linkedin",
      external: true,
      delay: "300ms",
    },
    {
      title: "Batista Assessoria",
      url: "https://batistaecontabil.vercel.app/",
      icon: <Star className="w-5 h-5" />,
      description: "Último projeto lançado",
      color: "primary",
      featured: true,
      external: true,
      delay: "400ms",
    },
    {
      title: "E-mail",
      url: "mailto:jeieldev.alves@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "Entre em contato",
      color: "primary",
      rightIcon: <Send className="w-4 h-4" />,
      delay: "500ms",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans antialiased selection:bg-[#00d9a3] selection:text-black flex flex-col items-center justify-center py-12 px-4">
      {/* Background Elements */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
      />

      {/* Grid Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 100%)",
        }}
      />

      {/* Main Content */}
      <main className="w-full max-w-md relative z-10 flex flex-col items-center">
        {/* Profile Header */}
        <div className="text-center mb-8 w-full animate-[fadeIn_0.5s_ease-out_forwards]">
          <div className="relative inline-block mb-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00d9a3] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#00d9a3]/30 p-1 bg-[#121212]">
              <img
                src="https://github.com/jeiel2013.png"
                alt="Jeiel Alves"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-1 right-1 w-4 h-4 bg-[#00d9a3] border-2 border-[#0a0a0a] rounded-full"
              title="Disponível"
            ></div>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-white flex items-center justify-center gap-2">
            Jeiel Alves <span className="text-[#00d9a3] animate-pulse">_</span>
          </h1>
          <p className="text-sm text-[#a1a1aa] font-mono mt-2">
            Fullstack Developer
          </p>
          <p className="text-xs text-[#a1a1aa]/60 mt-1 max-w-[280px] mx-auto">
            Transformando café em código limpo e escalável.
          </p>
        </div>

        {/* Links Container */}
        <div className="w-full space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className={`group relative flex items-center p-1 pl-1 border border-white/[0.08] rounded-xl hover:border-[#00d9a3]/50 transition-all duration-300 active:scale-[0.99] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${
                link.featured
                  ? "bg-gradient-to-r from-[#121212] to-[#1a1a1a]"
                  : "bg-[#121212] hover:bg-[#1a1a1a]"
              }`}
              style={{ animationDelay: link.delay }}
            >
              {link.featured && (
                <div className="absolute inset-0 bg-[#00d9a3]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              )}

              <div
                className={`w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg text-white transition-colors z-10 ${
                  link.color === "linkedin"
                    ? "group-hover:text-[#0A66C2] group-hover:bg-[#0A66C2]/10"
                    : "group-hover:text-[#00d9a3] group-hover:bg-[#00d9a3]/10"
                }`}
              >
                {link.icon}
              </div>

              <div className="flex-1 px-4 z-10">
                <div className="flex items-center gap-2">
                  <h3
                    className={`text-sm font-medium text-white transition-colors ${
                      link.color === "linkedin"
                        ? "group-hover:text-[#0A66C2]"
                        : "group-hover:text-[#00d9a3]"
                    }`}
                  >
                    {link.title}
                  </h3>
                  {link.featured && (
                    <span className="text-[9px] font-bold bg-[#00d9a3]/20 text-[#00d9a3] px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Novo
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#a1a1aa] font-mono">
                  {link.description}
                </p>
              </div>

              <div className="pr-4 text-[#a1a1aa] group-hover:text-white transition-all z-10 group-hover:translate-x-1">
                {link.rightIcon || <ExternalLink className="w-4 h-4" />}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="mt-12 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com/jeiel2013"
              className="text-[#a1a1aa] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jeiel2013"
              className="text-[#a1a1aa] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-[#a1a1aa]/50 font-mono">
            © {currentYear} Jeiel Alves
          </p>
        </footer>
      </main>

      {/* Keyframes inline */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Links;
