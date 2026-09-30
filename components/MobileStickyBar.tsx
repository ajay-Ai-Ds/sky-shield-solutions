'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-md text-white border-t border-accent/40 shadow-2xl p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
      <div className="grid grid-cols-3 gap-2 items-center text-center">
        {/* 1. Call Button */}
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-primary-light border border-accent/30 text-white active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-accent mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Us</span>
        </a>

        {/* 2. WhatsApp Button (Center & Emphasized) */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-whatsapp text-white active:scale-95 transition-transform shadow-md border border-white/20"
        >
          <WhatsAppIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-extrabold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Quote Button */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-accent text-white active:scale-95 transition-transform shadow-md"
        >
          <CalendarCheck className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
