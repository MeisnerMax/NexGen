import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { Accordion } from '@/components/Accordion';
import { siteConfig } from '@/lib/site';
import type { ServiceDetail } from '@/lib/services';

export default function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.region,
  };

  return (
    <>
      <Section className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <Badge>Leistung</Badge>
            <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{service.title}</h1>
            <p className="mt-4 text-lg text-slate-700">{service.summary}</p>
            <p className="mt-6 text-base font-semibold text-slate-900">{service.result}</p>
          </div>
          <Card className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Worauf Sie sich verlassen können</p>
            <ul className="space-y-2 text-sm text-slate-700">
              {service.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Für wen"
          title="Wenn Sie Tempo, Klarheit und Sicherheit brauchen"
          description="Diese Leistung ist ideal, wenn Sie interne Abläufe stabilisieren oder digital neu aufstellen wollen."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {service.forWhom.map((item) => (
            <Card key={item} className="text-sm text-slate-700">
              {item}
            </Card>
          ))}
        </div>
        <InlineCTA />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Use Cases"
          title="Typische Einsatzfelder"
          description="Beispiele, die wir häufig in KMU sehen und effektiv lösen."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {service.useCases.map((item) => (
            <Card key={item} className="text-sm text-slate-700">
              {item}
            </Card>
          ))}
        </div>
        <InlineCTA />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Deliverables"
          title="Was Sie nach dem Projekt in der Hand halten"
          description="Klare Ergebnisse, dokumentiert und bereit für den Betrieb."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <Card key={item} className="text-sm text-slate-700">
              {item}
            </Card>
          ))}
        </div>
        <InlineCTA />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="FAQ"
          title="Häufige Fragen zu dieser Leistung"
          description="Falls Ihre Frage fehlt: Wir klären sie gern im Erstgespräch."
        />
        <div className="mt-10 max-w-3xl">
          <Accordion items={service.faq} />
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
