import { Section, SectionHeader } from '@/components/Section';
import SchedulingEmbed from '@/components/SchedulingEmbed';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/termin');

export const metadata = buildMetadata({
  path: '/termin',
  title: 'Prozessanalyse buchen',
  benefit:
    'Termin für eine klare Engpass-Analyse, priorisierte Maßnahmen und konkrete nächste Schritte.',
  keywords: routeKeywords?.secondary,
});

export default function BookingPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Termin', href: '/termin' },
  ]);
  return (
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Termin' }]} className="mb-6" />
      <SectionHeader
        eyebrow="Termin"
        title="Kostenlose Prozessanalyse buchen"
        description="Wählen Sie einen passenden Slot. Wir klären Engpässe und legen konkrete nächste Schritte fest."
        as="h1"
      />
      <div className="mt-10">
        <SchedulingEmbed />
      </div>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}
