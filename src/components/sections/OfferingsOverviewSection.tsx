import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { Section } from '@/components/Section';
import { focusAreas, primaryServices } from '@/lib/services';

const visualLabels = [
  ['CRM', 'Freigabe', 'ERP', 'Reporting'],
  ['Portal', 'Datenhub', 'Rollen', 'Schnittstellen'],
  ['Positionierung', 'SEO', 'Content', 'Anfragen'],
];

export default function OfferingsOverviewSection() {
  return (
    <Section id="loesungen" className="bg-[var(--color-primary)] text-white" divider>
      <div className="max-w-4xl">
        <p className="eyebrow eyebrow--light">Drei Leistungswelten</p>
        <h2 className="mt-4 text-4xl font-semibold leading-[1.04] text-white md:text-5xl lg:text-6xl">
          Vom operativen Engpass bis zur digitalen Lösung.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b7c4ca]">
          Wir kombinieren Prozessverständnis, Technologie und messbare Nutzerwege – ohne Ihnen ein
          bestimmtes Werkzeug aufzuzwingen.
        </p>
      </div>

      <div className="service-stage mt-14">
        {primaryServices.map((service, index) => (
          <article key={service.slug} className="service-feature">
            <div className="service-feature__copy">
              <span className="service-feature__index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="service-feature__points">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ButtonLink
                href={`/leistungen/${service.slug}`}
                variant={index === 1 ? 'secondary' : 'dark'}
                className="mt-7"
              >
                Leistung entdecken <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
            <div className="service-feature__visual" aria-hidden="true">
              <span className="service-feature__orb" />
              {visualLabels[index].map((label) => (
                <span key={label} className="service-feature__label">
                  {label}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#728a96]">
          Technologische Schwerpunkte
        </p>
        <div className="focus-links">
          {focusAreas.map((area) => (
            <Link key={area.href} href={area.href} className="focus-link">
              <div>
                <strong>{area.title}</strong>
                <span className="mt-1 block">{area.summary}</span>
              </div>
              <span className="text-lg text-[#f6a46f]" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
