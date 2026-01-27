import Image from 'next/image';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Kontakt' }]} className="mb-6" />
      <SectionHeader
        eyebrow="Kontakt"
        title="Kontakt für Prozessautomatisierung"
        description="Beschreiben Sie kurz Ihre Situation. Wir melden uns mit einem klaren Vorschlag und nächsten Schritten."
        as="h1"
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr,0.9fr]">
        <Card>
          <ContactForm />
        </Card>
        <Card className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <Image
              src="/images/team.jpg"
              alt="Max Meisner"
              width={640}
              height={720}
              className="h-64 w-full object-cover object-top sm:h-72"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Ihr Ansprechpartner</p>
            <p className="text-sm text-slate-600">Max Meisner</p>
          </div>
          <p className="text-sm font-semibold text-slate-900">Direkter Kontakt</p>
          <p className="text-sm text-slate-600">
            Wir sind in Coburg und Bamberg regional erreichbar und betreuen zusätzlich Kunden im
            gesamten DACH-Raum.
          </p>
          <div className="text-sm text-slate-600">
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="rounded-2xl border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Hinweis</p>
            <p className="mt-2">
              Wir melden uns innerhalb weniger Werktage. Wenn es dringend ist, buchen Sie direkt
              einen Termin.
            </p>
          </div>
        </Card>
      </div>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}
