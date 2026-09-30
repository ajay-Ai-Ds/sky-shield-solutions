import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const topServices = [
  { name: 'Balcony Safety Nets', href: '/services/balcony-safety-nets' },
  { name: 'Invisible Grills', href: '/services/invisible-grills' },
  { name: 'Pigeon Safety Nets', href: '/services/pigeon-safety-nets' },
  { name: 'Children Safety Nets', href: '/services/children-safety-nets' },
  { name: 'Anti Bird Spikes', href: '/services/anti-bird-spikes' },
  { name: 'Cloth Drying Hangers', href: '/services/cloth-drying-hangers' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-14 pb-8 border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo-footer.svg"
                alt={siteConfig.businessName}
                width={200}
                height={48}
                loading="lazy"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Engineering architectural-grade safety nets, marine-grade SS 316 invisible grills, and ergonomic drying systems for high-rise residences and commercial properties across Chennai.
            </p>
            <div className="flex items-center gap-2 text-xs text-highlight bg-secondary-dark p-2.5 rounded border border-highlight/20">
              <ShieldCheck className="w-4 h-4 text-primary-light shrink-0" />
              <span>Certified Load Rating & 5-Year Warranty</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-primary/40 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-highlight transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary-light text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-primary/40 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {topServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-highlight transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-primary-light text-xs">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white border-b border-primary/40 pb-2 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="hover:text-highlight transition-colors font-medium"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`}
                    className="hover:text-highlight transition-colors text-xs text-slate-400"
                  >
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-whatsapp shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-whatsapp font-medium transition-colors text-whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-highlight transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.businessName}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-highlight transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-highlight transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
