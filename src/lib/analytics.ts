import { hasAnalyticsConsent } from './consent';

type AnalyticsProps = Record<string, string | number> | undefined;

export function trackEvent(event: string, props?: AnalyticsProps) {
  if (typeof window === 'undefined') return;
  if (!hasAnalyticsConsent()) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, props);
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(event, { props });
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('[tracking]', event, props);
  }
}

export function trackPageView(pathname?: string) {
  if (typeof window === 'undefined') return;
  if (!hasAnalyticsConsent()) return;

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', pathname ? { page_path: pathname } : undefined);
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible('pageview', pathname ? { props: { page_path: pathname } } : undefined);
  }
}
