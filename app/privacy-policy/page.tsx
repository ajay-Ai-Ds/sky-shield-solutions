import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Privacy Policy | Sky Shield Safety Nets & Invisible Grills`,
  description: `Privacy policy and customer data protection commitment of Sky Shield Safety Nets & Invisible Grills in Chennai.`,
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: `Privacy Policy | Sky Shield Solutions`,
    description: `Learn how Sky Shield protects customer personal information.`,
    url: `https://${siteConfig.domain}/privacy-policy`,
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
      name: 'Privacy Policy',
      item: `https://${siteConfig.domain}/privacy-policy`,
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header Banner */}
      <section className="bg-secondary text-white py-14 px-4 border-b-2 border-primary text-center space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Privacy Policy</span>
          </div>

          <h1 className="font-serif text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
            Last Updated: August 2026 | {siteConfig.businessName}, Chennai
          </p>
        </div>
      </section>

      {/* Main Policy Body */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-8 text-text-main leading-relaxed">
        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            1. Introduction
          </h2>
          <p>
            At <span className="font-bold">{siteConfig.businessName}</span> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating from {siteConfig.address}, we respect your personal privacy and are committed to protecting the information you share with us through our website ({siteConfig.domain}), phone communications, and WhatsApp consultations.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            2. Information We Collect
          </h2>
          <p>
            When you inquire about our safety nets, invisible grills, or cloth drying hanger installation services, we may collect the following details:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
            <li><strong className="text-secondary">Contact Information:</strong> Name, phone number, email address, and doorstep site inspection location in Chennai.</li>
            <li><strong className="text-secondary">Service Preferences:</strong> Information regarding balcony dimensions, window types, property locality, and photos shared for estimation.</li>
            <li><strong className="text-secondary">Communication Data:</strong> Records of inquiries submitted through our website contact forms, WhatsApp messages, or call logs.</li>
          </ul>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            3. How We Use Your Information
          </h2>
          <p>We strictly utilize collected personal data for legitimate business purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
            <li>Scheduling free doorstep measurements and site inspections in Chennai.</li>
            <li>Providing accurate quotations and technical installation details.</li>
            <li>Issuing official material warranty documentation upon project completion.</li>
            <li>Responding to customer service or warranty queries.</li>
          </ul>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            4. Data Protection & Non-Sharing Commitment
          </h2>
          <p>
            <strong className="text-primary">We do not sell, rent, trade, or lease your personal information</strong> to third-party telemarketers or external advertisers. Your contact details are stored securely and accessed exclusively by authorized technical personnel at {siteConfig.businessName}.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            5. Cookies & Website Analytics
          </h2>
          <p>
            Our website uses standard technical cookies to ensure smooth navigation, performance monitoring, and responsive layout loading. You can manage cookie preferences directly in your web browser settings.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            6. Contact Us Regarding Privacy Queries
          </h2>
          <p>
            If you have any questions or wish to update or delete your contact records, please contact our administrative desk:
          </p>
          <div className="space-y-2 text-sm font-semibold pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>Email: {siteConfig.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>Phone: {siteConfig.phone}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
              <span>Address: {siteConfig.address}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
