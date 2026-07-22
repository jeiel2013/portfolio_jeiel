import React from "react";
import {
  Home,
  Github,
  Linkedin,
  Mail,
  Star,
  ExternalLink,
  Send,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { SiX } from "react-icons/si";
import Background from "../components/Background";
import PreferencesMenu from "../components/PreferencesMenu";
import { useLanguage } from "../context/LanguageContext";
import { getWhatsAppLink } from "../config/whatsapp";

const currentYear = new Date().getFullYear();

const Links = () => {
  const { t } = useLanguage();
  const l = t.linksPage.links;

  const links = [
    {
      title: l.portfolio.title,
      url: "/",
      icon: <Home className="w-5 h-5" />,
      description: l.portfolio.description,
      color: "primary",
      delay: "100ms",
    },
    {
      title: l.github.title,
      url: "https://github.com/jeiel2013",
      icon: <Github className="w-5 h-5" />,
      description: l.github.description,
      color: "primary",
      external: true,
      delay: "200ms",
    },
    {
      title: l.studioKather.title,
      url: "https://studiokather.com/",
      icon: <Star className="w-5 h-5" />,
      description: l.studioKather.description,
      color: "primary",
      featured: true,
      external: true,
      delay: "300ms",
    },
    {
      title: l.email.title,
      url: "mailto:jeieldev.alves@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: l.email.description,
      color: "primary",
      rightIcon: <Send className="w-4 h-4" />,
      delay: "400ms",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-on)] flex flex-col items-center justify-center py-12 px-4">
      {/* Background compartilhado (partículas + grid), já ciente do tema */}
      <Background />

      {/* Menu de preferências (idioma + tema) */}
      <div className="fixed top-4 right-4 z-20">
        <PreferencesMenu />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-md relative z-10 flex flex-col items-center">
        {/* Profile Header */}
        <div className="text-center mb-8 w-full opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <div className="relative inline-block mb-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--accent-30)] p-1 bg-[var(--bg-card)]">
              <img
                src="https://github.com/jeiel2013.png"
                alt="Jeiel Alves"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-1 right-1 w-4 h-4 bg-[var(--accent)] border-2 border-[var(--bg-page)] rounded-full"
              title={t.linksPage.available}
            ></div>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] flex items-center justify-center gap-2">
            Jeiel Alves <span className="text-[var(--accent)] animate-pulse">_</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)] font-mono mt-2">
            {t.linksPage.role}
          </p>
          <p className="text-xs text-[var(--text-secondary-50)] mt-1 max-w-[280px] mx-auto">
            {t.linksPage.tagline}
          </p>
        </div>

        {/* Botão de WhatsApp — em destaque, com o dobro da altura dos demais */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center gap-4 px-5 py-6 sm:py-7 mb-3 rounded-xl bg-[var(--accent)] text-[var(--accent-on)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-[var(--accent-20)] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: "50ms" }}
        >
          <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[var(--accent-on)]/15 rounded-lg">
            <MessageCircle className="w-7 h-7" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-base font-semibold">{l.whatsapp.title}</h3>
            <p className="text-xs font-mono opacity-80">{l.whatsapp.description}</p>
          </div>
          <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Links Container */}
        <div className="w-full space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className={`group relative flex items-center p-1 pl-1 border border-[var(--border-subtle)] rounded-xl hover:border-[var(--accent-50)] transition-all duration-300 active:scale-[0.99] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${
                link.featured
                  ? "bg-gradient-to-r from-[var(--bg-card)] to-[var(--bg-card-alt)]"
                  : "bg-[var(--bg-card)] hover:bg-[var(--bg-card-alt)]"
              }`}
              style={{ animationDelay: link.delay }}
            >
              {link.featured && (
                <div className="absolute inset-0 bg-[var(--accent-10)] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              )}

              <div className="w-12 h-12 flex items-center justify-center bg-[var(--surface-muted)] rounded-lg text-[var(--text-primary)] group-hover:text-[var(--accent)] group-hover:bg-[var(--accent-10)] transition-colors z-10">
                {link.icon}
              </div>

              <div className="flex-1 px-4 z-10 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                    {link.title}
                  </h3>
                  {link.featured && (
                    <span className="text-[9px] font-bold bg-[var(--accent-20)] text-[var(--accent)] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                      {t.linksPage.badgeNew}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] font-mono truncate">
                  {link.description}
                </p>
              </div>

              <div className="pr-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-all z-10 group-hover:translate-x-1 shrink-0">
                {link.rightIcon || <ExternalLink className="w-4 h-4" />}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer
          className="mt-12 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://instagram.com/jeiel2013"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 hover:bg-[var(--surface-muted)] rounded-full"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jeiel2013"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--text-secondary)] hover:text-[#0A66C2] transition-colors p-2 hover:bg-[var(--surface-muted)] rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/jeiel2013"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 hover:bg-[var(--surface-muted)] rounded-full"
            >
              <SiX className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-[var(--text-secondary-50)] font-mono">
            © {currentYear} Jeiel Alves
          </p>
        </footer>
      </main>

      {/* Keyframes inline */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Links;
