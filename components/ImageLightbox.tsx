'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  category?: string;
  serviceUrl?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageUrl,
  title,
  category,
  serviceUrl,
}: ImageLightboxProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 backdrop-blur-sm cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
              <Image
                src={imageUrl}
                alt={title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-white bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="text-center sm:text-left">
                {category && (
                  <span className="text-highlight text-xs uppercase font-bold tracking-wider">
                    {category}
                  </span>
                )}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {serviceUrl && (
                  <a
                    href={serviceUrl}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg border border-white/20 transition-colors flex items-center gap-1.5"
                  >
                    <span>View Service</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-4 py-2 bg-cta-gradient bg-cta-gradient-hover text-white text-xs font-bold rounded-lg shadow transition-transform hover:scale-105 flex items-center gap-1.5 border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
