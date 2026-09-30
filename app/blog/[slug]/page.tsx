import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Article Not Found | ${siteConfig.businessName}`,
    };
  }

  return {
    title: `${post.title} | ${siteConfig.businessName}`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://${siteConfig.domain}/blog/${post.slug}`,
      siteName: siteConfig.businessName,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        author: {
          '@type': 'Organization',
          name: `${siteConfig.businessName} Team`,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.businessName,
          url: `https://${siteConfig.domain}`,
        },
        datePublished: post.date,
        mainEntityOfPage: `https://${siteConfig.domain}/blog/${post.slug}`,
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
            name: 'Blog',
            item: `https://${siteConfig.domain}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://${siteConfig.domain}/blog/${post.slug}`,
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
      {/* Header Banner */}
      <section className="bg-secondary text-white py-14 px-4 border-b-2 border-primary">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-highlight transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-primary-light" />
            <Link href="/blog" className="hover:text-highlight transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-primary-light" />
            <span className="text-highlight font-medium truncate">{post.title}</span>
          </div>

          <div className="space-y-4">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-highlight border border-highlight/40">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-2 border-t border-slate-700">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary-light" />
                <span>By {siteConfig.shortName} Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary-light" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-light" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Blog Posts</span>
        </Link>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none text-text-secondary leading-relaxed space-y-6 text-base sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Author Info Box */}
        <div className="bg-surface rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-14 h-14 rounded-full bg-secondary text-highlight flex items-center justify-center font-serif text-xl font-bold shrink-0 border border-primary/30">
            SSS
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-secondary text-lg">Written by {siteConfig.shortName} Team</h4>
            <p className="text-text-muted text-xs">
              Specialists in high-tensile balcony safety nets, marine-grade invisible grills, and space-saving cloth hangers based in Chennai.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <section className="bg-secondary text-white rounded-2xl p-8 sm:p-10 border-2 border-primary text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Need Expert Safety Net or Invisible Grill Installation?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Book a free doorstep measurement in Chennai today. Contact {siteConfig.shortName} for certified materials and fast installation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="px-8 py-3 bg-cta-gradient bg-cta-gradient-hover text-white font-semibold rounded-lg transition-colors shadow-md text-sm border border-white/20"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Sky%20Shield%20Solutions,%20I%20read%20your%20blog%20post%20"${encodeURIComponent(
                post.title
              )}"%20and%20need%20a%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-whatsapp text-white font-semibold rounded-lg hover:opacity-95 transition-opacity shadow-md text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-slate-200">
            <h3 className="font-serif text-2xl font-bold text-secondary">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-primary shadow-sm hover:shadow-md transition-all space-y-3 group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-surface text-secondary">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-secondary group-hover:text-primary transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="text-xs text-primary font-semibold flex items-center gap-1">
                    Read Post <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
