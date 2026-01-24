import { ButtonLink } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { trackingEvents } from '@/lib/tracking';
import { trustPoints } from '@/lib/data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="border-b border-slate-200/100 pb-12 pt-36 md:pb-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <div>
          <Badge>Kernleistung: Prozessautomatisierung</Badge>
          <h1 className="mt-8 text-4xl font-semibold leading-tight md:text-5xl">
            Ihr Digitalisierungberater in Coburg.
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            NexGen Consulting digitalisiert Ihr Unternehmen – vom Online-Auftritt bis zu automatisierten Prozessen. Weniger Aufwand, weniger Fehler, klare Verantwortung.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/termin" trackingEvent={trackingEvents.ctaBookingClick}>
              Kostenlose Prozessanalyse buchen
            </ButtonLink>
            <ButtonLink
              href="/cases"
              variant="secondary"
              trackingEvent={trackingEvents.ctaCaseClick}
            >
              Fallbeispiele ansehen
            </ButtonLink>
          </div>
        </div>
        <div className="space-y-4 -mt-8">
          <Image
            src="/images/hero-fallback.jpg"
            alt="Hero Fallback Bild"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
