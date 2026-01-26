import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { getCase, getCaseSlugs } from '@/lib/content';
import { trackingEvents } from '@/lib/tracking';

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = getCase(params.slug);
  if (!caseStudy) {
    return { title: 'Case Study' };
  }
  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCase(params.slug);
  if (!caseStudy) {
    notFound();
  }

  return (
    <Section className="pt-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {caseStudy.industry}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{caseStudy.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{caseStudy.summary}</p>
        </div>
        <Card className="space-y-2">
          <p className="text-sm font-semibold text-slate-900">Tech Stack</p>
          <ul className="text-sm text-slate-700">
            {caseStudy.stack.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ausgangslage</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.situation}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ziel</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.goal}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Umsetzung</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.approach}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ergebnis</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.results}</p>
        </Card>
        {caseStudy.metrics.length > 0 && (
          <Card>
            <p className="text-sm font-semibold text-slate-900">Kennzahlen</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {caseStudy.metrics.map((metric) => (
                <li key={metric.label} className="flex items-center justify-between gap-3">
                  <span>{metric.label}</span>
                  <span className="font-semibold text-slate-900">{metric.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold text-white">Bereit für ähnliche Ergebnisse?</h2>
        <p className="mt-3 text-sm text-slate-200">
          In einem kurzen Gespräch klären wir, welcher Hebel für Sie am stärksten wirkt.
        </p>
        <ButtonLink
          href="/termin"
          trackingEvent={trackingEvents.ctaBookingClick}
          variant="secondary"
          className="mt-6 inline-flex border-white/30 bg-white text-slate-900 hover:bg-slate-100 focus-visible:outline-white"
        >
          Prozessanalyse sichern
        </ButtonLink>
      </div>
    </Section>
  );
}
