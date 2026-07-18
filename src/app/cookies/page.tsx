import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/cookies');

export const metadata = buildMetadata({
  path: '/cookies',
  title: 'Cookie-Hinweise',
  benefit: 'Informationen zu technisch notwendigen Cookies und Analytics nach Einwilligung.',
  keywords: routeKeywords?.secondary,
});

export default function CookiesPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Cookies', href: '/cookies' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Cookies' }]}
        eyebrow="Transparenz"
        title="Cookie-Hinweise"
        description="Klar erklärt: welche Cookies technisch notwendig sind und wann optionale Analyse aktiv wird."
        signals={[
          { label: 'Standard', value: 'Nur notwendig' },
          { label: 'Analytics', value: 'Nur mit Einwilligung' },
        ]}
      />
      <Section>
        <Card className="legal-document space-y-8">
          <section className="space-y-3 border-0 pt-0">
            <p className="eyebrow">Notwendige Cookies</p>
            <h2 className="text-2xl font-semibold">Damit die Website zuverlässig funktioniert.</h2>
            <p className="text-sm leading-7">
              Wir setzen technisch notwendige Cookies ein, um die Website korrekt bereitzustellen
              und Ihre Cookie-Auswahl zu speichern.
            </p>
          </section>
          <section className="space-y-3">
            <p className="eyebrow">Optionale Analyse</p>
            <h2 className="text-2xl font-semibold">Nur nach Ihrer Einwilligung.</h2>
            <p className="text-sm leading-7">
              Analyse-Cookies werden erst aktiviert, wenn Sie ausdrücklich zugestimmt haben. Ihre
              Auswahl können Sie jederzeit ändern.
            </p>
          </section>
        </Card>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
