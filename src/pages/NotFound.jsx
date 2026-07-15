import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-on)]">
      <Background />

      {/* flex-col + min-h-screen faz o footer ficar sempre no rodapé,
          mesmo quando o conteúdo é curto (como aqui) */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-16">
          <span className="text-[var(--accent)] font-mono text-sm tracking-widest mb-4 block">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4">
            {t.notFound.title}
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-sm">
            {t.notFound.text}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-on)] text-sm font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.notFound.backHome}
          </Link>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default NotFound;
