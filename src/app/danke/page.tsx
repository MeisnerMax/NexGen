import { ButtonLink } from '@/components/Button';
import { Section } from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Danke' }]} className="mb-6" />
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/70 bg-white/80 p-10 text-center shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">Danke für Ihre Anfrage!</h1>
        <p className="mt-4 text-slate-600">
          Wir melden uns zeitnah mit den nächsten Schritten. Wenn Sie es eilig haben, buchen Sie
          direkt eine Prozessanalyse.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/termin">Prozessanalyse sichern</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Zur Startseite
          </ButtonLink>
        </div>
      </div>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}
