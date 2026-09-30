import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Ruler,
  Wrench,
  Award,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { services, ServiceItem } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import ServiceCard from '@/components/ServiceCard';
import WhatsAppIcon from '@/components/WhatsAppIcon';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: `Service Not Found | ${siteConfig.businessName}`,
    };
  }

  return {
    title: `${service.title} in Chennai | Sky Shield Solutions`,
    description: `Professional ${service.title} installation in Chennai by Sky Shield Solutions. ${service.shortDescription} Call ${siteConfig.phone} for free site visit.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Installation Chennai | Sky Shield`,
      description: `${service.shortDescription}`,
      url: `https://${siteConfig.domain}/services/${service.slug}`,
      siteName: siteConfig.businessName,
      type: 'article',
      images: [
        {
          url: service.image,
          width: 800,
          height: 600,
          alt: `${service.title} - ${siteConfig.businessName}`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services from same category (excluding current)
  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        serviceType: service.categoryName,
        provider: {
          '@type': 'LocalBusiness',
          name: siteConfig.businessName,
          telephone: siteConfig.phone,
          url: `https://${siteConfig.domain}`,
        },
        areaServed: {
          '@type': 'City',
          name: siteConfig.city,
        },
        description: service.shortDescription,
      },
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://${siteConfig.domain}/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. BREADCRUMB & HERO BANNER */}
      <section className="bg-secondary text-white py-14 px-4 border-b-2 border-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-highlight transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-primary-light" />
            <Link href="/services" className="hover:text-highlight transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-primary-light" />
            <Link
              href={`/services#${service.category}`}
              className="hover:text-highlight transition-colors"
            >
              {service.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-primary-light" />
            <span className="text-highlight font-medium">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-highlight border border-highlight/40">
              {service.categoryName}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {service.title} in Chennai
            </h1>
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          {/* Quick Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
                service.title
              )}.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-sm font-extrabold rounded-lg bg-whatsapp text-white hover:brightness-105 transition-all duration-200 flex items-center gap-2 shadow-xl border border-white/20 sm:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 text-sm font-semibold rounded-lg bg-cta-gradient bg-cta-gradient-hover text-white transition-all duration-200 flex items-center gap-2 shadow-md border border-white/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Free Inspection ({siteConfig.phone})</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-16">
        {/* 2. FULL DESCRIPTION & HIGHLIGHTS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary border-b border-slate-200 pb-3">
              Overview & Product Specifications
            </h2>

            {/* Featured Service Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image
                src={service.image}
                alt={`${service.title} - ${siteConfig.businessName} Chennai`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-secondary/90 text-highlight text-xs font-bold px-3 py-1.5 rounded-full border border-primary/40 backdrop-blur-sm">
                Verified Installation Image
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed space-y-4 text-base">
              <p>{service.fullDescription}</p>
              <p>
                At {siteConfig.shortName}, we understand that safety cannot be compromised. Our {service.title.toLowerCase()} installation process in Chennai utilizes heavy-duty materials designed specifically to endure coastal humidity, sun exposure, and high tension stress. Whether you reside in a high-rise apartment in Velachery, Anna Nagar, OMR, or across Chennai, our technicians deliver precision fitting tailored to your balcony or window geometry.
              </p>
              <p>
                Every installation is backed by our official warranty coverage. We ensure clean, drill-safe anchor points with high tensile strength hardware, offering long-term protection without disturbing your home aesthetics.
              </p>
            </div>

            {/* Key Features Bullet List */}
            <div className="pt-6">
              <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                Key Features & Technical Specs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-slate-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold text-secondary">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg space-y-6 sticky top-28">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-bold text-secondary">Get Instant Quote</h3>
                <p className="text-xs text-text-muted">Same-day site visit in Chennai</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>Service Available across Chennai, Kanchipuram & Thiruvallur</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Inspection within 24 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-primary shrink-0" />
                <span>5-Year Official Warranty</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
                  service.title
                )}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-whatsapp text-white font-extrabold rounded-lg text-center hover:brightness-105 transition-all text-sm shadow-md flex items-center justify-center gap-2 border border-white/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 px-4 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg text-center block transition-all text-sm shadow border border-white/20"
              >
                Call: {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* 3. WHY CHOOSE OUR SERVICE */}
        <section className="bg-surface rounded-2xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary">
              Why Choose {siteConfig.shortName} for {service.title}?
            </h2>
            <p className="text-text-secondary text-sm">
              We ensure superior product quality, transparent pricing, and courteous service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <h4 className="font-serif font-bold text-secondary">Custom Fitting</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Tailored measurements to match exact balcony angles, window sizes, and utility dimensions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h4 className="font-serif font-bold text-secondary">Certified Quality</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                High tensile strength cables and UV-resistant nets tested for extreme weather durability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <Wrench className="w-6 h-6 text-primary" />
              <h4 className="font-serif font-bold text-secondary">Clean Installation</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Expert technicians fitting stainless steel hardware with zero mess or wall cracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="font-serif font-bold text-secondary">Long-Term Warranty</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Official written warranty for long-lasting performance and hassle-free post-sale service.
              </p>
            </div>
          </div>
        </section>

        {/* 4. OUR PROCESS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary">
              Our 4-Step Installation Process
            </h2>
            <p className="text-text-secondary text-sm">
              Simple, fast, and reliable service from initial contact to final quality check.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 relative space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto text-sm shadow">
                1
              </div>
              <h4 className="font-serif font-bold text-secondary">Free Site Visit</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Schedule a convenient doorstep inspection with our technical experts in Chennai.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 relative space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto text-sm shadow">
                2
              </div>
              <h4 className="font-serif font-bold text-secondary">Measurement & Quote</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Accurate measurement taking followed by an upfront transparent quotation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 relative space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto text-sm shadow">
                3
              </div>
              <h4 className="font-serif font-bold text-secondary">Precise Installation</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Skilled technicians install materials with high-grade anchors and tensioning tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 relative space-y-3 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto text-sm shadow">
                4
              </div>
              <h4 className="font-serif font-bold text-secondary">Quality Handover</h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Tension check and safety audit before issuing your official warranty card.
              </p>
            </div>
          </div>
        </section>

        {/* 5. REAL IMAGE GALLERY GRID */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-secondary">
            Installation Gallery ({service.title})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.category === service.category)
              .slice(0, 4)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-surface rounded-xl border border-slate-200 overflow-hidden relative group hover:border-primary shadow-sm transition-all cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} ${siteConfig.businessName}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent p-3 flex flex-col justify-end">
                    <span className="text-highlight text-[10px] font-bold uppercase tracking-wider">
                      {item.categoryName}
                    </span>
                    <span className="text-white text-xs font-serif font-bold line-clamp-1">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* 6. RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <section className="space-y-8 pt-6 border-t border-slate-200">
            <h2 className="font-serif text-2xl font-bold text-secondary">
              Related {service.categoryName} Solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </section>
        )}

        {/* 7. CTA BANNER */}
        <section className="bg-secondary text-white rounded-2xl p-8 sm:p-12 border-2 border-primary text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white">
            Get a Free Quote for {service.title}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Contact {siteConfig.businessName} today for a doorstep site measurement in Chennai with zero obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
                service.title
              )}.%20Please%20share%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-whatsapp text-white font-extrabold rounded-lg hover:brightness-105 transition-all shadow-xl text-base flex items-center gap-2.5 border-2 border-white/30 sm:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-4 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg transition-colors shadow-md text-base border border-white/20"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          {/* Trust Microcopy */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-highlight shrink-0" />
            <span>No advance payment for site visit • Response within 30 minutes</span>
          </div>
        </section>
      </div>
    </div>
  );
}
