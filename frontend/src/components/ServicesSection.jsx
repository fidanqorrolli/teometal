import React from 'react';
import { TrendingUp, Building2, Grid3X3, Circle, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Stairs: TrendingUp,
  Building2: Building2,
  Fence: Grid3X3,
  Cylinder: Circle,
  Wrench: Wrench
};

const ServicesSection = ({ onRequestQuote }) => {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full mb-6">
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Shërbimet</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Çfarë <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Ofrojmë</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Zgjidhje të plota për të gjitha nevojat tuaja me punime metalike
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Top gradient bar */}
                <div className="h-2 bg-gradient-to-r from-sky-500 to-blue-600" />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center rounded-2xl mb-6 group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-500">
                    <IconComponent className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <button 
                    onClick={onRequestQuote}
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Kërko ofertë
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-sky-400" />
              <span className="text-white font-medium">Oferta falas për të gjitha shërbimet</span>
            </div>
            <button 
              onClick={onRequestQuote}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/30"
            >
              Kërko Tani
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
