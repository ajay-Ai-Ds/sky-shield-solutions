'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface Project {
  id: string;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    "id": "p1",
    "title": "High-Rise Balcony Safety Net Installation",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Pallikaranai, Chennai",
    "description": "Installed 1mm heavy-duty UV stabilized balcony safety net for a 12th-floor apartment balcony.",
    "image": "/images/main-images/balconynet-1.jpg"
  },
  {
    "id": "p2",
    "title": "316 SS Cable Invisible Grills Fitting",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Anna Nagar, Chennai",
    "description": "Custom fitted marine-grade stainless steel invisible grills for luxury villa French windows.",
    "image": "/images/main-images/balcony-grills.jpg"
  },
  {
    "id": "p3",
    "title": "Pigeon Anti-Bird Protection Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "T. Nagar, Chennai",
    "description": "Sealed off utility shaft and kitchen balcony to prevent bird nesting and hygiene issues.",
    "image": "/images/main-images/pigeon-net.jpg"
  },
  {
    "id": "p4",
    "title": "Ceiling Pulley Cloth Drying Hanger",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Nungambakkam, Chennai",
    "description": "6-pipe 304 SS pulley-operated cloth drying rack installed in apartment laundry balcony.",
    "image": "/images/main-images/cloth-hangera-1.jpg"
  },
  {
    "id": "p5",
    "title": "Children Safety Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Velachery, Chennai",
    "description": "2-inch narrow gap invisible grill installation for child safety across all high-floor windows.",
    "image": "/images/main-images/children-invisiblegrills.jpg"
  },
  {
    "id": "p6",
    "title": "Duct Area & Pipe Shaft Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Porur, Chennai",
    "description": "Full vertical duct area sealing using high-tensile HDPE nets for a residential complex.",
    "image": "/images/main-images/duct-area-1.jpg"
  },
  {
    "id": "p7",
    "title": "Commercial Complex Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "OMR, Chennai",
    "description": "Installed fire-escape accessible SS invisible grills for a 5-story office building facade.",
    "image": "/images/main-images/client-grill-1.jpg"
  },
  {
    "id": "p8",
    "title": "Pet Balcony Protection Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Adyar, Chennai",
    "description": "Small mesh durable pet safety net fitted on high-rise balcony for cat safety.",
    "image": "/images/main-images/pet.jpg"
  },
  {
    "id": "p9",
    "title": "Stainless Steel Anti-Bird Spikes",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mylapore, Chennai",
    "description": "Fitted SS 304 bird spikes on window ledges and AC outdoor compressor units.",
    "image": "/images/main-images/bird-spikes.jpg"
  },
  {
    "id": "p10",
    "title": "Rooftop Cricket Practice Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Mogappair, Chennai",
    "description": "Custom rooftop cricket practice enclosure with UV resistant sports netting.",
    "image": "/images/main-images/cricket-practicenet.jpg"
  },
  {
    "id": "p11",
    "title": "Staircase Void Safety Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Kilpauk, Chennai",
    "description": "Vertical staircase center gap safety net installation for duplex home child safety.",
    "image": "/images/main-images/staircase-grills.jpg"
  },
  {
    "id": "p12",
    "title": "Wall Mounted Foldable Cloth Drying Rack",
    "category": "cloth-hangers",
    "categoryLabel": "Cloth Hangers",
    "location": "Vadapalani, Chennai",
    "description": "Heavy-duty wall foldable cloth hanger installation for compact utility balcony.",
    "image": "/images/main-images/balconyclothhangers.jpg"
  },
  {
    "id": "p13",
    "title": "Multi-Floor Duct Shaft Bird Netting",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "KK Nagar, Chennai",
    "description": "Full vertical building duct shaft bird exclusion netting with anti-corrosion hooks.",
    "image": "/images/main-images/duct-area-2.jpg"
  },
  {
    "id": "p14",
    "title": "High-Tensile Sports Turf Boundary Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Virugambakkam, Chennai",
    "description": "Heavy gauge multi-sport boundary netting installed for private sports club in Chennai.",
    "image": "/images/main-images/sports-net.jpg"
  },
  {
    "id": "p15",
    "title": "Modern High-Rise Window Invisible Grills",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Kodambakkam, Chennai",
    "description": "Full height sliding window invisible cable fitting providing maximum natural sunlight.",
    "image": "/images/main-images/window-grills-2.jpg"
  },
  {
    "id": "p16",
    "title": "Industrial Construction Fall-Arrest Net",
    "category": "safety-nets",
    "categoryLabel": "Safety Nets",
    "location": "Ashok Nagar, Chennai",
    "description": "Debris catch and fall arrest safety net deployment for high-rise commercial construction.",
    "image": "/images/constructionnet.webp"
  },
  {
    "id": "p17",
    "title": "Villa Balcony Custom Cable Invisible Grill",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Egmore, Chennai",
    "description": "Marine grade 316 SS cable fitting with customized aluminum track mounting.",
    "image": "/images/skyshield-balconygrill.jpg"
  },
  {
    "id": "p18",
    "title": "Commercial Office Facade Security Grill",
    "category": "invisible-grills",
    "categoryLabel": "Invisible Grills",
    "location": "Saligramam, Chennai",
    "description": "Architectural invisible grill installation across multi-story commercial balcony ledges.",
    "image": "/images/skyshield-commercialgrill.jpg"
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Banner */}
      <section className="bg-secondary text-white py-14 px-4 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto space-y-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight">
            <Link href="/" className="hover:text-primary-light transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Projects</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Our Installation Projects
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A showcase of recent safety net, invisible grill, and cloth drying hanger installations across Chennai.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-12">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'safety-nets', label: 'Safety Nets' },
            { id: 'invisible-grills', label: 'Invisible Grills' },
            { id: 'cloth-hangers', label: 'Cloth Hangers' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeCategory === tab.id
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white text-secondary border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-surface">
                <Image
                  src={project.image}
                  alt={`${siteConfig.businessName} ${project.title} in ${project.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-secondary/90 text-highlight text-[11px] font-bold px-3 py-1 rounded-full border border-primary/40 backdrop-blur-sm">
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-secondary group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Verified Installation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20a%20similar%20project:%20${encodeURIComponent(
                      project.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-whatsapp hover:underline"
                  >
                    Ask About This
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <section className="bg-secondary text-white rounded-2xl p-8 sm:p-12 border-2 border-primary text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-white">
            Have a Similar Installation Requirement in Chennai?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            {siteConfig.businessName} offers doorstep site measurements and consultations across all 32+ Chennai areas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I%20would%20like%20to%20schedule%20a%20site%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-whatsapp text-white font-extrabold rounded-lg hover:brightness-105 transition-all shadow-xl text-sm border border-white/20"
            >
              Chat on WhatsApp Now
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3.5 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg transition-colors shadow-md text-sm border border-white/20"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
