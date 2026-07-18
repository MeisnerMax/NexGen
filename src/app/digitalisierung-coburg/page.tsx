import Link from 'next/link';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/Button';
import { focusAreas, primaryServices } from '@/lib/services';
import JsonLd, { buildFaqSchema } from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/digitalisierung-coburg');

export const metadata = buildMetadata({
  path: '/digitalisierung-coburg',
  title: 'Digitalisierung in Coburg für KMU',
  benefit:
    'Regionale Prozessautomatisierung, Microsoft 365 und Website & SEO für KMU in Coburg und Oberfranken.',
  keywords: routeKeywords?.secondary,
});

const localFaq = [
  {
    question: 'Arbeitet ihr auch direkt vor Ort in Coburg?',
    answer:
      'Ja. Wir sind regional erreichbar und kombinieren Vor-Ort-Termine mit klaren Remote-Workshops, damit Entscheidungen schnell getroffen werden.',
  },
  {
    question: 'Welche Themen werden in Coburg besonders oft angefragt?',
    answer:
      'Häufig geht es um Prozessautomatisierung, Microsoft 365 Workflows sowie Websites, die lokal besser gefunden werden.',
  },
  {
    question: 'Wie starten wir am besten?',
    answer:
      'Mit einer kurzen Prozessanalyse priorisieren wir den größten Engpass und planen die nächsten Schritte gemeinsam.',
  },
  {
    question: 'Können wir bestehende Systeme behalten?',
    answer:
      'Ja. Wir integrieren vorhandene Tools und schaffen klare Übergaben, statt alles neu zu bauen.',
  },
];

export default function DigitalisierungCoburgPage() {
  const breadcrumbItems = [
    { label: 'Start', href: '/' },
    { label: 'Digitalisierung Coburg', href: '/digitalisierung-coburg' },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbItems}
        eyebrow="Coburg · Bamberg · Oberfranken"
        title="Digitalisierung mit regionaler Nähe."
        description="Wir helfen Unternehmen in Coburg und Oberfranken, Prozesse zu automatisieren, digitale Tools sinnvoll einzusetzen und sichtbarer zu werden – klar, messbar und ohne Buzzwords."
        signals={[
          { label: 'Region', value: 'Oberfranken' },
          { label: 'Modell', value: 'Vor Ort + remote' },
        ]}
      >
        <ButtonLink href="/termin" variant="light">
          Prozessanalyse für Coburg
        </ButtonLink>
      </PageHero>

      <Section>
        <SectionHeader
          eyebrow="Leistungen vor Ort"
          title="Die stärksten Hebel für Coburg"
          description="Fokussiert auf Automatisierung, saubere Datenflüsse und regionale Sichtbarkeit."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {primaryServices.map((service, index) => (
            <Link key={service.slug} href={`/leistungen/${service.slug}`} className="block h-full">
              <Card interactive className="flex h-full min-h-72 flex-col p-7">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Kernleistung</p>
                  <span className="font-heading text-sm text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7">{service.summary}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-[var(--color-accent)]">
                  Details ansehen ↗
                </span>
              </Card>
            </Link>
          ))}
          {focusAreas.map((area, index) => (
            <Link key={area.title} href={area.href} className="block h-full">
              <Card interactive className="flex h-full min-h-72 flex-col p-7">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Schwerpunkt</p>
                  <span className="font-heading text-sm text-slate-400">
                    0{primaryServices.length + index + 1}
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold">{area.title}</h3>
                <p className="mt-4 text-sm leading-7">{area.summary}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-[var(--color-accent)]">
                  Schwerpunkt ansehen ↗
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="FAQ Coburg"
          title="Häufige Fragen zur Zusammenarbeit"
          description="Kurz und konkret für Entscheider in Coburg und Oberfranken."
        />
        <div className="mt-12 max-w-4xl">
          <Accordion items={localFaq} />
        </div>
      </Section>

      <JsonLd data={[buildBreadcrumbList(breadcrumbItems), buildFaqSchema(localFaq)]} />
    </>
  );
}
