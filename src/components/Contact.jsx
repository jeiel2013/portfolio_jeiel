import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/jeiel2013",
      color: "hover:text-zinc-300",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/jeiel2013",
      color: "hover:text-cyan-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://instagram.com/jeiel2013",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section
      id="contato"
      className="relative w-full min-h-[60vh] overflow-hidden bg-zinc-950 text-zinc-100 flex items-center justify-center"
    >
      {/* Fundo com gradiente dark */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90 z-0" />

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Efeito de partículas decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-emerald-500 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-400 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-cyan-300 opacity-50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Container principal centralizado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-12">
          {/* Título da seção */}
          <div className="space-y-4">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 drop-shadow-2xl">
                Contato
              </span>
            </h2>
            <p
              className="text-xl sm:text-2xl text-zinc-400 font-light max-w-2xl mx-auto"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Vamos conversar sobre seu próximo projeto
            </p>
          </div>

          {/* Container dos ícones sociais */}
          <div className="flex flex-col items-center space-y-8">
            {/* Ícones das redes sociais */}
            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.name}
                  >
                    <div className="relative">
                      {/* Efeito de brilho atrás do ícone */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                      {/* Botão do ícone */}
                      <div className="relative bg-zinc-900 p-4 rounded-full border border-zinc-800 group-hover:border-emerald-500/50 transition-all duration-300 transform group-hover:scale-110">
                        <Icon
                          className={`w-8 h-8 text-zinc-400 transition-colors duration-300 ${social.color}`}
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Divisor visual */}
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span
                  className="px-4 bg-zinc-950 text-zinc-600"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  ou
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <a
                href="mailto:jeieldev.alves@gmail.com"
                className="group inline-flex items-center space-x-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-4 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                <FaEnvelope className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                  jeieldev.alves@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
