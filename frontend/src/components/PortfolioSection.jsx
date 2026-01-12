import React from 'react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../data/mock';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-bold uppercase tracking-widest mb-4">Galeria</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Projektet tona</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-sky-400 font-bold text-sm mb-2">{project.category}</span>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
                <p className="text-slate-300 text-sm mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
