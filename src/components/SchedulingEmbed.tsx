'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { trackingEvents, trackEvent } from '@/lib/tracking';
import { siteConfig } from '@/lib/site';

export default function SchedulingEmbed() {
  const [manualLoad, setManualLoad] = useState(false);

  const shouldLoad = manualLoad;

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
          Das Termin-Widget wird von Cal.com geladen. Erst mit dem Klick werden Daten (z. B. Ihre IP-Adresse) an Cal.com übertragen. Details in der Datenschutzerklärung.
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
