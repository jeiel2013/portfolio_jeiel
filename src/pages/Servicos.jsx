import { MessageCircle } from "lucide-react";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Process from "../components/Process";
import { getWhatsAppLink } from "../config/whatsapp";
import { useLanguage } from "../context/LanguageContext";

function Servicos() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d9a3] selection:text-black">
      <Background />

      <div className="relative z-10">
        <Header />
        <main className="pt-24">
          <section className="px-6 pb-9 lg:pb-20 pt-6 text-center max-w-3xl mx-auto">
            <span className="text-[#00d9a3] font-mono text-sm tracking-widest mb-4 block">
              {t.servicosPage.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl pt-8 font-semibold tracking-tight text-white">
              {t.servicosPage.heading}
            </h1>
          </section>

          <Services />
          <Process />

          <section className="py-24 px-6 border-t border-white/[0.08] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00d9a3]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="max-w-2xl mx-auto text-center relative">
              <span className="text-[#00d9a3] font-mono text-sm tracking-widest mb-4 block">
                {t.servicosPage.ctaEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                {t.servicosPage.ctaTitle}
              </h2>
              <p className="text-[#a1a1aa] mb-10 max-w-md mx-auto">
                {t.servicosPage.ctaText}
              </p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9a3] text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00d9a3]/20"
              >
                <MessageCircle className="w-5 h-5" />
                {t.contact.whatsappCta}
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Servicos;
