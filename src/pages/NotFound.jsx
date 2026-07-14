import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d9a3] selection:text-black">
      <Background />

      {/* flex-col + min-h-screen faz o footer ficar sempre no rodapé,
          mesmo quando o conteúdo é curto (como aqui) */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-16">
          <span className="text-[#00d9a3] font-mono text-sm tracking-widest mb-4 block">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            {t.notFound.title}
          </h1>
          <p className="text-[#a1a1aa] text-sm mb-8 max-w-sm">
            {t.notFound.text}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d9a3] text-black text-sm font-semibold rounded-full hover:bg-[#00b386] transition-all"
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
