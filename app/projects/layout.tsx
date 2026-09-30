import React from 'react';
import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Completed Projects & Installations | Sky Shield Chennai`,
  description: `View recent balcony safety nets, stainless steel invisible grills, and cloth hanger installations completed across residential apartments and villas in Chennai.`,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: `Completed Safety Installations & Case Studies | Sky Shield Chennai`,
    description: `Portfolio of verified balcony safety net and invisible grill installations across Chennai.`,
    url: `https://${siteConfig.domain}/projects`,
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
      name: 'Projects',
      item: `https://${siteConfig.domain}/projects`,
    },
  ],
};

export default function ProjectsLayout({
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
