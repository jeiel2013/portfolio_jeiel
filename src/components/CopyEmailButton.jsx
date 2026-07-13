import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { CONTACT_EMAIL } from "../config/contact";

// variant "icon": botão circular (usado ao lado de outros CTAs)
// variant "full": botão de largura total com texto (usado no menu mobile)
function CopyEmailButton({ variant = "icon", className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API indisponível (ex: contexto não seguro) — ignora
    }
  };

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`px-4 py-3.5 text-sm font-medium text-center border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 ${className}`}
      >
        {copied ? (
          <Check className="w-4 h-4 text-[#00d9a3]" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {copied ? "E-mail copiado!" : "Copiar e-mail"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copiar e-mail"
      title={copied ? "E-mail copiado!" : "Copiar e-mail"}
      className={`w-11 h-11 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all ${className}`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-[#00d9a3]" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}

export default CopyEmailButton;
