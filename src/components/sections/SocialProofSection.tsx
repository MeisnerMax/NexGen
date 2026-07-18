import Image from 'next/image';
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
        description="Ein reales Webprojekt und konkrete Prozessbeispiele zeigen, wie wir Struktur, Bedienbarkeit und Wirkung zusammenführen."
      />

      <article className="proof-feature mt-12">
        <a
          href="https://www.stephaniemeisner.de/"
          className="proof-feature__visual"
          aria-label="Website von Stephanie Meisner öffnen"
        >
          <Image
            src="/images/stephaniemeisner.png"
            alt="Startseite der Website von Stephanie Meisner"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-top"
          />
        </a>
        <div className="proof-feature__copy">
          <p className="eyebrow eyebrow--light">Reales Kundenprojekt · Website</p>
          <h3>Komplexe Leistung in wenigen Sekunden verständlich.</h3>
          <p>
            Für die Mediatorin Stephanie Meisner entstand eine klare, vertrauenswürdige Website mit
            strukturierten Leistungswegen und eindeutiger Kontaktführung.
          </p>
          <blockquote className="proof-quote">
            „Die neue Website bringt meine Arbeit klar auf den Punkt und wirkt professionell. Die
            Zusammenarbeit war strukturiert und zuverlässig.“
          </blockquote>
          <a
            href="https://www.stephaniemeisner.de/"
            className="mt-7 inline-flex text-sm font-bold text-[#f6a46f]"
          >
            Website ansehen{' '}
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </article>

      <div className="mt-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Prozessbeispiele</p>
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
