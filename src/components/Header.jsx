import React, { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-zinc-800/50"
          : "bg-zinc-950/70 backdrop-blur-sm py-4 border-b border-zinc-900/30"
      }`}
    >
      {/* Container principal centralizado */}
      <div className="container mx-auto flex justify-center md:justify-between items-center max-w-6xl px-6 sm:px-8">
        {/* Logo/Nome */}
        <div className="relative group">
          <div
            className="text-2xl sm:text-3xl font-bold transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            <span className="block drop-shadow-2xl">
              <span className="text-zinc-100">Jeiel</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 ml-2">
                Alves
              </span>
            </span>
          </div>
          {/* Linha decorativa sob o nome */}
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-500"></div>
        </div>

        {/* Menu de navegação */}
        <ul
          className="hidden md:flex space-x-8 text-zinc-100"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <li className="relative group">
            <a
              href="#inicio"
              className="text-base font-medium hover:text-emerald-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50"
            >
              Início
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#about-me"
              className="text-base font-medium hover:text-emerald-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50"
            >
              Sobre Mim
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#projects"
              className="text-base font-medium hover:text-emerald-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50"
            >
              Projetos
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a
              href="#contato"
              className="text-base font-medium hover:text-emerald-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50"
            >
              Contato
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-emerald-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Linha decorativa no fundo do header */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
    </nav>
  );
}

export default Header;
