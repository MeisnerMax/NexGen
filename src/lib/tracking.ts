import { hasAnalyticsConsent } from './consent';

export const trackingEvents = {
  abVariantAssigned: 'ab_variant_assigned',
  ctaBookingClick: 'cta_booking_click',
  ctaCaseClick: 'cta_case_click',
  consentAccept: 'consent_accept',
  consentDecline: 'consent_decline',
  contactSubmit: 'contact_submit',
  leadMagnetSubmit: 'leadmagnet_submit',
  schedulingOpen: 'scheduling_open',
} as const;

export function trackEvent(event: string, props?: Record<string, string | number>) {
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
