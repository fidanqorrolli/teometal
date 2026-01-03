import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { businessInfo, navLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-sky-500 to-blue-600" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center rounded-xl">
                  <span className="text-white font-bold text-2xl">T</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <span className="text-white font-bold text-xl block">Teo Metal</span>
                <span className="text-slate-500 text-sm">Shtime, Kosovë</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Punime profesionale me metal në Shtime dhe rrethinë. Shkallë hekuri emergjente, rrethoja, konstruksione metalike dhe punime sipas porosisë.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="w-11 h-11 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-sky-500 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a 
                href={`mailto:${businessInfo.email}`}
                className="w-11 h-11 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-sky-500 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Linke të Shpejta</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block text-slate-400 hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Kontakti</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 mt-0.5" />
                <p className="text-slate-400">{businessInfo.phone}</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 mt-0.5" />
                <p className="text-slate-400">{businessInfo.email}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-0.5" />
                <p className="text-slate-400 text-sm">{businessInfo.address.full}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Teo Metal. Të gjitha të drejtat e rezervuara.
          </p>
          <button
            onClick={scrollToTop}
            className="w-11 h-11 bg-slate-800 flex items-center justify-center rounded-xl hover:bg-sky-500 transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
