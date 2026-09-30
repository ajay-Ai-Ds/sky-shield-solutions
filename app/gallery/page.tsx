'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Shield,
  X,
  ChevronLeft,
  MapPin,
  Maximize2,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface GalleryItem {
  id: number;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers';
  categoryLabel: string;
  location: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'High-Rise Balcony Safety Net Fitting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Pallikaranai, Chennai', image: '/images/main-images/balconynet-1.jpg' },
  { id: 2, title: 'Balcony Protection Net Enclosure', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Anna Nagar, Chennai', image: '/images/main-images/client-balconynet.jpg' },
  { id: 3, title: 'Pigeon Anti-Bird Net Utility Protection', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'T. Nagar, Chennai', image: '/images/main-images/pigeon-net.jpg' },
  { id: 4, title: 'Child Safety Net Installation', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Velachery, Chennai', image: '/images/main-images/children-safety-net.jpg' },
  { id: 5, title: 'Pet Balcony Safety Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Adyar, Chennai', image: '/images/main-images/pet.jpg' },
  { id: 6, title: 'Anti-Bird Stainless Steel Spikes', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Egmore, Chennai', image: '/images/main-images/bird-spikes.jpg' },
  { id: 7, title: 'Duct Area Shaft Netting - View 1', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Porur, Chennai', image: '/images/main-images/duct-area-1.jpg' },
  { id: 8, title: 'Duct Area Shaft Netting - View 2', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Nungambakkam, Chennai', image: '/images/main-images/duct-area-2.jpg' },
  { id: 9, title: 'Duct Area Vertical Shaft Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Mogappair, Chennai', image: '/images/main-images/duct-area-3.jpg' },
  { id: 10, title: 'Building Shaft High-Tensile Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Kilpauk, Chennai', image: '/images/main-images/duct-area-4.jpg' },
  { id: 11, title: 'Monkey Deterrent Heavy Wire Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Ashok Nagar, Chennai', image: '/images/main-images/monkey.jpeg' },
  { id: 12, title: 'Cricket Pitch Enclosure Net', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'KK Nagar, Chennai', image: '/images/main-images/cricket-practicenet.jpg' },
  { id: 13, title: 'Rooftop Sports Boundary Netting - Court 1', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'OMR, Chennai', image: '/images/main-images/sports-net.jpg' },
  { id: 14, title: 'Sports Boundary Net Enclosure - Court 2', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'ECR, Chennai', image: '/images/main-images/sports-net-2.jpg' },
  { id: 15, title: 'Ground Sports Boundary Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Tambaram, Chennai', image: '/images/main-images/sports-nets-3.jpg' },
  { id: 16, title: 'Industrial Construction Debris Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Guindy, Chennai', image: '/images/main-images/factory-net-1.jpg' },
  { id: 17, title: 'Duplex Staircase Void Safety Netting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Saligramam, Chennai', image: '/images/main-images/staircase-net-1.jpg' },

  { id: 18, title: 'Panoramic Balcony SS 316 Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Pallikaranai, Chennai', image: '/images/main-images/balcony-grills.jpg' },
  { id: 19, title: 'Balcony Invisible Grill Work - Close-up', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Anna Nagar, Chennai', image: '/images/main-images/balcony-grill-work.jpg' },
  { id: 20, title: 'Luxury Apartment Balcony Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'T. Nagar, Chennai', image: '/images/main-images/balcony-grills-2.jpg' },
  { id: 21, title: 'High-Rise Balcony Cable Protection', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Nungambakkam, Chennai', image: '/images/main-images/balcony-grills-3.jpg' },
  { id: 22, title: 'Full Elevation Balcony Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Velachery, Chennai', image: '/images/main-images/balcony-grills-4.jpg' },
  { id: 23, title: 'Child Safety Window Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Adyar, Chennai', image: '/images/main-images/children-invisiblegrills.jpg' },
  { id: 24, title: 'French Window Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Mylapore, Chennai', image: '/images/main-images/window-grills.jpg' },
  { id: 25, title: 'Bay Window SS Cable Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Vadapalani, Chennai', image: '/images/main-images/window-grills-2.jpg' },
  { id: 26, title: 'Indoor Staircase Cable Invisible Railing', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Porur, Chennai', image: '/images/main-images/staircase-grills.jpg' },
  { id: 27, title: 'Commercial Office Facade Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'OMR, Chennai', image: '/images/main-images/client-grill-1.jpg' },

  { id: 28, title: 'Ceiling Pulley Cloth Drying Hanger', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Medavakkam, Chennai', image: '/images/main-images/cloth-hangera-1.jpg' },
  { id: 29, title: 'Balcony Wall Foldable Cloth Drying Rack', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Anna Nagar, Chennai', image: '/images/main-images/balconyclothhangers.jpg' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-primary text-white py-14 px-4 border-b-2 border-accent">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent-light font-medium">Gallery</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Installation Showcase Gallery
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base font-light">
            Browse our completed safety net, invisible grill, and cloth hanger projects across Chennai.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-12">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3">
          {[
            { id: 'all', label: 'All Photos (29)' },
            { id: 'safety-nets', label: 'Safety Nets (17)' },
            { id: 'invisible-grills', label: 'Invisible Grills (10)' },
            { id: 'cloth-hangers', label: 'Cloth Hangers (2)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setSelectedImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === tab.id
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-white text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group aspect-square bg-surface rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer"
            >
              <Image
                src={item.image}
                alt={`${siteConfig.businessName} ${item.title} ${item.location}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-wider font-bold text-accent-light">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif font-bold text-xs text-white line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Maximize2 className="w-8 h-8 text-accent transform scale-90 group-hover:scale-100 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL OVERLAY */}
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white p-2 hover:text-accent transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image Detail Card */}
            <div className="max-w-3xl w-full bg-primary text-white rounded-2xl p-6 border border-accent/40 shadow-2xl space-y-4 text-center relative overflow-hidden">
              <div className="w-full aspect-video bg-primary-light rounded-xl overflow-hidden relative">
                <Image
                  src={filteredItems[selectedImageIndex].image}
                  alt={`${siteConfig.businessName} ${filteredItems[selectedImageIndex].title}`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent-light border border-accent/30 inline-block">
                  {filteredItems[selectedImageIndex].categoryLabel}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {filteredItems[selectedImageIndex].title}
                </h2>
                <div className="flex items-center justify-center gap-1 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{filteredItems[selectedImageIndex].location}</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
