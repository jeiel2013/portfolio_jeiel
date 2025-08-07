import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-800/95 backdrop-blur-md shadow-2xl py-3' 
        : 'bg-gray-800/70 backdrop-blur-sm shadow-md py-4'
    }`}>
      {/* Container principal centralizado */}
      <div className="container mx-auto flex justify-center md:justify-between items-center max-w-6xl px-6 sm:px-8">
        
        {/* Logo/Nome */}
        <div className="relative group">
          <div className="text-2xl sm:text-3xl font-bold transition-all duration-300 hover:scale-105">
            <span className="block drop-shadow-2xl">
              <span className="text-white">Jeiel</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 ml-2">
                Alves
              </span>
            </span>
          </div>
          {/* Linha decorativa sob o nome */}
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500"></div>
        </div>

        {/* Menu de navegação */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="relative group">
            <a 
              href="#inicio" 
              className="text-base font-medium hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Início
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a 
              href="#about-me" 
              className="text-base font-medium hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Sobre Mim
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className="relative group">
            <a 
              href="#contato" 
              className="text-base font-medium hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
            >
              Contato
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Linha decorativa no fundo do header */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </nav>
  );
}

export default Header;