import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Photo Gallery | Sky Shield Safety Nets & Invisible Grills Chennai`,
  description: `Explore high-resolution photos of our balcony safety nets, pigeon protection nets, invisible grills, and cloth drying hangers installed across Chennai homes.`,
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: `Installation Gallery | Sky Shield Safety Nets Chennai`,
    description: `Visual showcase of real balcony safety nets, invisible grills and anti-bird spikes.`,
    url: `https://${siteConfig.domain}/gallery`,
    siteName: siteConfig.businessName,
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `https://${siteConfig.domain}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Gallery',
      item: `https://${siteConfig.domain}/gallery`,
    },
  ],
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
