import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

// TODO: troque pelo seu número real (código do país + DDD + número, sem espaços/símbolos)
const WHATSAPP_NUMBER = "5533999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá, Jeiel! Vi seu portfólio e quero conversar sobre um projeto."
)}`;

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9a3]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[#00d9a3] font-mono text-sm tracking-widest mb-4 block">
          05. VAMOS CONVERSAR?
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Tem um projeto em mente?
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10 max-w-xl mx-auto">
          Estou disponível para sites institucionais, sistemas web sob medida
          e parcerias de longo prazo. Resposta rápida e orçamento sem
          compromisso.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9a3] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00d9a3]/20"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>

        <div className="mt-4">
          <a
            href="mailto:contatojeiel2013@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            ou envie um e-mail
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://github.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/jeiel2013"
            target="-blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-[#E4405F] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a1a1aa] hover:text-[#ffffff] transition-colors"
            aria-label="X"
          >
            <SiX className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
