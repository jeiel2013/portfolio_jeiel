import Header from "../components/Header";
import HeroSection from "../components/HeroSection";;
import AboutSection from "../components/About";
import ProjectsSection from "../components/Projects";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactSection/>
            <Footer/>
        </>
    );
}

export default Home;