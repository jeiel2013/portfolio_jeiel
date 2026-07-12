/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getWhatsAppLink } from "../config/whatsapp";

// hash: seção dentro da Home | to: página própria (rota)
const NAV_LINKS = [
  { label: "Sobre", hash: "#about" },
  { label: "Serviços", to: "/servicos" },
  { label: "Projetos", to: "/projetos" },
  { label: "Contato", hash: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-mono font-medium tracking-tight hover:text-[#00d9a3] transition-colors"
        >
          JEIEL.DEV<span className="text-[#00d9a3]">_</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-[#a1a1aa] font-medium">
          {NAV_LINKS.map((item) => {
            // Seção dentro da Home: âncora direta se já estiver na Home,
            // senão navega pra Home com o hash (Home rola até a seção sozinha)
            if (item.hash) {
              return isHome ? (
                <a
                  key={item.label}
                  href={item.hash}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={`/${item.hash}`}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              );
            }

            // Página própria (rota)
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`transition-colors ${
                  isActive ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/[0.08] rounded-full hover:bg-white/10 transition-colors hidden sm:block"
        >
          Vamos conversar
        </a>
      </div>
    </nav>
  );
}

export default Header;
