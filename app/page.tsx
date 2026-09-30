'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  Shield,
  Grid,
  Shirt,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Send,
  Calendar,
  BookOpen,
  Star,
  HelpCircle,
  ChevronDown,
  Sparkles,
  Quote,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { services, serviceCategories } from '@/data/services';
import { blogPosts } from '@/data/blogPosts';
import ServiceCard from '@/components/ServiceCard';
import HeroCarousel from '@/components/HeroCarousel';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Framer motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Case Studies / Projects data
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
    id: 'p1',
    title: 'High-Rise Balcony Fall-Arrest Netting',
    category: 'safety-nets',
    categoryLabel: 'Safety Nets',
    location: 'Pallikaranai, Chennai',
    description: 'Installed 1.2mm UV-stabilized virgin HDPE netting with SS 304 anchor hooks for a 14th-floor apartment balcony.',
    image: '/images/main-images/balconynet-1.jpg',
  },
  {
    id: 'p2',
    title: 'SS 316 Marine-Grade Invisible Grills',
    category: 'invisible-grills',
    categoryLabel: 'Invisible Grills',
    location: 'Medavakkam, Chennai',
    description: 'Custom-fitted 2-inch interval stainless steel invisible grills across French balcony windows, preserving unblocked horizon views.',
    image: '/images/main-images/balcony-grills.jpg',
  },
  {
    id: 'p3',
    title: 'Translucent Bird Barrier Netting',
    category: 'safety-nets',
    categoryLabel: 'Safety Nets',
    location: 'Velachery, Chennai',
    description: 'Sealed off dual utility shafts and kitchen balcony parapets to permanently stop pigeon roosting and health hazards.',
    image: '/images/main-images/pigeon-net.jpg',
  },
  {
    id: 'p4',
    title: '6-Pipe Stainless Steel Ceiling Drying Pulley',
    category: 'cloth-hangers',
    categoryLabel: 'Cloth Hangers',
    location: 'OMR, Chennai',
    description: 'Installed ergonomic pulley-operated drying rack supporting up to 35kg of heavy laundry, freeing balcony floor space.',
    image: '/images/main-images/cloth-hangera-1.jpg',
  },
  {
    id: 'p5',
    title: 'Toddler-Safe Window Cable Barriers',
    category: 'invisible-grills',
    categoryLabel: 'Invisible Grills',
    location: 'Sholinganallur, Chennai',
    description: 'Engineered child-proof invisible grills with tight safety spacing across high-floor bedroom sliding windows.',
    image: '/images/main-images/children-invisiblegrills.jpg',
  },
  {
    id: 'p6',
    title: 'Building Plumbing Shaft Vertical Netting',
    category: 'safety-nets',
    categoryLabel: 'Safety Nets',
    location: 'Tambaram, Chennai',
    description: 'Full-height vertical duct enclosure preventing birds and debris accumulation while preserving full airflow.',
    image: '/images/main-images/duct-area-1.jpg',
  },
];

