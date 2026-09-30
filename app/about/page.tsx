import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ShieldCheck,
  Award,
  Users,
  Clock,
  CheckCircle2,
  HeartHandshake,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `About Sky Shield Safety Nets & Invisible Grills | Chennai`,
  description: `Discover Sky Shield Solutions — Chennai's premier installer of high-tensile balcony safety nets, invisible grills, and ceiling cloth drying systems based in Pallikaranai, Chennai.`,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About Sky Shield Safety Nets Chennai`,
    description: `Learn about our certified technicians, ISO-standard materials, and 5-year warranty protection across Chennai.`,
    url: `https://${siteConfig.domain}/about`,
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
      name: 'About Us',
      item: `https://${siteConfig.domain}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. HERO SECTION */}
      <section className="bg-secondary text-white py-16 px-4 border-b-2 border-primary text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">About Us</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About {siteConfig.shortName}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering uncompromised safety, security, and space optimization for Chennai homes and businesses for over a decade.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-24">
        {/* 2. OUR STORY (2 Column) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey & Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary leading-snug">
              Protecting Chennai Families with Care & Integrity
            </h2>
            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                Founded in Chennai, Tamil Nadu, {siteConfig.businessName} began with a straightforward mission: to provide high-rise residents, homeowners, and businesses with safety solutions that don&apos;t compromise on aesthetics or build quality.
              </p>
              <p>
                Over the years, we have grown into one of Chennai&apos;s most relied-upon safety net and invisible grill specialists. From balcony safety nets designed to keep children and pets secure, to marine-grade stainless steel invisible grills offering panoramic views, we treat every installation with the same precision we would expect in our own homes.
              </p>
              <p>
                Our team consists of experienced, background-checked technicians equipped with specialized anchoring tools. We take pride in transparent pricing, doorstep site visits, and issuing official warranties for every completed job.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-primary/20 text-sm font-semibold text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Chennai Headquarters</span>
              </div>
              <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-primary/20 text-sm font-semibold text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>All-Chennai Service</span>
              </div>
            </div>
          </div>

          {/* Visual Card with Image */}
          <div className="bg-surface rounded-2xl p-6 sm:p-8 border-2 border-primary/20 shadow-lg space-y-6 text-center">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/about/our-story.jpg"
                alt={`${siteConfig.businessName} Certified Installation Work`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-secondary/90 text-highlight text-xs font-bold px-3 py-1 rounded-full border border-primary/40 backdrop-blur-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-light" />
                <span>Certified Installation Quality</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-secondary">
              Certified Safety Standards
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
              We exclusively source UV-stabilized virgin HDPE & nylon filaments alongside 316 marine-grade SS cable lines for lifetime durability against coastal weathering.
            </p>
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4 text-left">
              <div>
                <span className="text-xs text-text-muted block">Headquarters</span>
                <span className="text-sm font-bold text-secondary">{siteConfig.area}, Chennai</span>
              </div>
              <div>
                <span className="text-xs text-text-muted block">Contact Email</span>
                <span className="text-sm font-bold text-secondary truncate block">{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MISSION & VALUES */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary">
              What Drives {siteConfig.shortName}
            </h2>
            <p className="text-text-muted text-base">
              Built on craftsmanship, honest communication, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary">Quality Materials</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Zero compromise on wire gauge, knot strength, and anti-corrosion fittings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary">Skilled Craftsmanship</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Trained technicians who take pride in tight, neat, and drill-safe installations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary">Customer Trust</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Upfront quotes, zero hidden charges, and reliable post-installation support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary">Timely Delivery</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Prompt doorstep visits and fast turnarounds across all Chennai neighborhoods.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHY CHENNAI TRUSTS US (Stats) */}
        <section className="bg-secondary text-white rounded-2xl p-10 sm:p-14 border-2 border-primary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-highlight">10+</div>
              <div className="text-slate-300 text-sm font-medium">Years in Business</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-highlight">500+</div>
              <div className="text-slate-300 text-sm font-medium">Satisfied Homes</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-highlight">1000+</div>
              <div className="text-slate-300 text-sm font-medium">Total Installations</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-highlight">100%</div>
              <div className="text-slate-300 text-sm font-medium">Warranty Commitment</div>
            </div>
          </div>
        </section>

        {/* 5. TEAM SECTION */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Meet Our Leadership
            </span>
            <h2 className="font-serif text-3xl font-bold text-secondary">
              Dedicated Safety Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-surface text-secondary mx-auto flex items-center justify-center font-serif text-2xl font-bold border border-primary/30">
                SSS
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-secondary">Technical Operations Lead</h4>
                <p className="text-xs text-primary font-semibold">Field Installation Manager</p>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Oversees site measurements, material quality verification, and structural anchoring safety.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-surface text-secondary mx-auto flex items-center justify-center font-serif text-2xl font-bold border border-primary/30">
                SSS
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-secondary">Quality Assurance Supervisor</h4>
                <p className="text-xs text-primary font-semibold">Tension & Safety Auditor</p>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Ensures all net knots and invisible grill cable tensioning meet strict safety specifications.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-surface text-secondary mx-auto flex items-center justify-center font-serif text-2xl font-bold border border-primary/30">
                SSS
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-secondary">Customer Relations Manager</h4>
                <p className="text-xs text-primary font-semibold">Client Support & Scheduling</p>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">
                Coordinates site visits, manages warranty documentation, and responds to client inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CTA BANNER */}
        <section className="bg-surface rounded-2xl p-8 sm:p-12 border border-slate-200 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-secondary">
            Ready to Protect Your Property?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-sm sm:text-base">
            Get in touch with {siteConfig.businessName} for a zero-cost site measurement in Chennai today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3.5 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg shadow-md text-sm border border-white/20 transition-all cursor-pointer"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-whatsapp text-white font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-md text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
