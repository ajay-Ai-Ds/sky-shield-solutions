'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-center gap-3">
      {/* WhatsApp Button (Top priority) */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 relative group animate-pulse hover:animate-none border-2 border-white/30"
      >
        <WhatsAppIcon className="w-8 h-8" />
        <span className="absolute right-16 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl border border-accent/30">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
        aria-label={`Call ${siteConfig.businessName}`}
        className="w-12 h-12 rounded-full bg-cta-gradient bg-cta-gradient-hover text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white/30 group relative"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-secondary text-white text-xs font-semibold px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
          Call {siteConfig.phone}
        </span>
      </a>
    </div>
  );
}
