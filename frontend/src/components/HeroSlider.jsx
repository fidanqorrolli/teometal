import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Diese Bilder werden automatisch gewechselt
const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200",
    title: "Shkallë Emergjente",
    desc: "Siguri maksimale dhe dizajne moderne sipas standardeve."
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    title: "Rrethoja të Hekurit",
    desc: "Estetikë dhe mbrojtje për shtëpinë apo objektin tuaj."
  },
  {
    url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
    title: "Konstruksione Metalike",
    desc: "Punime profesionale për halla dhe projekte industriale."
  }
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Wechsel alle 5 Sekunden
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Dunkler Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img 
            src={sliderImages[index].url} 
            className="w-full h-full object-cover"
            alt="Teo Metal"
          />
          <div className="absolute bottom-8 left-8 z-20 text-white max-w-md">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl md:text-3xl font-bold mb-2"
            >
              {sliderImages[index].title}
            </motion.h3>
            <p className="text-sky-100 text-sm md:text-base">
              {sliderImages[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indikatoren (Punkte unten) */}
      <div className="absolute bottom-5 right-8 z-30 flex gap-2">
        {sliderImages.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'bg-sky-500 w-8' : 'bg-white/40 w-4'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
