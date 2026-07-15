import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Background from "../components/Background";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import Education  from "../components/Education";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    const location = useLocation();

    // Se a Home for aberta com um hash (ex: veio do Header em outra página
    // clicando em "Sobre" ou "Contato"), rola até a seção certa.
    useEffect(() => {
        if (!location.hash) return;
        const target = document.querySelector(location.hash);
        if (target) {
            setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
        }
    }, [location]);

    return (
        <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent)] selection:text-[var(--accent-on)]">
            {/* Background com grid e partículas */}
            <Background />

            {/* Conteúdo principal */}
            <div className="relative z-10">
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection variant="home" />
                    <Education />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
