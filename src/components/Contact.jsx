import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';

function ContactSection() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/seu-usuario',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/seu-usuario',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/seu-usuario',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contato" className="relative w-full min-h-[70vh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
      {/* Fundo com gradiente em toda a tela */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 to-purple-900 opacity-70 z-0" />
      
      {/* Efeito de partículas decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300 opacity-40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 opacity-20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-20 w-1 h-1 bg-white opacity-50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Container principal centralizado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-12">
          
          {/* Título da seção */}
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-2xl">
                Contato
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
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
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Botão do ícone */}
                      <div className="relative bg-gray-800 p-4 rounded-full border border-gray-700 group-hover:border-transparent transition-all duration-300 transform group-hover:scale-110">
                        <Icon className={`w-8 h-8 text-gray-300 transition-colors duration-300 ${social.color}`} />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Divisor visual */}
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-500">ou</span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <a
                href="mailto:seu-email@exemplo.com"
                className="group inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <FaEnvelope className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  seu-email@exemplo.com
                </span>
              </a>
              
              <p className="text-gray-500 text-sm">
                Respondo em até 24 horas
              </p>
            </div>
          </div>

          {/* Call to action adicional */}
          <div className="pt-8">
            <p className="text-gray-400 text-lg font-light">
              Disponível para projetos freelance e oportunidades de trabalho
            </p>
          </div>
        </div>
      </div>

      {/* Elemento decorativo no canto inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
}

export default ContactSection;