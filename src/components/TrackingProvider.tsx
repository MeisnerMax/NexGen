'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useConsent } from '@/hooks/useConsent';

export default function TrackingProvider() {
  const { consent } = useConsent();
  const pathname = usePathname();

  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  useEffect(() => {
    if (!consent?.analytics) return;
    if (provider === 'ga4' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
      window.gtag('event', 'page_view', { page_path: pathname });
    }
    if (provider === 'plausible' && typeof window.plausible === 'function') {
      window.plausible('pageview');
    }
  }, [consent, pathname, provider]);

  if (!consent?.analytics) return null;

  if (provider === 'ga4' && gaId) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);} 
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: false });`}
        </Script>
      </>
    );
  }

  if (provider === 'plausible' && plausibleDomain) {
    return (
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={plausibleDomain}
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
