import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import { leadMagnet } from '@/lib/data';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/leadmagnet');

export const metadata = buildMetadata({
  path: '/leadmagnet',
  title: 'Leitfaden: 7 Prozesse, die KMU automatisieren sollten',
  benefit:
    'Kostenlose Checkliste mit Priorisierung, KPIs und klaren Fragen, um Automatisierung schnell zu starten.',
  keywords: routeKeywords?.secondary,
});

export default function LeadMagnetPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Leitfaden', href: '/leadmagnet' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Leitfaden' }]}
        eyebrow="Kostenloser Praxisleitfaden"
        title={leadMagnet.title}
        description={leadMagnet.description}
        signals={[
          { label: 'Format', value: 'Kompaktes PDF' },
          { label: 'Zugang', value: 'Ohne Newsletter' },
        ]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Was Sie mitnehmen"
              title="Vom Bauchgefühl zur Priorität."
              description="Der Leitfaden hilft Ihnen, Engpässe strukturiert zu bewerten und intern die richtigen Fragen zu stellen."
            />
            <div className="content-rail mt-7">
              {[
                ['Prozesse priorisieren', 'Erkennen, welche Abläufe sich zuerst lohnen.'],
                ['Erfolg messbar machen', 'Passende Messpunkte und KPIs definieren.'],
                ['Engpässe einordnen', 'Muster aus Dienstleistung, Handwerk und Fertigung nutzen.'],
                ['Team aktivieren', 'Mit sofort einsetzbaren Fragen ins Gespräch kommen.'],
              ].map(([title, text]) => (
                <div key={title} className="content-rail__item">
                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="self-start p-7 md:p-9">
            <SectionHeader
              eyebrow="PDF"
              title="In 60 Sekunden im Postfach."
              description="Nur Ihre E-Mail-Adresse, kein Newsletter-Abo."
            />
            <div className="mt-7">
              <LeadMagnetForm />
            </div>
          </Card>
        </div>
      </Section>

      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="So nutzen Sie den Leitfaden"
          title="Von der Liste zur Umsetzung."
          description="Drei Schritte, um den größten Hebel zu finden und intern zu starten."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Engpass auswählen',
              text: 'Wählen Sie den Prozess mit dem höchsten Aufwand und häufigsten Fehlern.',
            },
            {
              title: 'Priorisieren',
              text: 'Nutzen Sie die Matrix, um Wirkung, Aufwand und Risiko sauber einzuordnen.',
            },
            {
              title: 'Erste Schritte planen',
              text: 'Definieren Sie KPIs und legen Sie Verantwortlichkeiten fest.',
            },
          ].map((item, index) => (
            <Card key={item.title} interactive className="min-h-56 p-7">
              <span className="font-heading text-sm text-[var(--color-accent)]">0{index + 1}</span>
              <h3 className="mt-12 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
