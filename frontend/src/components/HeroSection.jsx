import React from 'react';
import { Phone, FileText, Play, ChevronDown, Hammer, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../data/mock';
import HeroSlider from './HeroSlider';

const HeroSection = ({ onRequestQuote }) => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sky-200 text-sm font-medium">Aktiv që nga 2001</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              <span className="text-white">Teo</span>
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"> Metal</span>
            </h1>

            {/* Tagline with accent line */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-16 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full mt-1" />
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                Prodhim dhe montim profesional i të gjitha punimeve metalike sipas kërkesës suaj.
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Shkallë emergjente,gilindera, rrethoja, dyrë, konstruksione metalike dhe punime sipas porosisë me cilësi të lartë.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={onRequestQuote}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold px-8 py-4 h-auto text-base transition-all duration-300 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:scale-105 rounded-full"
              >
                <FileText className="w-5 h-5 mr-2" />
                Kërko Ofertë
              </Button>
              
              <a href={`tel:${businessInfo.phone}`}>
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-4 h-auto text-base transition-all duration-300 rounded-full backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Thirr Tani
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-slate-400">Vite Eksperiencë</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-400">Projekte</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400">Cilësi dhe besueshmëri</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
<div className="order-1 lg:order-2 relative">
  <HeroSlider />
</div>
              
              {/* Image placeholder with gradient */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20" />
                
                {/* Icon grid representing metal work */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                      <Hammer className="w-10 h-10 text-sky-400" />
                    </div>
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                      <Shield className="w-10 h-10 text-sky-400" />
                    </div>
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                      <Clock className="w-10 h-10 text-sky-400" />
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Cilësi e Garantuar</div>
                      <div className="text-sky-200 text-sm">Punime profesionale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-sky-400" />
      </div>
    </section>
  );
};

export default HeroSection;
