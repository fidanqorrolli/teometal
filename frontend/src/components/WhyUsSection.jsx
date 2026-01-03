import React from 'react';
import { Shield, Ruler, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { whyUsPoints } from '../data/mock';

const iconMap = {
  Shield: Shield,
  Ruler: Ruler,
  Clock: Clock,
  CheckCircle: CheckCircle
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full mb-6">
            <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider">Pse Ne</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Pse <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Teo Metal</span>?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Zgjidhni cilësinë dhe profesionalizmin për projektet tuaja metalike
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <div 
                key={point.id}
                className="group relative bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-slate-50 group-hover:text-sky-50 transition-colors duration-500">
                  0{index + 1}
                </div>
                
                {/* Icon */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center rounded-2xl mb-6 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-bold text-slate-800 mb-3">
                  {point.title}
                </h3>
                <p className="relative text-slate-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
