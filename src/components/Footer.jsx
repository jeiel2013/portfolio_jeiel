import React from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-950 text-zinc-100 pt-16 pb-8 border-t border-zinc-900">
      {/* Gradiente sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Jeiel Alves
            </h3>
            <p
              className="text-zinc-400 text-sm leading-relaxed"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Fullstack Developer apaixonado por criar soluções eficientes e
              escaláveis. Sempre em busca de novos desafios e aprendizados.
            </p>
          </div>

          {/* Coluna 2 - Localização */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold text-zinc-200"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Localização
            </h4>
            <div className="flex items-start space-x-3 text-sm text-zinc-400">
              <FaMapMarkerAlt className="w-5 h-5 mt-1 text-emerald-400" />
              <p
                className="mt-[4px]"
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                Coroaci - MG, Brasil
              </p>
            </div>
          </div>

          {/* Coluna 3 - Email de Contato */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold text-zinc-200"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Contato
            </h4>
            <p
              className="text-zinc-400 text-sm"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Entre em contato por e-mail:
            </p>
            <p
              className="text-emerald-400 text-sm"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              jeieldev.alves@gmail.com
            </p>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-zinc-900 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p
              className="text-zinc-500 text-sm text-center sm:text-left"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              © {currentYear} Jeiel Alves. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
