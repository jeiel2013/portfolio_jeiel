import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/HeroSection.jsx'
import Header from './components/Header.jsx'
import AboutSection from './components/About.jsx'
import ContactSection from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </StrictMode>,
)
