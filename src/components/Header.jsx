/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "../config/whatsapp";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import PreferencesMenu, { TogglePill, languageOptions, themeOptions } from "./PreferencesMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

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
    const desktopClass = "hover:text-[var(--text-primary)] transition-colors";
    const mobileBaseClass =
      "flex items-center justify-between px-4 py-3.5 rounded-xl border text-sm font-medium transition-colors";

    if (item.hash) {
      const props = {
        key: item.label,
        onClick: mobile ? () => setIsMenuOpen(false) : undefined,
        className: mobile
          ? `${mobileBaseClass} border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-50)] hover:bg-[var(--bg-card-alt)]`
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
                  ? "border-[var(--accent-50)] text-[var(--accent)] bg-[var(--bg-card)]"
                  : "border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-50)] hover:bg-[var(--bg-card-alt)]"
              }`
            : `transition-colors ${isActive ? "text-[var(--text-primary)]" : "hover:text-[var(--text-primary)]"}`
        }
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-page-80)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-mono font-medium tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          JEIEL.DEV<span className="text-[var(--accent)]">_</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-[var(--text-secondary)] font-medium">
          {NAV_LINKS.map((item) => renderNavItem(item))}
        </div>

        <div className="flex items-center gap-3">
          {/* Menu de preferências (idioma + tema) — só no desktop */}
          <PreferencesMenu className="hidden sm:block" />

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-4 py-2 text-xs font-medium bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-full hover:bg-[var(--surface-muted-hover)] transition-colors"
          >
            {t.nav.cta}
          </a>

          {/* Botão hambúrguer — só aparece abaixo do breakpoint md */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-full text-[var(--text-primary)] hover:bg-[var(--surface-muted-hover)] transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile / tablet — mesmo visual (cards + glass) usado nas páginas */}
      <div
        className={`md:hidden overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--bg-page-95)] backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3 mb-1">
            <TogglePill options={languageOptions} active={language} onChange={setLanguage} />
            <TogglePill options={themeOptions} active={theme} onChange={setTheme} />
          </div>

          {NAV_LINKS.map((item) => renderNavItem(item, true))}

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-4 py-3.5 text-sm font-semibold text-center bg-[var(--accent)] text-[var(--accent-on)] rounded-full hover:bg-[var(--accent-hover)] transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
