import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { siteConfig } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/impressum');

export const metadata = buildMetadata({
  path: '/impressum',
  title: 'Impressum',
  benefit: 'Angaben gemäß § 5 TMG und Kontaktinformationen von NexGen Consulting.',
  keywords: routeKeywords?.secondary,
});

export default function ImpressumPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Impressum', href: '/impressum' },
  ]);
  return (
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Impressum' }]} className="mb-6" />
      <Card className="space-y-8">
        <h1 className="text-3xl font-semibold text-slate-900">Impressum</h1>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p>
            {siteConfig.legalName} – NexGen Consulting
            <br />
            {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
            <br />
            {siteConfig.address.country}
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Vertreten durch</h2>
          <p>{siteConfig.legalName}</p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
          <p>
            Telefon: {siteConfig.phone}
            <br />
            E-Mail: {siteConfig.email}
            <br />
            Website: {siteConfig.url.replace('https://', '')}
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">
            Umsatzsteuer-Identifikationsnummer
          </h2>
          <p>USt-IdNr.: folgt</p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Registereintrag</h2>
          <p>folgt</p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">
            Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
          </h2>
          <p>{siteConfig.legalName}</p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Haftungsausschluss</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
            externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
        </section>

        <section className="space-y-2 text-sm text-slate-600">
          <h2 className="text-xl font-semibold text-slate-900">Streitschlichtung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </Card>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}
