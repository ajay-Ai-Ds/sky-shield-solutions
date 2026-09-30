import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Grid, Shirt, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getThumbnailImage = () => {
    return service.image || '/images/main-images/balconynet-1.jpg';
  };

  const renderIcon = () => {
    switch (service.category) {
      case 'invisible-grills':
        return <Grid className="w-4 h-4 text-highlight" />;
      case 'cloth-hangers':
        return <Shirt className="w-4 h-4 text-highlight" />;
      default:
        return <Shield className="w-4 h-4 text-highlight" />;
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Thumbnail Image Header */}
      <div className="aspect-video relative overflow-hidden bg-surface">
        <Image
          src={getThumbnailImage()}
          alt={`${siteConfig.businessName} ${service.title} Chennai`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-secondary/90 text-highlight text-[11px] font-bold px-3 py-1 rounded-full border border-primary/40 backdrop-blur-sm flex items-center gap-1.5">
          {renderIcon()}
          <span>{service.categoryName}</span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h3 className="font-serif text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Quick Highlights */}
          {service.features && service.features.length > 0 && (
            <ul className="space-y-1.5 mb-2">
              {service.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-text-main">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Link */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between text-sm font-semibold text-secondary group-hover:text-primary transition-colors pt-4 border-t border-slate-100"
        >
          <span>View Service Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-primary" />
        </Link>
      </div>
    </div>
  );
}
