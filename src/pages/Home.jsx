import Background from "../components/Background";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="relative min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d9a3] selection:text-black">
            {/* Background com grid e partículas */}
            <Background />

            {/* Conteúdo principal */}
            <div className="relative z-10">
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Home;