// Gallery items
interface GalleryItem {
  id: number;
  title: string;
  category: 'safety-nets' | 'invisible-grills' | 'cloth-hangers';
  categoryLabel: string;
  location: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'High-Rise Balcony Safety Net Fitting', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Pallikaranai, Chennai', image: '/images/main-images/balconynet-1.jpg' },
  { id: 2, title: 'Panoramic View Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Medavakkam, Chennai', image: '/images/main-images/balcony-grills.jpg' },
  { id: 3, title: 'Pigeon Net Utility Enclosure', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Velachery, Chennai', image: '/images/main-images/pigeon-net.jpg' },
  { id: 4, title: 'Ceiling Cloth Drying Pulley Rack', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'OMR, Chennai', image: '/images/main-images/cloth-hangera-1.jpg' },
  { id: 5, title: 'Child Safety Window Invisible Grills', category: 'invisible-grills', categoryLabel: 'Invisible Grills', location: 'Sholinganallur, Chennai', image: '/images/main-images/children-invisiblegrills.jpg' },
  { id: 6, title: 'Pet Safety Balcony Net Enclosure', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Madipakkam, Chennai', image: '/images/main-images/pet.jpg' },
  { id: 7, title: 'Anti-Bird Stainless Steel Spikes', category: 'safety-nets', categoryLabel: 'Safety Nets', location: 'Adyar, Chennai', image: '/images/main-images/bird-spikes.jpg' },
  { id: 8, title: 'Balcony Wall Foldable Cloth Hanger', category: 'cloth-hangers', categoryLabel: 'Cloth Hangers', location: 'Perungudi, Chennai', image: '/images/main-images/balconyclothhangers.jpg' },
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Karthik Subramanian',
    location: 'Pallikaranai, Chennai',
    role: 'Apartment Owner, 14th Floor',
    rating: 5,
    quote: 'Installed SS 316 invisible grills on our high-rise balcony. The panoramic view of the skyline remains completely unobstructed while giving our family absolute safety for our 4-year-old daughter. Impeccable craftsmanship and clean drilling work.',
  },
  {
    id: 2,
    name: 'Divya Venkatesh',
    location: 'Medavakkam, Chennai',
    role: 'Homeowner',
    rating: 5,
    quote: 'We had an unbearable pigeon nuisance around our utility area and outdoor AC units. Sky Shield installed translucent bird netting in under 3 hours. Zero mess, transparent finish, and our balcony is completely clean again!',
  },
  {
    id: 3,
    name: 'Anand Ramachandran',
    location: 'OMR, Thoraipakkam',
    role: 'Pet Parent & IT Professional',
    rating: 5,
    quote: 'Finding claw-proof netting for our two cats was essential. The technician showed us material samples, verified tensile specs, and anchored the net tightly with stainless steel hooks. Top tier service in South Chennai.',
  },
  {
    id: 4,
    name: 'Priya Natarajan',
    location: 'Velachery, Chennai',
    role: 'Resident',
    rating: 5,
    quote: 'The ceiling cloth drying hanger completely revolutionized our compact utility balcony. Each rod operates smoothly via independent pulleys, easily handling heavy bed linen while freeing up all floor space.',
  },
];

// FAQs Data
const faqs = [
  {
    question: 'How much tensile load weight can Sky Shield invisible grills support?',
    answer: 'Each 316 marine-grade stainless steel cable sustains upwards of 400 kg of static load force. The high-tensioned assembly makes it impossible for children, pets, or adults to push through, while cables can still be cut with wire shears during emergency fire evacuations.',
  },
  {
    question: 'Do you offer same-day site visits across Pallikaranai, Medavakkam, and OMR?',
    answer: 'Yes! Dispatched from our central hub in Pallikaranai, our certified technicians can arrive at your doorstep for precision measurements and material demonstrations within hours of your request anywhere in Greater Chennai.',
  },
  {
    question: 'How do Sky Shield safety nets endure Chennai coastal humidity and sun?',
    answer: 'We exclusively source virgin high-density polyethylene (HDPE) filaments infused with UV-inhibiting chemical stabilizers. This formulation prevents brittleness, color fading, and knot slippage caused by solar heat and salty coastal air for 5 to 8 years.',
  },
  {
    question: 'How long does a standard balcony safety net installation require?',
    answer: 'Most standard apartment balcony and window net installations are completed within 2 to 4 hours by our trained in-house team once measurements and bracket layout are finalized.',
  },
  {
    question: 'Is there any inspection fee for doorstep measurements and quotes?',
    answer: 'No. Doorstep site visits, structural evaluations, and customized quotations are 100% complimentary across Chennai with zero obligation.',
  },
  {
    question: 'What is covered under the Sky Shield 5-year official warranty?',
    answer: 'Our 5-year warranty covers material degradation, UV polymer breakdown, cable corrosion, knot fraying, and bracket anchoring stability under normal outdoor weather exposure.',
  },
];

const chennaiLocalities = [
  'Pallikaranai (HQ)', 'Medavakkam', 'Velachery', 'Madipakkam', 'Sholinganallur',
  'Perungudi', 'Keelkattalai', 'Tambaram', 'Adyar', 'OMR (IT Corridor)', 'ECR',
  'Thoraipakkam', 'Navalur', 'Chromepet', 'Guindy', 'Saidapet', 'Anna Nagar',
  'T. Nagar', 'Nungambakkam', 'Mylapore', 'Alwarpet', 'Porur', 'Vadapalani',
  'Kilpauk', 'Ashok Nagar', 'KK Nagar', 'R.A. Puram', 'Egmore', 'Royapettah',
  'Virugambakkam', 'Mogappair', 'Ambattur'
];

export default function Home() {
  const [servicesCategory, setServicesCategory] = useState<string>('all');
  const [projectsCategory, setProjectsCategory] = useState<string>('all');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: services[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredServices =
    servicesCategory === 'all'
      ? services
      : services.filter((s) => s.category === servicesCategory);

  const filteredProjects =
    projectsCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === projectsCategory);

  const filteredGallery =
    galleryCategory === 'all'
      ? galleryItems
      : galleryItems.filter((g) => g.category === galleryCategory);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === null || prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.businessName,
    image: `https://${siteConfig.domain}/images/hero/hero-1-balcony-safety-net.jpg`,
    '@id': `https://${siteConfig.domain}`,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      postalCode: siteConfig.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9194,
      longitude: 80.2077,
    },
    areaServed: siteConfig.city,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Safety Nets and Invisible Grills Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDescription,
        },
      })),
    },
  };

  return (
    <div className="space-y-24 pb-16">
      {/* LocalBusiness JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO CAROUSEL SECTION */}
      <section id="hero">
        <HeroCarousel />
      </section>

      {/* 2. CORE SPECIALIZATIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeInUp}
              className="bg-surface rounded-2xl p-8 border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/15 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {cat.id === 'safety-nets' && <Shield className="w-7 h-7" />}
                  {cat.id === 'invisible-grills' && <Grid className="w-7 h-7" />}
                  {cat.id === 'cloth-hangers' && <Shirt className="w-7 h-7" />}
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {cat.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-accent/10 flex items-center justify-between">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  {cat.count} Specialist Solutions
                </span>
                <a
                  href="#services"
                  className="text-primary group-hover:text-accent font-semibold text-sm flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. SERVICES CATALOG (ALL 18 SERVICES WITH CATEGORY TABS) */}
      <section id="services" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center space-y-4 mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Engineered Safety Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Architectural Safety &amp; Protection Portfolio
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            From certified high-tensile balcony safety netting to marine-grade invisible grills and ceiling cloth drying systems.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-3 pt-4">
            <button
              onClick={() => setServicesCategory('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'all'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              All Services (18)
            </button>
            <button
              onClick={() => setServicesCategory('safety-nets')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'safety-nets'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Safety Nets (10)
            </button>
            <button
              onClick={() => setServicesCategory('invisible-grills')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'invisible-grills'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Invisible Grills (6)
            </button>
            <button
              onClick={() => setServicesCategory('cloth-hangers')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                servicesCategory === 'cloth-hangers'
                  ? 'bg-accent text-white border-accent shadow-md'
                  : 'bg-surface text-primary border-accent/30 hover:border-accent hover:text-accent'
              }`}
            >
              Cloth Hangers (2)
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={fadeInUp}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. WHY CHOOSE SKY SHIELD / WHAT SETS US APART */}
      <section className="bg-secondary text-white py-20 border-y-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-highlight font-bold text-xs uppercase tracking-widest block">
              Engineering Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Why Homeowners Trust Sky Shield
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We combine certified high-tensile polymers, marine-grade SS 316 hardware, and rigorous structural anchoring protocols to ensure your family's uncompromising security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary-dark/60 p-8 rounded-2xl border border-highlight/20 space-y-4 hover:border-highlight transition-all shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/20 text-highlight flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Certified Load Rating</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                400+ kg tensile capacity per strand and heat-set knot geometry that withstands sudden heavy kinetic impacts.
              </p>
            </div>

            <div className="bg-secondary-dark/60 p-8 rounded-2xl border border-highlight/20 space-y-4 hover:border-highlight transition-all shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/20 text-highlight flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Coastal UV Weathering</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Formulated specifically for Chennai's tropical sunshine and salt spray, preventing embrittlement and discoloration.
              </p>
            </div>

            <div className="bg-secondary-dark/60 p-8 rounded-2xl border border-highlight/20 space-y-4 hover:border-highlight transition-all shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/20 text-highlight flex items-center justify-center">
                <Wrench className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Drill-Safe Anchoring</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Deep masonry expansion fasteners with stainless steel 304/316 hooks preventing wall cracks and water seepage.
              </p>
            </div>

            <div className="bg-secondary-dark/60 p-8 rounded-2xl border border-highlight/20 space-y-4 hover:border-highlight transition-all shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-primary/20 text-highlight flex items-center justify-center">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Rapid Same-Day Survey</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Central dispatch from Pallikaranai brings certified technicians to your doorstep across Chennai within hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDIES / PROJECTS SHOWCASE */}
      <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Verified Installations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Engineered Case Studies &amp; Recent Installations
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Explore recent fall-protection netting, invisible grill installations, and ceiling drying systems completed across Chennai.
          </p>

          {/* Project Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-3 pt-2">
            <button
              onClick={() => setProjectsCategory('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'all'
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setProjectsCategory('safety-nets')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'safety-nets'
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Safety Nets
            </button>
            <button
              onClick={() => setProjectsCategory('invisible-grills')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'invisible-grills'
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Invisible Grills
            </button>
            <button
              onClick={() => setProjectsCategory('cloth-hangers')}
              className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                projectsCategory === 'cloth-hangers'
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-surface text-primary border-accent/30'
              }`}
            >
              Cloth Hangers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="aspect-video relative overflow-hidden bg-surface">
                <Image
                  src={proj.image}
                  alt={`Sky Shield installation of ${proj.title} in ${proj.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary/90 text-accent-light text-[11px] font-bold px-3 py-1 rounded-full border border-accent/30">
                  {proj.categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl">
              <Image
                src="/images/main-images/balcony-grill-work.jpg"
                alt="Sky Shield Solutions certified installation crew fitting stainless steel invisible grills in Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-primary/95 text-white p-4 rounded-xl border border-accent/40 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-accent-light uppercase block">Central Headquarters</span>
                  <span className="text-sm font-serif font-bold">Pallikaranai, Chennai</span>
                </div>
                <ShieldCheck className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About {siteConfig.shortName}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Pioneering High-Altitude Safety &amp; Modern Aesthetics
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                Headquartered in Pallikaranai, {siteConfig.businessName} was established to provide residential towers, villas, and commercial establishments across Chennai with reliable safety installations that never compromise architectural beauty.
              </p>
              <p className="text-text-muted text-base leading-relaxed">
                We specialize in virgin UV-treated fall protection netting, SS 316 marine-grade invisible grills, and high-capacity ceiling cloth drying racks. Every project is executed by certified in-house technicians utilizing precision anchoring systems with a firm 5-year warranty commitment.
              </p>

              {/* Core Values Icons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Certified High Tensile Materials</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Skilled In-House Craftsmen</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">Same-Day Site Inspection</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-accent/20 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                  <span className="text-xs font-bold text-primary">5-Year Warranty Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Trusted by Families Across Chennai
          </h2>
          <p className="text-text-muted text-base">
            Read real feedback from homeowners and apartment residents who rely on Sky Shield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-accent/30" />
                <p className="text-text-main text-xs leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-accent/10">
                <h4 className="font-serif font-bold text-sm text-primary">{t.name}</h4>
                <p className="text-[11px] text-accent font-medium">{t.location}</p>
                <p className="text-[10px] text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INSTALLATION GALLERY SECTION WITH LIGHTBOX */}
      <section id="gallery" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Verified On-Site Work Portfolio
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Explore high-resolution photographs of our safety nets, invisible grills, and cloth drying hanger installations.
            </p>

            {/* Gallery Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-3 pt-2">
              <button
                onClick={() => setGalleryCategory('all')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'all'
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                All Photos
              </button>
              <button
                onClick={() => setGalleryCategory('safety-nets')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'safety-nets'
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Safety Nets
              </button>
              <button
                onClick={() => setGalleryCategory('invisible-grills')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'invisible-grills'
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Invisible Grills
              </button>
              <button
                onClick={() => setGalleryCategory('cloth-hangers')}
                className={`px-5 py-2 rounded-full text-xs font-semibold border ${
                  galleryCategory === 'cloth-hangers'
                    ? 'bg-accent text-white border-accent shadow-sm'
                    : 'bg-white text-primary border-accent/30'
                }`}
              >
                Cloth Hangers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group aspect-square bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={`Sky Shield photo demonstration of ${item.title} installed in ${item.location}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold text-accent-light">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif font-bold text-xs text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <Maximize2 className="w-8 h-8 text-accent" />
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImageIndex !== null && filteredGallery[selectedImageIndex] && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-6 right-6 text-white p-2 hover:text-accent transition-colors z-10"
                aria-label="Close Lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <div className="max-w-3xl w-full bg-primary text-white rounded-2xl p-6 border border-accent/40 shadow-2xl space-y-4 text-center relative overflow-hidden">
                <div className="w-full aspect-video bg-primary-light rounded-xl overflow-hidden relative">
                  <Image
                    src={filteredGallery[selectedImageIndex].image}
                    alt={`Sky Shield full view of ${filteredGallery[selectedImageIndex].title}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 pt-2">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {filteredGallery[selectedImageIndex].title}
                  </h2>
                  <p className="text-xs text-slate-300">{filteredGallery[selectedImageIndex].location}</p>
                </div>
              </div>
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 text-white p-3 hover:text-accent transition-colors bg-white/10 rounded-full z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted text-base">
            Everything you need to know about safety net materials, invisible grill tension ratings, and installation procedures.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-accent/20 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif font-bold text-lg text-primary hover:text-accent transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                    openFaqIndex === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-text-muted text-sm leading-relaxed border-t border-accent/10">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 10. AREAS WE SERVE SECTION */}
      <section id="areas" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Coverage Network
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Active Coverage Across Chennai Metropole
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Prompt doorstep site measurements and certified installations across 32+ Chennai neighborhoods.
            </p>
          </div>

          {/* Localities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {chennaiLocalities.map((loc, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                  idx === 0
                    ? 'bg-accent text-white border-accent shadow-md'
                    : 'bg-white text-primary border-accent/20 hover:border-accent hover:text-accent'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 mx-auto mb-1 opacity-80" />
                <span>{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BLOG & GUIDES SECTION */}
      <section id="blog" className="scroll-mt-24 bg-surface py-20 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Safety Netting &amp; Home Protection Insights
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
              Latest Articles &amp; Home Safety Guides
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-base">
              Technical guidance on balcony netting selection, invisible grill tension maintenance, and bird deterrence in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-accent/20 hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span className="px-2.5 py-1 rounded-full bg-accent/15 text-accent font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-primary group-hover:text-accent flex items-center gap-1 pt-4 border-t border-surface"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CONTACT FORM & LOCATION MAP SECTION */}
      <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8 bg-secondary text-white p-8 sm:p-10 rounded-2xl border-2 border-primary shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-highlight font-bold text-xs uppercase tracking-wider block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Contact {siteConfig.shortName}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect with our technical team for immediate on-site surveys, physical material samples, and transparent estimates across Chennai.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg text-highlight border border-highlight/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-highlight">Headquarters Address</h4>
                  <p className="text-sm text-slate-200 leading-snug mt-0.5">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg text-highlight border border-highlight/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-highlight">Phone Numbers</h4>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-white hover:text-highlight block">
                    {siteConfig.phone} (Primary)
                  </a>
                  <a href={`tel:${siteConfig.phoneSecondary.replace(/\s+/g, '')}`} className="text-xs text-slate-300 hover:text-highlight block mt-0.5">
                    {siteConfig.phoneSecondary} (Secondary)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-whatsapp/20 rounded-lg text-whatsapp border border-whatsapp/30">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-whatsapp">WhatsApp Consultation</h4>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi,%20I'm%20interested%20in%20your%20services.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-whatsapp hover:underline"
                  >
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg text-highlight border border-highlight/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-highlight">Email Address</h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-200 hover:text-highlight break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed inside card */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase text-highlight block mb-2">Location Map</span>
              <div className="w-full h-44 rounded-xl overflow-hidden border border-highlight/30 shadow-md bg-secondary-dark relative">
                <iframe
                  title={`${siteConfig.businessName} Location Map`}
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Interactive Inspection Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <span className="text-primary font-semibold text-xs uppercase tracking-wider block">
                Free Doorstep Survey
              </span>
              <h2 className="font-serif text-3xl font-bold text-secondary">
                Request On-Site Precision Survey
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Provide your details below and our technical team will reach out within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-surface border-2 border-primary rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-secondary">
                  Site Visit Request Confirmed!
                </h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-secondary">{formData.name}</span>. Our technician will contact you at <span className="font-semibold text-secondary">{formData.phone}</span> to schedule your free inspection.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-secondary text-white text-xs font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Raman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text-main"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
                      Service Requirement *
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
                  <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">
                    Location &amp; Balcony / Window Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need balcony safety nets in Pallikaranai 8th floor. Approx 10x6 ft."
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
                  <span>Request Free Measurement Visit</span>
                </button>

                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-text-muted font-medium">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Average callback time: 30 minutes during working hours</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
