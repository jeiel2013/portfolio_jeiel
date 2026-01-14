/* eslint-disable no-unused-vars */
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
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-mono font-medium tracking-tight hover:text-[#00d9a3] transition-colors"
        >
          JEIEL.DEV<span className="text-[#00d9a3]">_</span>
        </a>

        <div className="hidden md:flex gap-8 text-sm text-[#a1a1aa] font-medium">
          <a href="#about" className="hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#tech" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projetos
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contato
          </a>
        </div>

        <a
          href="#contact"
          className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/[0.08] rounded-full hover:bg-white/10 transition-colors hidden sm:block"
        >
          Vamos conversar
        </a>
      </div>
    </nav>
  );
}

export default Header;
