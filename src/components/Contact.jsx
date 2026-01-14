import React from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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
          04. O QUE VEM A SEGUIR?
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Vamos criar algo extraordinário.
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-10 max-w-xl mx-auto">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou
          oportunidades de fazer parte de suas visões.
        </p>

        <a
          href="mailto:jeieldev.alves@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9a3] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00d9a3]/20"
        >
          <Mail className="w-5 h-5" />
          Dizer Olá
        </a>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://github.com/jeielalves"
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
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
