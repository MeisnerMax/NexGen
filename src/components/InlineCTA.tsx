import { ButtonLink } from '@/components/Button';
import { trackingEvents } from '@/lib/tracking';

export function InlineCTA({ label = 'Kostenlose Prozessanalyse buchen' }: { label?: string }) {
  return (
    <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Nächster Schritt
        </p>
        <p className="mt-2 text-lg font-semibold text-slate-900">
          Lassen Sie uns Ihren wichtigsten Engpass identifizieren.
        </p>
      </div>
      <ButtonLink href="/termin" trackingEvent={trackingEvents.ctaBookingClick}>
        {label}
      </ButtonLink>
    </div>
  );
}
