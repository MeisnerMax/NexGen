import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Cookies' }]} className="mb-6" />
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Cookie-Hinweise</h1>
        <p className="text-sm text-slate-600">
          Wir setzen technisch notwendige Cookies, um die Website korrekt bereitzustellen.
          Analyse-Cookies werden erst nach Ihrer Einwilligung aktiviert.
        </p>
        <ul className="text-sm text-slate-600">
          <li>• Notwendig: Speicherung Ihrer Cookie-Auswahl</li>
          <li>• Optional: Analytics, nur nach Einwilligung</li>
        </ul>
      </Card>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}
