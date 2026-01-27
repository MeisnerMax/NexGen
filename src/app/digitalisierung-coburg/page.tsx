import Link from 'next/link';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
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
      <Section className="pt-10">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <SectionHeader
          eyebrow="Coburg & Oberfranken"
          title="Digitalisierung in Coburg für KMU"
          description="Wir helfen Unternehmen in Coburg und Oberfranken, Prozesse zu automatisieren, digitale Tools sinnvoll einzusetzen und sichtbarer zu werden. Klar, messbar und ohne Buzzwords."
          as="h1"
        />
        <InlineCTA label="Prozessanalyse für Coburg" />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Leistungen vor Ort"
          title="Die stärksten Hebel für Coburg"
          description="Fokussiert auf Automatisierung, saubere Datenflüsse und regionale Sichtbarkeit."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {primaryServices.map((service) => (
            <Link key={service.slug} href={`/leistungen/${service.slug}`} className="block h-full">
              <Card className="flex h-full flex-col gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-700">{service.summary}</p>
                <span className="mt-auto text-sm font-semibold text-[var(--color-accent)]">
                  Details ansehen →
                </span>
              </Card>
            </Link>
          ))}
          {focusAreas.map((area) => (
            <Link key={area.title} href={area.href} className="block h-full">
              <Card className="flex h-full flex-col gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
                <p className="text-sm text-slate-700">{area.summary}</p>
                <span className="mt-auto text-sm font-semibold text-[var(--color-accent)]">
                  Schwerpunkt ansehen →
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
        <div className="mt-10 max-w-3xl">
          <Accordion items={localFaq} />
        </div>
      </Section>

      <JsonLd data={[buildBreadcrumbList(breadcrumbItems), buildFaqSchema(localFaq)]} />
    </>
  );
}
