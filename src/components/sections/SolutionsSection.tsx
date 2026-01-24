import Link from 'next/link';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { primaryServices } from '@/lib/services';

export default function SolutionsSection() {
  const [primaryService, ...secondaryServices] = primaryServices;

  return (
    <Section id="loesungen" tone="soft" divider>
      <SectionHeader
        eyebrow="Angebote"
        title="Leistungen, die sofort Wirkung zeigen"
        description="Wählen Sie den Hebel mit dem größten Einfluss auf Umsatz, Zeit und Qualität."
      />
      <div className="mt-10">
        <Card
          interactive
          className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] motion-safe:animate-fade-up"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {primaryService.tagline}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">{primaryService.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{primaryService.result}</p>
            <Link
              href={`/leistungen/${primaryService.slug}`}
              className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]"
            >
              Leistung ansehen →
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Direkt erkennbar</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {primaryService.highlights.slice(0, 2).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <div className="mt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Weitere Angebote
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {secondaryServices.map((service, index) => (
            <Card
              key={service.slug}
              interactive
              className="flex h-full flex-col gap-3 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {service.tagline}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-700">{service.result}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-slate-700">
                {service.highlights.slice(0, 2).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
              >
                Leistung ansehen →
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <InlineCTA />
    </Section>
  );
}
