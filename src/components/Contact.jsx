import React from "react";
import { MessageCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { getWhatsAppLink } from "../config/whatsapp";
import { getMailtoLink } from "../config/contact";
import { useLanguage } from "../context/LanguageContext";

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-10)] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[var(--accent)] font-mono text-sm tracking-widest mb-4 block">
          {t.contact.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--text-primary)] mb-6">
          {t.contact.title}
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-xl mx-auto">
          {t.contact.description}
        </p>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--accent-on)] font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[var(--accent-20)]"
        >
          <MessageCircle className="w-5 h-5" />
          {t.contact.whatsappCta}
        </a>

        <div className="mt-4">
          <a
            href={getMailtoLink()}
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {t.contact.emailSecondary}
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://github.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/jeiel2013"
            target="-blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[#E4405F] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/jeiel2013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="X"
          >
            <SiX className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
