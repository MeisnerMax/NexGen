import './globals.css';

import type { Metadata } from 'next';
import { Sora, Source_Sans_3 } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ConsentBanner from '@/components/ConsentBanner';
import TrackingProvider from '@/components/TrackingProvider';
import { siteConfig } from '@/lib/site';

const headingFont = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Digitalisierung & Prozessautomatisierung für KMU | NexGen Consulting',
    template: '%s | NexGen Consulting',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'Digitalisierung & Prozessautomatisierung für KMU',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'de_DE',
    type: 'website',
    images: [{ url: `${siteConfig.url}/opengraph-image` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitalisierung & Prozessautomatisierung für KMU',
    description: siteConfig.description,
    images: [`${siteConfig.url}/twitter-image`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-[var(--color-surface)]">
        <a href="#main-content" className="skip-link">
          Zum Inhalt springen
        </a>
        <TrackingProvider />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
