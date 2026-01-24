import './globals.css';

import type { Metadata } from 'next';
import { Sora, Source_Sans_3 } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ConsentBanner from '@/components/ConsentBanner';
import TrackingProvider from '@/components/TrackingProvider';
import StructuredData from '@/components/StructuredData';
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
    default: 'NexGen Consulting | Digitalisierung & Prozessautomatisierung',
    template: '%s | NexGen Consulting',
  },
  description: siteConfig.description,
  openGraph: {
    title: 'NexGen Consulting | Digitalisierung & Prozessautomatisierung',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-[var(--color-surface)]">
        <StructuredData />
        <TrackingProvider />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ConsentBanner />
      </body>
    </html>
  );
}
