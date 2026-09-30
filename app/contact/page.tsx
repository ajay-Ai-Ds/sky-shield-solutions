'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services } from '@/data/services';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0]?.title || 'Balcony Safety Nets',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* 1. HERO BANNER */}
      <section className="bg-secondary text-white py-16 px-4 border-b-2 border-primary text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Contact Us</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Have questions or need a free site inspection? Contact {siteConfig.shortName} in Chennai. We are ready to assist you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 space-y-16">
        {/* 2. TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE: Contact Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-secondary text-white rounded-2xl p-8 sm:p-10 border-2 border-primary shadow-xl space-y-8">
            <div className="space-y-3">
              <span className="text-highlight text-xs font-bold uppercase tracking-wider">
                Direct Contact
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {siteConfig.shortName} Office
              </h2>
              <p className="text-slate-300 text-sm">
                Serving all residential and commercial localities across Chennai, Kanchipuram & Thiruvallur.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary-dark text-highlight rounded-lg shrink-0 mt-0.5 border border-highlight/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-highlight mb-1">Office Address</h4>
                  <p className="text-slate-200 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary-dark text-highlight rounded-lg shrink-0 mt-0.5 border border-highlight/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-highlight mb-1">Phone Numbers</h4>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="text-slate-200 hover:text-highlight font-medium text-base transition-colors block"
                  >
                    {siteConfig.phone} (Primary)
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`}
                    className="text-slate-300 hover:text-highlight font-medium text-sm transition-colors block mt-1"
                  >
                    {siteConfig.phoneSecondary} (Secondary)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary-dark text-highlight rounded-lg shrink-0 mt-0.5 border border-highlight/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-highlight mb-1">Email Address</h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-slate-200 hover:text-highlight font-medium transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary-dark text-highlight rounded-lg shrink-0 mt-0.5 border border-highlight/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-highlight mb-1">Working Hours</h4>
                  <p className="text-slate-200">Monday – Sunday: 8:00 AM – 8:00 PM</p>
                  <span className="text-xs text-highlight font-medium block mt-0.5">
                    (Open all 7 days for site inspection)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-700 space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="w-full py-3.5 px-4 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg text-center block transition-all text-sm shadow flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now ({siteConfig.phone})</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Sky%20Shield%20Solutions,%20I%20want%20to%20inquire%20about%20safety%20nets`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-whatsapp text-white font-semibold rounded-lg text-center block hover:opacity-95 transition-opacity text-sm shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-lg space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary">
                Book Free Doorstep Inspection
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Fill out the details below and our team in Chennai will call you back within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-surface rounded-xl border-2 border-primary text-center space-y-4 my-6">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-secondary">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Thank you, <span className="font-bold text-secondary">{formData.name}</span>. Our Chennai technical team will reach out to you at <span className="font-bold text-secondary">{formData.phone}</span> shortly for your free site inspection.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-secondary text-white text-xs font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      Service Interested *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main bg-white"
                    >
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title} ({svc.categoryName})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                    Locality / Message / Measurements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Need balcony safety net in Anna Nagar 4th floor balcony. Please schedule inspection."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg shadow-md text-base flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Free Inspection Request</span>
                </button>

                {/* Trust Microcopy */}
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-text-muted font-medium">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>We typically respond within 30 minutes during business hours</span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 3. GOOGLE MAP EMBED */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-secondary">
                Locate {siteConfig.businessName} in Chennai
              </h2>
              <p className="text-text-secondary text-sm">
                {siteConfig.address}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=12.9194479,80.2076531"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md bg-surface">
            <iframe
              title={`${siteConfig.businessName} Office Location`}
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* 4. CTA STRIP */}
        <section className="bg-surface rounded-2xl p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-secondary">
              Prefer Instant Response on WhatsApp?
            </h3>
            <p className="text-text-secondary text-sm">
              Send us pictures of your balcony or window and get instant estimates directly.
            </p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-whatsapp text-white font-extrabold rounded-lg hover:brightness-105 transition-all shadow-xl text-base shrink-0 flex items-center gap-2.5 border border-white/20 sm:scale-105"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Chat on WhatsApp Now</span>
          </a>
        </section>
      </div>
    </div>
  );
}
