'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  ShieldCheck,
  Star,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface Slide {
  id: number;
  headline: string;
  subheading: string;
  tag: string;
  bgImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: 'Next-Gen Fall Protection & Balcony Safety',
    subheading: 'Engineered high-tensile HDPE safety nets custom fitted with zero compromise on skyline views across Chennai.',
    tag: 'Sky Shield Certified Protection',
    bgImage: '/images/main-images/balconynet-1.jpg',
  },
  {
    id: 2,
    headline: 'SS 316 Invisible Grills — Uncompromised Panoramas',
    subheading: 'Marine-grade 400kg tensile strength cables delivering architectural security with crystal clear horizon vistas.',
    tag: 'Architectural Grade Security',
    bgImage: '/images/main-images/balcony-grills.jpg',
  },
  {
    id: 3,
    headline: 'Humane Pigeon Exclusion & Pure Hygiene',
    subheading: 'Durable, transparent bird netting solutions preserving pristine cleanliness across balconies and utility shafts.',
    tag: '100% Humane Bird Control',
    bgImage: '/images/main-images/client-grill-1.jpg',
  },
  {
    id: 4,
    headline: 'Smart Space-Saving Ceiling Drying Solutions',
    subheading: 'Smooth pulley-operated SS 304 cloth drying racks designed to reclaim balcony floor space effortlessly.',
    tag: 'Smart Urban Living',
    bgImage: '/images/main-images/cloth-hangera-1.jpg',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance timer (5s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-primary text-white overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Clear, Bright Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].bgImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
        />
      </AnimatePresence>

      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 z-10" />

      {/* Slide Content without dark card box */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center py-16 sm:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/70 border border-accent/60 text-white text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-accent-light" />
              <span>{slides[currentSlide].tag}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight flex items-center justify-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              {slides[currentSlide].headline}
            </h1>

            <p className="text-base sm:text-xl text-white max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {slides[currentSlide].subheading}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-white/20"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold rounded-lg bg-cta-gradient bg-cta-gradient-hover text-white shadow-xl hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer border border-white/20"
              >
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span>{siteConfig.phone} - Get Free Quote</span>
              </a>
            </div>

            {/* Trust Microcopy */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-light shrink-0" />
              <span>Free site visit, no obligation • Response within 30 minutes</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Fixed Trust Badges Row */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-accent/30 text-center mt-8">
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-semibold drop-shadow">500+ Successful Installations</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Star className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-semibold drop-shadow">5-Year Materials Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-accent shrink-0" />
            <span className="text-sm text-white font-semibold drop-shadow">Same Day Free Site Visit</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/80 text-white hover:bg-accent transition-colors shadow-lg border border-accent/30 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 md:left-auto md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary/80 text-white hover:bg-accent transition-colors shadow-lg border border-accent/30 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-accent'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
