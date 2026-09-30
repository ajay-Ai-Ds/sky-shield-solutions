import React from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section className="py-20 text-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">{siteConfig.businessName}</h1>
    </section>
  );
}
