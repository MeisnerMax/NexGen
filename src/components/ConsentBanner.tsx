'use client';

import Link from 'next/link';
import { Button } from '@/components/Button';
import { useConsent } from '@/hooks/useConsent';
import { trackEvent, trackingEvents } from '@/lib/tracking';

export default function ConsentBanner() {
  const { consent, ready, updateConsent } = useConsent();

  if (!ready || consent) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl backdrop-blur md:inset-x-auto md:right-6 md:max-w-md">
      <p className="text-sm font-semibold text-slate-900">Ihre Privatsphäre ist uns wichtig.</p>
      <p className="mt-2 text-sm text-slate-600">
        Wir verwenden Cookies für notwendige Funktionen. Statistik- und Tracking-Skripte laden wir
        nur nach Ihrer Einwilligung.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Mehr dazu in der <Link href="/datenschutz" className="underline">Datenschutzerklärung</Link>{' '}
        und den <Link href="/cookies" className="underline">Cookie-Hinweisen</Link>.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button
          variant="primary"
          onClick={() => {
            updateConsent(true);
            trackEvent(trackingEvents.consentAccept);
          }}
        >
          Alle akzeptieren
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            updateConsent(false);
            trackEvent(trackingEvents.consentDecline);
          }}
        >
          Nur notwendig
        </Button>
      </div>
    </div>
  );
}
