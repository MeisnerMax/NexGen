import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import { Section } from '@/components/Section';

export default function AboutSection() {
  return (
    <Section id="ansprechpartner" className="overflow-hidden bg-[var(--color-primary)] text-white">
      <div className="about-stage">
        <div className="about-stage__portrait" aria-hidden="true">
          <div className="about-stage__halo" />
          <Image
            src="/images/max-meisner.webp"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 1024px) 80vw, 42vw"
            className="relative z-10 h-full w-full object-contain object-bottom"
          />
        </div>
        <div className="about-stage__copy">
          <p className="eyebrow eyebrow--light">Direkter Ansprechpartner</p>
          <h2>Technik verständlich. Umsetzung verbindlich.</h2>
          <p>
            NexGen verbindet Prozessverständnis mit pragmatischer Umsetzung. Sie sprechen direkt mit
            der Person, die analysiert, priorisiert und die technische Lösung verantwortet.
          </p>
          <div className="about-stage__principles">
            <div>
              <span>01</span>
              <strong>Erst der Engpass, dann das Werkzeug.</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Kleine Schritte mit messbaren Abnahmen.</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Dokumentiert und für Ihr Team wartbar.</strong>
            </div>
          </div>
          <ButtonLink href="/kontakt" variant="light" className="mt-8">
            Projekt kurz beschreiben <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
