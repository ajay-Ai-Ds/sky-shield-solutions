import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Contact Sky Shield Solutions | Free Site Visit Chennai`,
  description: `Contact Sky Shield Safety Nets & Invisible Grills Chennai. Call ${siteConfig.phone} or ${siteConfig.phoneSecondary} for free doorstep measurement, instant quote & fast installation.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Sky Shield Safety Nets & Invisible Grills Chennai`,
    description: `Schedule free doorstep measurement for safety nets and invisible grills across Chennai.`,
    url: `https://${siteConfig.domain}/contact`,
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
      name: 'Contact Us',
      item: `https://${siteConfig.domain}/contact`,
    },
  ],
};

export default function ContactLayout({
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
