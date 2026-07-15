/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Settings2, Sun, Moon } from "lucide-react";
import { getWhatsAppLink } from "../config/whatsapp";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrefsOpen, setIsPrefsOpen] = useState(false);
  const prefsRef = useRef(null);
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

  // Fecha o dropdown de preferências ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(e) {
      if (prefsRef.current && !prefsRef.current.contains(e.target)) {
        setIsPrefsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // Pill de duas opções, reaproveitado pro idioma e pro tema
  const TogglePill = ({ options, active, onChange }) => (
    <div className="flex items-center bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-full p-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          aria-pressed={active === opt.value}
          aria-label={opt.ariaLabel}
          className={`flex items-center justify-center rounded-full transition-colors ${
            opt.icon ? "w-7 h-7" : "px-2.5 py-1 text-[11px] font-mono"
          } ${
            active === opt.value
              ? "bg-[var(--accent)] text-[var(--accent-on)] font-semibold"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          {opt.icon || opt.label}
        </button>
      ))}
    </div>
  );

  const languageOptions = [
    { value: "pt", label: "PT" },
    { value: "en", label: "EN" },
  ];
  const themeOptions = [
    { value: "dark", icon: <Moon className="w-3.5 h-3.5" />, ariaLabel: "Dark" },
    { value: "light", icon: <Sun className="w-3.5 h-3.5" />, ariaLabel: "Light" },
  ];

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
          <div className="relative hidden sm:block" ref={prefsRef}>
            <button
              type="button"
              onClick={() => setIsPrefsOpen((prev) => !prev)}
              aria-label={t.preferences.label}
              aria-expanded={isPrefsOpen}
              className="w-9 h-9 flex items-center justify-center bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-full text-[var(--text-primary)] hover:bg-[var(--surface-muted-hover)] transition-colors"
            >
              <Settings2 className="w-4 h-4" />
            </button>

            <div
              className={`absolute right-0 top-12 w-48 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-4 flex flex-col gap-4 transition-all origin-top-right ${
                isPrefsOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-secondary)]">{t.preferences.language}</span>
                <TogglePill
                  options={languageOptions}
                  active={language}
                  onChange={setLanguage}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-secondary)]">{t.preferences.theme}</span>
                <TogglePill options={themeOptions} active={theme} onChange={setTheme} />
              </div>
            </div>
          </div>

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
