import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: `Safety Guides, Tips & Insights | Sky Shield Chennai`,
  description: `Read expert advice and guides on balcony safety nets, invisible grill maintenance, pigeon control methods, and apartment safety in Chennai.`,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: `Balcony Safety & Home Protection Blog | Sky Shield Chennai`,
    description: `Expert advice on choosing safety nets, invisible grills, and childproofing balconies in Chennai.`,
    url: `https://${siteConfig.domain}/blog`,
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
      name: 'Blog',
      item: `https://${siteConfig.domain}/blog`,
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header Banner */}
      <section className="bg-secondary text-white py-16 px-4 border-b-2 border-primary text-center space-y-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-highlight mb-2">
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-highlight" />
            <span className="text-white font-medium">Blog</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Safety Nets & Home Protection Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Tips, buying guides, and expert insights on keeping your home secure, clean, and elegant in Chennai.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 space-y-12">
        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Featured Image Visual Placeholder */}
              <div className="aspect-video bg-surface relative flex items-center justify-center p-6 border-b border-slate-100 group-hover:bg-primary/5 transition-colors">
                <div className="text-center space-y-2">
                  <BookOpen className="w-10 h-10 text-primary mx-auto" />
                  <span className="text-xs font-semibold text-secondary block">
                    {post.category} Guide
                  </span>
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded bg-secondary text-white">
                  {post.category}
                </span>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="font-serif text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs text-text-muted font-medium">By Sky Shield Team</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
