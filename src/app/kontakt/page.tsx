import Image from 'next/image';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/Button';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/kontakt');

export const metadata = buildMetadata({
  path: '/kontakt',
  title: 'Kontakt für Prozessautomatisierung & Digitalisierung',
  benefit:
    'Kontaktieren Sie uns für eine Prozessanalyse, klare nächste Schritte und passende Automatisierung für Ihr KMU.',
  keywords: routeKeywords?.secondary,
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Kontakt', href: '/kontakt' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Kontakt' }]}
        eyebrow="Direkter Kontakt"
        title="Erzählen Sie mir, was Sie bremst."
        description="Kein Sales-Theater: Sie beschreiben kurz die Situation und erhalten eine ehrliche Einschätzung, welcher nächste Schritt sinnvoll ist."
        signals={[
          { label: 'Kontakt', value: 'Direkt mit Max' },
          { label: 'Antwort', value: 'Persönlich & konkret' },
        ]}
      >
        <ButtonLink href="/termin" variant="light">
          Direkt Termin wählen
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Projektanfrage"
              title="In wenigen Sätzen zum nächsten Schritt."
              description="Je konkreter der Engpass, desto konkreter kann die erste Einschätzung ausfallen."
            />
            <Card className="mt-8 p-6 md:p-8">
              <ContactForm />
            </Card>
          </div>
          <aside className="dark-cta self-start p-6 md:p-8">
            <div className="relative z-10 overflow-hidden rounded-[1.4rem] bg-white">
              <Image
                src="/images/max-meisner.webp"
                alt="Max Meisner"
                width={1254}
                height={1254}
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="eyebrow eyebrow--light mt-7">Ihr Ansprechpartner</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Max Meisner</h2>
            <p className="mt-4 text-sm leading-7">
              Direkt erreichbar in Coburg und Bamberg – für Unternehmen im gesamten DACH-Raum.
            </p>
            <div className="mt-6 border-t border-white/10 pt-6 text-sm">
              <a
                className="block font-semibold text-white transition hover:text-[#f6a46f]"
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              >
                {siteConfig.phone}
              </a>
              <a
                className="mt-2 block font-semibold text-white transition hover:text-[#f6a46f]"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-[#8fa4af]">
              Sie erhalten eine persönliche Rückmeldung mit konkreter Einordnung – üblicherweise
              innerhalb weniger Werktage.
            </p>
          </aside>
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
