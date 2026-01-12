import React from "react";
import "./App.css";
import { Toaster } from 'sonner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }import React from "react";
import "./App.css";
import { Toaster } from 'sonner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection'; // Neu importiert
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Hintergrund auf slate-900 geändert für einen modernen Look
    <div className="App bg-slate-900 min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection onRequestQuote={scrollToContact} />
        <ServicesSection onRequestQuote={scrollToContact} />
        {/* Die neue Galerie zwischen Services und WhyUs eingefügt */}
        <PortfolioSection /> 
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
  };

  return (
    <div className="App bg-white min-h-screen">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#1e293b',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.15)',
            padding: '16px',
          },
        }}
      />
      <Header />
      <main>
        <HeroSection onRequestQuote={scrollToContact} />
        <WhyUsSection />
        <ServicesSection onRequestQuote={scrollToContact} />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
