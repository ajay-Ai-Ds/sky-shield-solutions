import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Grid, Shirt, ChevronRight } from 'lucide-react';
import { services, serviceCategories, ServiceItem } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Safety Nets & Invisible Grill Services in Chennai | Sky Shield`,
  description: `Explore Sky Shield's full spectrum of balcony safety nets, anti-bird netting, SS 316 invisible grills, and ceiling cloth drying hangers across Chennai. Free site inspection.`,
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: `Safety Nets & Invisible Grill Installation Services | Sky Shield Chennai`,
    description: `Browse all safety net, invisible grill, and cloth drying solutions with 5-year warranty across Chennai.`,
    url: `https://${siteConfig.domain}/services`,
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
      name: 'Services',
      item: `https://${siteConfig.domain}/services`,
    },
  ],
};

export default function ServicesPage() {
  const safetyNets = services.filter((s) => s.category === 'safety-nets');
  const invisibleGrills = services.filter((s) => s.category === 'invisible-grills');
  const clothHangers = services.filter((s) => s.category === 'cloth-hangers');

  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header Banner */}
      <section className="bg-secondary text-white py-16 px-4 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Services</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Our Protection & Utility Services
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Complete range of premium safety nets, invisible grills, and cloth drying solutions for homes and businesses across Chennai.
          </p>
        </div>
      </section>

      {/* Quick Jump Category Bar */}
      <div className="sticky top-[72px] z-30 bg-surface border-b border-slate-200 shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 text-sm font-semibold overflow-x-auto">
          <a
            href="#safety-nets"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-secondary border border-slate-200 hover:border-primary hover:text-primary transition-all whitespace-nowrap shadow-sm"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span>Safety Nets ({safetyNets.length})</span>
          </a>
          <a
            href="#invisible-grills"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-secondary border border-slate-200 hover:border-primary hover:text-primary transition-all whitespace-nowrap shadow-sm"
          >
            <Grid className="w-4 h-4 text-primary" />
            <span>Invisible Grills ({invisibleGrills.length})</span>
          </a>
          <a
            href="#cloth-hangers"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-secondary border border-slate-200 hover:border-primary hover:text-primary transition-all whitespace-nowrap shadow-sm"
          >
            <Shirt className="w-4 h-4 text-primary" />
            <span>Cloth Hangers ({clothHangers.length})</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20 pt-12">
        {/* Category 1: Safety Nets */}
        <section id="safety-nets" className="scroll-mt-32 space-y-8">
          <div className="flex items-center gap-4 border-b-2 border-primary/30 pb-4">
            <div className="p-3 bg-secondary text-highlight rounded-xl shadow-md">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-secondary">
                Safety Nets Solutions ({safetyNets.length})
              </h2>
              <p className="text-text-secondary text-sm">
                UV-stabilized high-tensile nets for balconies, pigeons, pets, children, and sports.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyNets.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Category 2: Invisible Grills */}
        <section id="invisible-grills" className="scroll-mt-32 space-y-8 bg-surface p-8 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-4 border-b-2 border-primary/30 pb-4">
            <div className="p-3 bg-secondary text-highlight rounded-xl shadow-md">
              <Grid className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-secondary">
                Invisible Grills ({invisibleGrills.length})
              </h2>
              <p className="text-text-secondary text-sm">
                SS 316 marine-grade cable invisible grills for unblocked views with high security.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {invisibleGrills.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Category 3: Cloth Hangers */}
        <section id="cloth-hangers" className="scroll-mt-32 space-y-8">
          <div className="flex items-center gap-4 border-b-2 border-primary/30 pb-4">
            <div className="p-3 bg-secondary text-highlight rounded-xl shadow-md">
              <Shirt className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-secondary">
                Cloth Drying Hangers ({clothHangers.length})
              </h2>
              <p className="text-text-secondary text-sm">
                Ceiling-mounted pulley racks and balcony wall foldable hangers for modern living.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clothHangers.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
