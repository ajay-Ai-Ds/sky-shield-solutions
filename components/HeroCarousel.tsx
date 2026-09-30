'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: 'Next-Gen Fall Protection & Balcony Safety',
    subheading: 'Engineered high-tensile HDPE safety nets custom fitted with zero compromise on skyline views across Chennai.',
    tag: 'Sky Shield Certified Protection',
    bgImage: '/images/main-images/balconynet-1.jpg',
    alt: 'High rise balcony safety net installation in Chennai by Sky Shield',
  },
  {
    id: 2,
    headline: 'SS 316 Invisible Grills — Uncompromised Panoramas',
    subheading: 'Marine-grade 400kg tensile strength cables delivering architectural security with crystal clear horizon vistas.',
    tag: 'Architectural Grade Security',
    bgImage: '/images/main-images/balcony-grills.jpg',
    alt: 'Stainless steel 316 invisible grills installed on apartment balcony',
  },
  {
    id: 3,
    headline: 'Humane Pigeon Exclusion & Pure Hygiene',
    subheading: 'Durable, transparent bird netting solutions preserving pristine cleanliness across balconies and utility shafts.',
    tag: '100% Humane Bird Control',
    bgImage: '/images/main-images/client-grill-1.jpg',
    alt: 'Anti-pigeon bird net installation in Chennai residential complex',
  },
  {
    id: 4,
    headline: 'Smart Space-Saving Ceiling Drying Solutions',
    subheading: 'Smooth pulley-operated SS 304 cloth drying racks designed to reclaim balcony floor space effortlessly.',
    tag: 'Smart Urban Living',
    bgImage: '/images/main-images/cloth-hangera-1.jpg',
    alt: 'Pulley operated ceiling cloth drying hanger system in balcony',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance timer (5.5s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Mobile touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Featured Solutions Carousel"
      className="relative min-h-[82vh] sm:min-h-[86vh] md:min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Stacked Images for Seamless 400ms Sharp Crossfade (No blur, no tint wash) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.bgImage}
                alt={slide.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
                quality={85}
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* Natural Dark Gradient Overlay for Maximum Text Contrast (Zero Color Distortion) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65 z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center py-14 sm:py-18 md:py-24">
        <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/80 border border-primary/40 text-highlight text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-primary-light shrink-0" />
            <span>{slides[currentSlide].tag}</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] min-h-[2.4em] sm:min-h-[2.3em] flex items-center justify-center">
            {slides[currentSlide].headline}
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] min-h-[3em] sm:min-h-[2.5em] flex items-center justify-center">
            {slides[currentSlide].subheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer border border-white/20"
              aria-label="Chat with Sky Shield on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold rounded-lg bg-cta-gradient bg-cta-gradient-hover text-white shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer border border-white/20"
              aria-label={`Call Sky Shield Solutions at ${siteConfig.phone}`}
            >
              <Phone className="w-5 h-5 text-white shrink-0" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>

          {/* Trust Microcopy */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-200 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            <CheckCircle2 className="w-4 h-4 text-highlight shrink-0" />
            <span>Free Doorstep Measurement in Chennai • Quick 30-Min Response</span>
          </div>
        </div>

        {/* Fixed Trust Highlights Row */}
        <div className="pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto border-t border-white/15 text-center mt-6 sm:mt-8">
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-highlight shrink-0" />
            <span className="text-xs sm:text-sm text-white font-semibold drop-shadow">500+ Verified Installations</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Star className="w-5 h-5 text-highlight shrink-0" />
            <span className="text-xs sm:text-sm text-white font-semibold drop-shadow">5-Year Materials Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Clock className="w-5 h-5 text-highlight shrink-0" />
            <span className="text-xs sm:text-sm text-white font-semibold drop-shadow">Same-Day Site Inspection</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Min 48x48 Touch Target */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-secondary/80 hover:bg-primary text-white transition-colors shadow-lg border border-white/20 backdrop-blur-sm cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-secondary/80 hover:bg-primary text-white transition-colors shadow-lg border border-white/20 backdrop-blur-sm cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? 'w-7 sm:w-8 bg-highlight'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
