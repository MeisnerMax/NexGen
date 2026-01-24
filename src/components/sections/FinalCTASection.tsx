import { ButtonLink } from '@/components/Button';
import { trackingEvents } from '@/lib/tracking';

export default function FinalCTASection() {
  return (
    <section className="pb-20 pt-10">
      <div className="section-shell">
        <div className="rounded-3xl bg-[var(--color-primary)] px-6 py-12 text-white shadow-[0_25px_60px_-30px_rgba(12,37,48,0.6)] md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
            Finaler Schritt
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-white/80">
            Klären wir Ihren größten Prozess-Engpass in einem kurzen Gespräch.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Sie erhalten konkrete Empfehlungen und eine klare Einschätzung der nächsten Schritte.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/termin" trackingEvent={trackingEvents.ctaBookingClick}>
              Termin buchen
            </ButtonLink>
            <ButtonLink href="/kontakt" variant="secondary">
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
