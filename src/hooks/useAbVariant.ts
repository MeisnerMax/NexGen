'use client';

import { useEffect, useState } from 'react';
import { trackEvent, trackingEvents } from '@/lib/tracking';

const STORAGE_PREFIX = 'ng_ab_';

export function useAbVariant(testId: string, variants: string[] = ['a', 'b']) {
  const [variant, setVariant] = useState(variants[0] ?? 'a');
  const variantsKey = variants.join('|');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const activeVariants = variantsKey.split('|');

    const key = `${STORAGE_PREFIX}${testId}`;
    let stored = window.localStorage.getItem(key);

    if (!stored || !activeVariants.includes(stored)) {
      const index = Math.floor(Math.random() * activeVariants.length);
      stored = activeVariants[index] ?? activeVariants[0] ?? 'a';
      window.localStorage.setItem(key, stored);
    }

    setVariant(stored);
    trackEvent(trackingEvents.abVariantAssigned, { test: testId, variant: stored });
  }, [testId, variantsKey]);

  return variant;
}
