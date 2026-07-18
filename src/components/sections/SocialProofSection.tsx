import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';
import { getAllCases } from '@/lib/content';

export default function SocialProofSection() {
  const cases = getAllCases().slice(0, 3);

  return (
    <Section id="referenzen" divider>
      <SectionHeader
        eyebrow="Proof statt Versprechen"
        title="Gute digitale Lösungen machen Komplexität unsichtbar."
        description="Konkrete Prozessbeispiele zeigen, wie wir Struktur, Bedienbarkeit und messbare Wirkung zusammenführen."
      />

      <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Aus der Praxis</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            So werden typische Engpässe greifbar.
          </h3>
        </div>
        <ButtonLink href="/cases" variant="secondary">
          Alle Beispiele ansehen <span aria-hidden="true">↗</span>
        </ButtonLink>
      </div>
      <div className="case-preview-grid">
        {cases.map((caseStudy) => (
          <Link key={caseStudy.slug} href={`/cases/${caseStudy.slug}`} className="case-preview">
            <p className="eyebrow">{caseStudy.industry}</p>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.summary}</p>
            <span className="mt-5 inline-flex text-xs font-bold text-[var(--color-accent-strong)]">
              Beispiel öffnen ↗
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
