import React from 'react';
import Link from 'next/link';
import { Shield, Home, Phone, ArrowLeft, Wrench } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-primary/20 shadow-lg">
        {/* Shield Icon Badge */}
        <div className="inline-flex p-4 rounded-full bg-surface border border-primary/20 text-primary shadow-inner">
          <Shield className="w-12 h-12 text-primary animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-highlight bg-secondary px-3 py-1 rounded-full">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-secondary pt-2">
            Page Not Found
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-cta-gradient bg-cta-gradient-hover text-white text-sm font-bold rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 bg-surface hover:bg-slate-100 text-secondary border border-slate-200 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Wrench className="w-4 h-4 text-primary" />
            <span>View All Services</span>
          </Link>
        </div>

        {/* Contact Assistance */}
        <div className="pt-4 border-t border-slate-100 text-xs text-text-muted space-y-1">
          <p>Need urgent safety net installation assistance in Chennai?</p>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-primary font-bold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
