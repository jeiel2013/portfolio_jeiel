import React from "react";
import foto from "../assets/images/foto-jeiel.jpg";

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen overflow-hidden bg-zinc-950 text-zinc-100 flex items-center justify-center pt-20 md:pt-0"
    >
      {/* Fundo com gradiente dark */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-90 z-0" />

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Efeito de partículas decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-500 opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-400 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-300 opacity-50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Container principal centralizado */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-16">
          {/* Lado esquerdo - Conteúdo textual */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                <span className="block drop-shadow-2xl text-zinc-100">
                  Jeiel
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 drop-shadow-2xl">
                  Alves
                </span>
              </h1>

              <div className="relative">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl text-zinc-300 font-light tracking-wide"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  Desenvolvedor Fullstack
                </h2>
                <div className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full w-32 mx-auto lg:mx-0"></div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://github.com/jeiel2013?tab=repositories"
                target="_blank"
                className="group relative inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-semibold py-4 px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-emerald-500/25"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                <span className="relative z-10">Ver Meus Projetos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Lado direito - Imagem circular */}
          <div className="flex-1 flex justify-center lg:justify-end max-w-xl -mt-30 md:mt-0">
            <div className="relative group">
              {/* Container com borda gradiente */}
              <div className="relative w-80 h-80">
                {/* Borda gradiente animada */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full p-1 animate-gradient-x">
                  <div className="w-full h-full bg-zinc-950 rounded-full"></div>
                </div>

                {/* Efeito de brilho atrás da imagem */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Imagem circular */}
                <img
                  src={foto}
                  alt="Jeiel Alves"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay sutil na imagem */}
                <div className="absolute inset-1 bg-gradient-to-t from-zinc-950/20 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para animação do gradiente da borda */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
