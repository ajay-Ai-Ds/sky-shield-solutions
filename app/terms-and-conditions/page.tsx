import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Terms & Conditions | Sky Shield Safety Nets & Invisible Grills`,
  description: `Service terms, 5-year warranty terms, measurement policies, and payment terms of Sky Shield Solutions in Chennai.`,
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: `Terms & Conditions | Sky Shield Solutions`,
    description: `Service and warranty terms for safety nets and invisible grill installations across Chennai.`,
    url: `https://${siteConfig.domain}/terms-and-conditions`,
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
      name: 'Terms & Conditions',
      item: `https://${siteConfig.domain}/terms-and-conditions`,
    },
  ],
};

export default function TermsPage() {
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
            <span className="text-white font-medium">Terms & Conditions</span>
          </div>

          <h1 className="font-serif text-4xl font-bold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
            Last Updated: August 2026 | {siteConfig.businessName}, Chennai
          </p>
        </div>
      </section>

      {/* Main Terms Body */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-8 text-text-main leading-relaxed">
        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            1. Scope of Service
          </h2>
          <p>
            These terms and conditions govern all installation services provided by <span className="font-bold">{siteConfig.businessName}</span> including balcony safety nets, pigeon control netting, child/pet safety nets, SS 316 marine-grade invisible grills, anti-bird spikes, and ceiling/wall cloth drying hangers across Chennai and surrounding districts.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            2. Site Visits & Quotations
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
            <li>Doorstep site measurements and inspections within Chennai city limits are provided free of cost with zero obligation.</li>
            <li>Initial telephone or WhatsApp estimates are based on customer-provided approximate dimensions and photos. Final binding quotations are confirmed following physical site measurement.</li>
            <li>Quotations issued by {siteConfig.businessName} remain valid for 30 calendar days from the date of inspection.</li>
          </ul>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            3. Installation & Property Access
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-text-muted">
            <li>Clients are requested to grant technician access to installation areas (balconies, windows, utility shafts) and provide standard power supply for drilling tools.</li>
            <li>Our technicians exercise utmost care to ensure drill holes are clean, securely anchored, and sealed against water seepage. Clients are advised to inform technicians of concealed electrical wiring or plumbing lines near installation surfaces.</li>
          </ul>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            4. Material Warranty Terms
          </h2>
          <p>
            {siteConfig.businessName} provides up to 5-year official warranty coverage on UV-stabilized safety nets and stainless steel invisible grill cables against manufacturing defects, UV degradation, and premature rusting under normal weather exposure.
          </p>
          <p className="text-sm text-text-muted">
            <strong className="text-secondary">Warranty Exclusions:</strong> Warranty coverage does not apply to damage caused by deliberate cutting with sharp tools, fire, severe structural masonry failure of property walls, or unauthorized third-party modifications.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            5. Payment Terms
          </h2>
          <p>
            Payment is due upon successful installation handover and tension inspection unless agreed otherwise in writing. We accept UPI, bank transfer, and cash payments.
          </p>
        </section>

        <section className="space-y-4 bg-white p-8 rounded-2xl border border-primary/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-secondary border-b border-primary/20 pb-2">
            6. Contact & Service Assistance
          </h2>
          <p>For any questions regarding service terms or warranty claims, please contact us:</p>
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
