import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { getAllCases } from '@/lib/content';
import { InlineCTA } from '@/components/InlineCTA';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Praxisnahe Beispiele für Digitalisierung und Prozessautomatisierung in KMU.',
};

export default function CasesPage() {
  const cases = getAllCases();

  return (
    <Section className="pt-10">
      <SectionHeader
        eyebrow="Fallbeispiele"
        title="So schaffen wir messbare Entlastung"
        description="Strukturierte Beispiele als Platzhalter – reale Zahlen ergänzen wir gemeinsam."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((caseStudy) => (
          <Card key={caseStudy.slug} className="flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {caseStudy.industry}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{caseStudy.summary}</p>
            <Link
              href={`/cases/${caseStudy.slug}`}
              className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
            >
              Details ansehen →
            </Link>
          </Card>
        ))}
      </div>
      <InlineCTA />
    </Section>
  );
}
