'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { useConsent } from '@/hooks/useConsent';
import { trackingEvents, trackEvent } from '@/lib/tracking';
import { siteConfig } from '@/lib/site';

export default function SchedulingEmbed() {
  const { consent } = useConsent();
  const [manualLoad, setManualLoad] = useState(false);

  const shouldLoad = Boolean(consent?.analytics) || manualLoad;

  useEffect(() => {
    if (shouldLoad) {
      trackEvent(trackingEvents.schedulingOpen);
    }
  }, [shouldLoad]);

  if (!shouldLoad) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-center">
        <p className="text-sm font-semibold text-slate-900">Kalender laden</p>
        <p className="mt-3 text-sm text-slate-600">
          Das Termin-Widget lädt externe Inhalte. Sie können es mit einem Klick aktivieren.
        </p>
        <Button className="mt-5" onClick={() => setManualLoad(true)}>
          Termin-Widget anzeigen
        </Button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80">
      <iframe
        title="Terminbuchung NexGen Consulting"
        src={siteConfig.bookingUrl}
        className="h-[700px] w-full"
        loading="lazy"
      />
    </div>
  );
}
