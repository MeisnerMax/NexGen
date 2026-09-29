import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/impressum');

export const metadata = buildMetadata({
  path: '/impressum',
  title: 'Impressum',
  benefit: 'Angaben gemäß § 5 DDG und Kontaktinformationen von Max Meisner (NexGen Consulting).',
  keywords: routeKeywords?.secondary,
});

export default function ImpressumPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Impressum', href: '/impressum' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Impressum' }]}
        eyebrow="Rechtliche Angaben"
        title="Impressum"
        description="Verantwortliche Stelle, Kontaktinformationen und rechtliche Angaben zu NexGen Consulting."
        signals={[
          { label: 'Anbieter', value: 'Max Meisner' },
          { label: 'Standort', value: 'Coburg' },
        ]}
      />
      <Section>
        <Card className="legal-document space-y-8">
          <section className="space-y-2 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Angaben gemäß § 5 DDG</h2>
            <p>
              {siteConfig.legalName}
              <br />
              Einzelunternehmen, Geschäftsbezeichnung: NexGen Consulting
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
              Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV
            </h2>
            <p>{siteConfig.legalName}</p>
          </section>

          <section className="space-y-2 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Geltungsbereich</h2>
            <p>
              Dieses Impressum gilt für nexgen-consulting.de sowie für die Angebote NexImmo
              (neximmo.nexgen-consulting.de), NexHotels (hotels.nexgen-consulting.de) und NexAsset
              (nexasset.nexgen-consulting.de). Alle Angebote werden von {siteConfig.legalName} als
              Einzelunternehmer betrieben.
            </p>
          </section>

          <section className="space-y-2 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Zielgruppe</h2>
            <p>
              Die Angebote richten sich ausschließlich an Unternehmer im Sinne von § 14 BGB,
              Vereine und öffentliche Einrichtungen, nicht an Verbraucher.
            </p>
          </section>

          <section className="space-y-2 text-sm text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
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
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
