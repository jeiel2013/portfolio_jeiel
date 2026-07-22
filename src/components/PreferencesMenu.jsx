import React, { useState, useRef, useEffect } from "react";
import { Settings2, Moon, Sun } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

// Pill de duas opções, usado tanto pro idioma quanto pro tema
export function TogglePill({ options, active, onChange }) {
  return (
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
}

export const languageOptions = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

export const themeOptions = [
  { value: "dark", icon: <Moon className="w-3.5 h-3.5" />, ariaLabel: "Dark" },
  { value: "light", icon: <Sun className="w-3.5 h-3.5" />, ariaLabel: "Light" },
];

// Ícone único que abre um dropdown com os dois toggles — usado no Header
// (desktop) e em qualquer outra página que precise só disso, sem o menu
// de navegação completo (ex: a página /links).
function PreferencesMenu({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.preferences.label}
        aria-expanded={isOpen}
        className="w-9 h-9 flex items-center justify-center bg-[var(--surface-muted)] border border-[var(--border-subtle)] rounded-full text-[var(--text-primary)] hover:bg-[var(--surface-muted-hover)] transition-colors"
      >
        <Settings2 className="w-4 h-4" />
      </button>

      <div
        className={`absolute right-0 top-12 w-48 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-xl p-4 flex flex-col gap-4 transition-all origin-top-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)]">{t.preferences.language}</span>
          <TogglePill options={languageOptions} active={language} onChange={setLanguage} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)]">{t.preferences.theme}</span>
          <TogglePill options={themeOptions} active={theme} onChange={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default PreferencesMenu;
