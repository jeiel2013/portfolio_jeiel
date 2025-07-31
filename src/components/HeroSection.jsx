import React from 'react';
import foto from '../assets/images/foto-jeiel.jpg';

function HeroSection() {
  return (
    <section id='inicio' className="relative w-full min-h-screen overflow-hidden bg-gray-900 text-white flex items-center justify-center">
      {/* Fundo com gradiente em toda a tela */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 to-purple-900 opacity-70 z-0" />
      
      {/* Efeito de partículas decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-white opacity-50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Container principal centralizado */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-16">
          
          {/* Lado esquerdo - Conteúdo textual */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block drop-shadow-2xl">Jeiel</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-2xl">
                  Alves
                </span>
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-light tracking-wide">
                  Back-End Developer
                </h2>
                <div className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-32 mx-auto lg:mx-0"></div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Ver Meus Projetos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Lado direito - Imagem */}
          <div className="flex-1 flex justify-center lg:justify-end max-w-xl">
            <div className="relative group">
              {/* Efeito de brilho atrás da imagem */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <img
                src={foto}
                alt="Ilustração"
                className="relative rounded-2xl shadow-2xl w-full max-w-xs transform transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay sutil na imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-sm font-light">Scroll</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;