'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';

interface ServiceImageGalleryProps {
  mainImage: string;
  title: string;
  categoryName: string;
  galleryImages?: {
    id: number;
    title: string;
    image: string;
    categoryName: string;
  }[];
}

export default function ServiceImageGallery({
  mainImage,
  title,
  categoryName,
  galleryImages = [],
}: ServiceImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <>
      {/* Featured Main Service Image */}
      <div
        onClick={() => setSelectedImage({ url: mainImage, caption: title })}
        className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 group cursor-pointer"
        title="Click to view full image"
      >
        <Image
          src={mainImage}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
          className={`object-cover ${
            mainImage.includes('shade-net') ? 'object-top' : 'object-center'
          } group-hover:scale-105 transition-transform duration-500`}
        />
        <div className="absolute bottom-3 left-3 bg-secondary/90 text-highlight text-xs font-bold px-3 py-1.5 rounded-full border border-primary/40 backdrop-blur-sm z-10">
          Verified Installation Image
        </div>

        {/* Hover zoom badge */}
        <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-[2px]">
          <div className="p-2.5 rounded-full bg-primary/95 text-white shadow-xl flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            <span>Click to View Full Image</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.caption || title}
        category={categoryName}
      />
    </>
  );
}
