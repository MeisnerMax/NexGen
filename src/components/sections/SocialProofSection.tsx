import Link from 'next/link';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { getAllCases } from '@/lib/content';

export default function SocialProofSection() {
  const cases = getAllCases().slice(0, 3);

  return (
    <Section id="referenzen" tone="soft" divider>
      <SectionHeader
        eyebrow="Social Proof"
        title="Vertrauen entsteht durch klare Ergebnisse"
        description="Case Studies mit messbaren Ergebnissen und konkreten Kennzahlen aus den Projekten."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cases.map((caseStudy, index) => (
          <Card
            key={caseStudy.slug}
            interactive
            className="flex h-full flex-col motion-safe:animate-fade-up"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {caseStudy.industry}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{caseStudy.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{caseStudy.summary}</p>
            {caseStudy.metrics.length > 0 && (
              <div className="mt-4 space-y-2 text-xs text-slate-600">
                {caseStudy.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between gap-3">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-slate-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
            <Link
              href={`/cases/${caseStudy.slug}`}
              className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
            >
              Case ansehen →
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card interactive className="motion-safe:animate-fade-up" style={{ animationDelay: '140ms' }}>
          <p className="text-sm font-semibold text-slate-900">
            Referenz: Website für Stephanie Meisner (Mediatorin)
          </p>
          <p className="mt-3 text-sm text-slate-700">
            “Die neue Website bringt meine Arbeit klar auf den Punkt und wirkt professionell. Die
            Zusammenarbeit war strukturiert und zuverlässig.”
          </p>
          <a
            href="https://www.stephaniemeisner.de/"
            className="mt-4 inline-flex text-sm font-semibold text-[var(--color-accent)]"
          >
            Website ansehen →
          </a>
        </Card>
      </div>
      <InlineCTA />
    </Section>
  );
}
