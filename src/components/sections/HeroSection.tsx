import { ButtonLink } from '@/components/Button';
import ProcessCanvas from '@/components/ProcessCanvas';
import { trackingEvents } from '@/lib/tracking';

export default function HeroSection() {
  return (
    <section className="hero-stage">
      <div className="section-shell hero-stage__content">
        <div className="hero-stage__copy">
          <p className="eyebrow eyebrow--light">Prozessautomatisierung für KMU</p>
          <h1>
            Komplexe Abläufe. <span>Klar verbunden.</span>
          </h1>
          <p>
            NexGen macht aus Excel, E-Mail und manuellen Übergaben stabile digitale Prozesse –
            messbar, nachvollziehbar und passend zu Ihrem Tagesgeschäft.
          </p>
          <div className="hero-stage__actions">
            <ButtonLink href="/termin" trackingEvent={trackingEvents.ctaBookingClick}>
              Kostenlose Prozessanalyse <span aria-hidden="true">↗</span>
            </ButtonLink>
            <ButtonLink href="/cases" variant="dark" trackingEvent={trackingEvents.ctaCaseClick}>
              Ergebnisse ansehen
            </ButtonLink>
          </div>
          <div className="hero-stage__proof" aria-label="Vorgehensweise und Einzugsgebiet">
            <div>
              <strong>Engpass zuerst</strong>
              <span>Kein unnötiges Großprojekt</span>
            </div>
            <div>
              <strong>Wirkung messbar</strong>
              <span>KPIs ab Projektstart</span>
            </div>
            <div>
              <strong>Regional erreichbar</strong>
              <span>Coburg · Oberfranken · DACH</span>
            </div>
          </div>
        </div>
        <ProcessCanvas />
      </div>
    </section>
  );
}
