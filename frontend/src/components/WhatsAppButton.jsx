import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/mock';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${businessInfo.phoneClean}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Na kontaktoni në WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-2xl animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center rounded-2xl shadow-xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap shadow-xl">
            Na shkruani në WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-slate-900" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
