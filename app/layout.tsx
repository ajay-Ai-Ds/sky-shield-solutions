import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.businessName} | Safety Nets & Invisible Grills Chennai`,
    template: `%s | ${siteConfig.businessName} Chennai`,
  },
  description: `${siteConfig.businessName} provides premium balcony safety nets, pigeon control netting, child/pet protection nets, SS 316 marine-grade invisible grills, and cloth drying hangers across Chennai. Headquarters in ${siteConfig.area}, Chennai. Call ${siteConfig.phone}.`,
  keywords: [
    'Safety Nets Chennai',
    'Invisible Grills Chennai',
    'Balcony Safety Nets Pallikaranai',
    'Pigeon Safety Nets Chennai',
    'Pet Safety Nets Chennai',
    'SS 316 Invisible Grills',
    'Cloth Drying Hangers Chennai',
    'Sky Shield Safety Nets & Invisible Grills',
    'Sky Shield Solutions',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.businessName} | Safety Nets & Invisible Grills Chennai`,
    description: `Certified balcony safety nets, invisible grills & cloth hangers in Chennai. Doorstep site visit within 24h. Call ${siteConfig.phone}.`,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.businessName,
    images: [
      {
        url: '/images/main-images/balconynet-1.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} Balcony Safety Net Installation Chennai`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.businessName} | Safety Nets & Invisible Grills Chennai`,
    description: `Certified balcony safety nets, invisible grills & cloth hangers in Chennai. Call ${siteConfig.phone}.`,
    images: ['/images/main-images/balconynet-1.jpg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'QGrP03ThatCwTFC4zPUBILQU8TTGjg9IeURS_cv8C4E',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteConfig.businessName,
  image: `https://${siteConfig.domain}/images/logo/actual-logo.webp`,
  telephone: [siteConfig.phone, siteConfig.phoneSecondary],
  email: siteConfig.email,
  url: `https://${siteConfig.domain}`,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.state,
    postalCode: '600100',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9194478,
    longitude: 80.207653,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: siteConfig.popularLocalities.map((loc) => ({
    '@type': 'City',
    name: `${loc}, Chennai`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text-main font-sans pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileStickyBar />
        <ScrollToTop />
      </body>
    </html>
  );
}
