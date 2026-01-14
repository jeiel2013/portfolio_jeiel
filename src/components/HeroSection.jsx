import React from "react";

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-12 text-center relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d9a3]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mb-8 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00d9a3] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#00d9a3]/50 shadow-2xl shadow-[#00d9a3]/20">
          {/* Placeholder for profile image - substitua pela sua foto */}
          <img
            src="https://github.com/jeiel2013.png"
            alt="Jeiel Alves"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#00d9a3]/10 border border-[#00d9a3]/20 text-[#00d9a3] text-xs font-mono tracking-wide">
            DISPONÍVEL PARA PROJETOS
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">
          Jeiel Alves
        </h1>

        <p className="text-lg md:text-xl text-[#a1a1aa] font-mono mt-4">
          <span className="text-[#00d9a3]">&gt;</span> Desenvolvedor Fullstack
        </p>

        <p className="max-w-xl mx-auto text-[#a1a1aa] text-sm md:text-base leading-relaxed pt-4">
          Estudante de Sistemas de Informação transformando ideias complexas em
          soluções práticas e escaláveis através de código limpo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <a
            href="#projects"
            className="group px-8 py-3 bg-[#00d9a3] text-black text-sm font-semibold rounded-full hover:bg-[#00b386] transition-all flex items-center gap-2"
          >
            Ver Projetos
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="https://github.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-[#a1a1aa]/50">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;
