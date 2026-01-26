'use client';

import { useEffect, useState } from 'react';
import { trackEvent, trackingEvents } from '@/lib/tracking';

const STORAGE_PREFIX = 'ng_ab_';

export function useAbVariant(testId: string, variants: string[] = ['a', 'b']) {
  const [variant, setVariant] = useState(variants[0] ?? 'a');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const key = `${STORAGE_PREFIX}${testId}`;
    let stored = window.localStorage.getItem(key);

    if (!stored || !variants.includes(stored)) {
      const index = Math.floor(Math.random() * variants.length);
      stored = variants[index] ?? variants[0] ?? 'a';
      window.localStorage.setItem(key, stored);
    }

    setVariant(stored);
    trackEvent(trackingEvents.abVariantAssigned, { test: testId, variant: stored });
  }, [testId, variants.join('|')]);

  return variant;
}
