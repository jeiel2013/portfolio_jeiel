import React from 'react';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import Snowfall from 'react-snowfall';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      {/* Gradiente sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jeiel Alves
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fullstack Developer apaixonado por criar soluções eficientes e escaláveis. 
              Sempre em busca de novos desafios e aprendizados.
            </p>
          </div>

          {/* Coluna 2 - Localização */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Localização</h4>
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 text-blue-400" />
              <p className="mt-[4px]">
                Coroaci - MG, Brasil
              </p>
            </div>
          </div>

          {/* Coluna 3 - Email de Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Contato</h4>
            <p className="text-gray-400 text-sm">
              Entre em contato por e-mail:
            </p>
            <p className="text-blue-400 text-sm">
              contatojeiel2013@gmail.com
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} Jeiel Alves. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
