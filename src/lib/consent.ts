export type ConsentState = {
  analytics: boolean;
  timestamp: string;
};

const CONSENT_KEY = 'ng_consent';

export function readConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  const stored = window.localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as ConsentState;
  } catch {
    return null;
  }
}

export function storeConsent(consent: ConsentState) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 6);
  document.cookie = `${CONSENT_KEY}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
}

export function clearConsent() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(CONSENT_KEY);
  document.cookie = `${CONSENT_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export function hasAnalyticsConsent() {
  const consent = readConsent();
  return Boolean(consent?.analytics);
}
