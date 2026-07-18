import { Section, SectionHeader } from '@/components/Section';
import SchedulingEmbed from '@/components/SchedulingEmbed';
import { PageHero } from '@/components/PageHero';
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
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Termin' }]}
        eyebrow="Kostenlose Prozessanalyse"
        title="30 Minuten. Ein klarer nächster Schritt."
        description="Wir sortieren Ihren Engpass, prüfen das realistische Potenzial und klären, ob und wie eine Zusammenarbeit sinnvoll ist."
        signals={[
          { label: 'Dauer', value: '30 Minuten' },
          { label: 'Ergebnis', value: 'Klare Priorität' },
        ]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.65fr,1.35fr] lg:gap-16">
          <div>
            <SectionHeader eyebrow="So läuft es ab" title="Kurz vorbereitet. Schnell konkret." />
            <div className="content-rail mt-7">
              <div className="content-rail__item">
                <div>
                  <strong>Situation einordnen</strong>
                  <p>Wo entsteht heute unnötiger Aufwand?</p>
                </div>
              </div>
              <div className="content-rail__item">
                <div>
                  <strong>Hebel bewerten</strong>
                  <p>Welche Wirkung ist realistisch erreichbar?</p>
                </div>
              </div>
              <div className="content-rail__item">
                <div>
                  <strong>Nächsten Schritt festlegen</strong>
                  <p>Eine klare Empfehlung statt offener Fragen.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="editorial-panel overflow-hidden p-3 md:p-5">
            <SchedulingEmbed />
          </div>
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
