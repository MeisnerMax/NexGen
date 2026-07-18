import { ButtonLink } from '@/components/Button';
import { trackingEvents } from '@/lib/tracking';

export function InlineCTA({
  label = 'Prozessanalyse + Maßnahmenplan sichern',
}: {
  label?: string;
}) {
  return (
    <div className="dark-cta mt-12 flex flex-col items-start gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-9">
      <div className="relative z-10">
        <p className="eyebrow eyebrow--light">Nächster Schritt</p>
        <p className="mt-3 text-lg font-semibold text-white">
          Sie erhalten eine klare Engpass-Priorisierung und nächste Schritte.
        </p>
      </div>
      <ButtonLink
        href="/termin"
        variant="light"
        className="relative z-10"
        trackingEvent={trackingEvents.ctaBookingClick}
      >
        {label}
      </ButtonLink>
    </div>
  );
}
