import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { navLinks, businessInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white shadow-lg shadow-slate-900/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3 group"
          >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white/90 shadow-lg shadow-slate-900/10">
        <img
            src="/logo.png"
            alt="Teo Metal"
            className="w-full h-full object-contain scale-110"
        />
            </div>
          </div>
            <div className="flex flex-col">
              <span className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Teo Metal
              </span>
              <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-slate-400' : 'text-sky-200'
              }`}>
                Shtime, Kosovë
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className={`relative text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-sky-400 ${
                  isScrolled ? 'text-slate-600' : 'text-white/80'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${businessInfo.phone}`} className={`flex items-center gap-2 font-medium transition-colors duration-300 ${
              isScrolled ? 'text-slate-600 hover:text-sky-500' : 'text-white/80 hover:text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span className="text-sm">{businessInfo.phone}</span>
            </a>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-6 py-2.5 h-auto text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 rounded-full"
            >
              Kërko Ofertë
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-slate-700 hover:text-sky-500 hover:bg-sky-50 text-base font-medium py-3 px-4 rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100">
            <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-3 text-slate-600 py-3 px-4">
              <Phone className="w-5 h-5 text-sky-500" />
              <span className="font-medium">{businessInfo.phone}</span>
            </a>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 h-auto rounded-full"
            >
              Kërko Ofertë
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
