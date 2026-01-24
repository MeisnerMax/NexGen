'use client';

import { useEffect, useState } from 'react';
import { readConsent, storeConsent, type ConsentState } from '@/lib/consent';

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  const updateConsent = (analytics: boolean) => {
    const next = { analytics, timestamp: new Date().toISOString() };
    storeConsent(next);
    setConsent(next);
  };

  return { consent, ready, updateConsent };
}
