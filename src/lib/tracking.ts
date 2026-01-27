import { trackEvent as baseTrackEvent } from './analytics';

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

export const trackEvent = baseTrackEvent;
