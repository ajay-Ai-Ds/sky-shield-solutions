import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MapPin, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Safety Net & Invisible Grill Installation Areas | Chennai | Sky Shield`,
  description: `Sky Shield provides same-day safety nets and invisible grill installation across Pallikaranai, Medavakkam, Velachery, OMR, Tambaram, and all Chennai localities.`,
  alternates: {
    canonical: '/areas',
  },
  openGraph: {
    title: `Chennai Service Areas | Sky Shield Safety Solutions`,
    description: `Locality-wide coverage for balcony safety nets, invisible grills & bird netting across Chennai.`,
    url: `https://${siteConfig.domain}/areas`,
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
      name: 'Areas Served',
      item: `https://${siteConfig.domain}/areas`,
    },
  ],
};

const chennaiLocalities = [
  'Pallikaranai (Headquarters)',
  'Medavakkam',
  'Velachery',
  'Madipakkam',
  'Sholinganallur',
  'Perungudi',
  'Keelkattalai',
  'Tambaram',
  'Adyar',
  'OMR (Old Mahabalipuram Rd)',
  'ECR (East Coast Rd)',
  'Thoraipakkam',
  'Navalur',
  'Chromepet',
  'Guindy',
  'Saidapet',
  'Anna Nagar',
  'T. Nagar',
  'Nungambakkam',
  'Mylapore',
  'Alwarpet',
  'R.A. Puram',
  'Vadapalani',
  'Ashok Nagar',
  'KK Nagar',
  'Porur',
  'Valasaravakkam',
  'Kilpauk',
  'Egmore',
  'Mogappair',
  'Kanchipuram District',
  'Thiruvallur District',
];

export default function AreasPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header Banner */}
      <section className="bg-secondary text-white py-16 px-4 border-b-2 border-primary text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Areas We Serve</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Service Coverage Across Chennai
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fast doorstep site visit, transparent measurement, and expert installation in all major residential & commercial areas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-16">
        {/* Headquarter Highlight */}
        <section className="bg-surface rounded-2xl p-8 border-2 border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Headquarters Location
            </span>
            <h2 className="font-serif text-2xl font-bold text-secondary">
              Based in {siteConfig.area}, Serving Greater Chennai
            </h2>
            <p className="text-text-secondary text-sm max-w-xl">
              Our central office at {siteConfig.address} enables us to dispatch technicians to any neighborhood in Chennai within 24 hours.
            </p>
          </div>
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="px-6 py-3 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg shadow-md text-sm shrink-0 flex items-center gap-2 border border-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {siteConfig.phone}</span>
          </a>
        </section>

        {/* Localities Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl font-bold text-secondary">
              Chennai Neighborhoods & Localities Covered
            </h2>
            <p className="text-text-secondary text-sm">
              We provide free doorstep site inspections across all these areas:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {chennaiLocalities.map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-primary shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-surface text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-secondary group-hover:text-primary transition-colors">
                    {area}
                  </h3>
                  <span className="text-[10px] text-text-muted block">Available 7 Days</span>
                </div>
              </div>
            ))}
          </div>

          {/* Don't see your area callout */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 text-center space-y-2 shadow-sm">
            <p className="text-sm font-semibold text-secondary">
              Don&apos;t see your specific locality listed?
            </p>
            <p className="text-xs text-text-secondary">
              We cover all extended metro suburbs in Chennai, Kanchipuram, and Thiruvallur. Contact us to confirm immediate technician availability.
            </p>
          </div>
        </section>

        {/* General Coverage Google Map */}
        <section className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-secondary">
              Chennai Metropolitan Coverage Map
            </h2>
            <p className="text-text-secondary text-sm">
              Centralized dispatch across East, West, North, and South Chennai.
            </p>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md bg-surface">
            <iframe
              title="Chennai Service Area Map"
              src="https://maps.google.com/maps?q=Chennai,+Tamil+Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-secondary text-white rounded-2xl p-8 sm:p-12 border-2 border-primary text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white">
            Get a Free Site Visit Quote for Your Area
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Our technicians will visit your home in Chennai, measure your balcony or window dimensions, and provide an instant transparent quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3.5 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg transition-colors shadow-md text-sm border border-white/20"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Sky%20Shield%20Solutions,%20I%20want%20to%20check%20if%20you%20serve%20my%20area.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-whatsapp text-white font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-md text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
