/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { getMailtoLink } from "../config/contact";
import CopyEmailButton from "./CopyEmailButton";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  // hash: seção dentro da Home | to: página própria (rota)
  const NAV_LINKS = [
    { label: t.nav.about, hash: "#about" },
    { label: t.nav.services, to: "/servicos" },
    { label: t.nav.projects, to: "/projetos" },
    { label: t.nav.contact, hash: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile sempre que a rota muda
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const renderNavItem = (item, mobile = false) => {
    const desktopClass = "hover:text-white transition-colors";
    const mobileBaseClass =
      "flex items-center justify-between px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors";

    if (item.hash) {
      const props = {
        key: item.label,
        onClick: mobile ? () => setIsMenuOpen(false) : undefined,
        className: mobile
          ? `${mobileBaseClass} border-white/[0.08] bg-[#121212] text-white hover:border-[#00d9a3]/50 hover:bg-[#1a1a1a]`
          : desktopClass,
      };

      return isHome ? (
        <a href={item.hash} {...props}>
          {item.label}
        </a>
      ) : (
        <Link to={`/${item.hash}`} {...props}>
          {item.label}
        </Link>
      );
    }

    const isActive = location.pathname === item.to;
    return (
      <Link
        key={item.label}
        to={item.to}
        onClick={mobile ? () => setIsMenuOpen(false) : undefined}
        className={
          mobile
            ? `${mobileBaseClass} ${
                isActive
                  ? "border-[#00d9a3]/50 text-[#00d9a3] bg-[#121212]"
                  : "border-white/[0.08] bg-[#121212] text-white hover:border-[#00d9a3]/50 hover:bg-[#1a1a1a]"
              }`
            : `transition-colors ${isActive ? "text-white" : "hover:text-white"}`
        }
      >
        {item.label}
      </Link>
    );
  };

  const LanguageSwitch = ({ className = "" }) => (
    <div
      className={`flex items-center bg-white/5 border border-white/[0.08] rounded-full p-0.5 text-[11px] font-mono ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          language === "pt"
            ? "bg-[#00d9a3] text-black font-semibold"
            : "text-[#a1a1aa] hover:text-white"
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          language === "en"
            ? "bg-[#00d9a3] text-black font-semibold"
            : "text-[#a1a1aa] hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );

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
          {NAV_LINKS.map((item) => renderNavItem(item))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitch className="hidden sm:flex" />

          <div className="hidden sm:flex items-center gap-2">
            <a
              href={getMailtoLink()}
              className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/[0.08] rounded-full hover:bg-white/10 transition-colors"
            >
              {t.nav.cta}
            </a>
            <CopyEmailButton className="w-9 h-9" />
          </div>

          {/* Botão hambúrguer — só aparece abaixo do breakpoint md */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/[0.08] rounded-full text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile / tablet — mesmo visual (cards + glass) usado nas páginas */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-3">
          <LanguageSwitch className="mx-auto mb-1" />

          {NAV_LINKS.map((item) => renderNavItem(item, true))}

          <a
            href={getMailtoLink()}
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-4 py-3.5 text-sm font-semibold text-center bg-[#00d9a3] text-black rounded-full hover:bg-[#00b386] transition-colors"
          >
            {t.nav.cta}
          </a>
          <CopyEmailButton variant="full" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
