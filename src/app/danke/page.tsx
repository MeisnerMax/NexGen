import { ButtonLink } from '@/components/Button';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/danke');

export const metadata = buildMetadata({
  path: '/danke',
  title: 'Danke für Ihre Anfrage',
  benefit: 'Ihre Anfrage ist eingegangen. Wir melden uns mit konkreten nächsten Schritten.',
  keywords: routeKeywords?.secondary,
  noIndex: true,
});

export default function ThankYouPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Danke', href: '/danke' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Danke' }]}
        eyebrow="Anfrage eingegangen"
        title="Danke für Ihr Vertrauen."
        description="Ihre Nachricht ist sicher bei uns angekommen. Wir sehen uns die Situation an und melden uns mit einer konkreten Einordnung."
        signals={[
          { label: 'Status', value: 'Erfolgreich gesendet' },
          { label: 'Nächster Schritt', value: 'Persönliche Antwort' },
        ]}
      />
      <Section>
        <div className="dark-cta mx-auto max-w-3xl p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white">Sie möchten direkt weitermachen?</h2>
          <p className="mx-auto mt-4 max-w-xl">
            Wir melden uns zeitnah mit den nächsten Schritten. Wenn Sie es eilig haben, buchen Sie
            direkt eine Prozessanalyse.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/termin" variant="light" className="relative z-10">
              Prozessanalyse sichern
            </ButtonLink>
            <ButtonLink href="/" variant="dark" className="relative z-10">
              Zur Startseite
            </ButtonLink>
          </div>
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
