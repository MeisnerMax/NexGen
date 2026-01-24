import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import {
  AlertTriangleIcon,
  BarChartIcon,
  ClockIcon,
  EyeIcon,
  RotateCwIcon,
  ShuffleIcon,
} from '@/components/Icons';
import { problemList } from '@/lib/data';

export default function ProblemSection() {
  const problemIcons = [
    AlertTriangleIcon,
    RotateCwIcon,
    EyeIcon,
    ClockIcon,
    ShuffleIcon,
    BarChartIcon,
  ];

  return (
    <Section id="probleme" tone="soft" divider>
      <SectionHeader
        eyebrow="Probleme"
        title="Typische Engpässe, die Wachstum bremsen"
        description="Wenn Prozesse wachsen, steigen Reibungsverluste. Wir beseitigen die größten Blockaden."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {problemList.map((problem, index) => {
          const Icon = problemIcons[index % problemIcons.length];
          return (
            <Card
              key={problem}
              interactive
              className="flex items-start gap-4 text-sm text-slate-700 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-1">{problem}</p>
            </Card>
          );
        })}
      </div>
      <p className="mt-6 text-sm font-semibold text-slate-700">
        Genau hier setzen wir an – strukturiert, messbar und ohne Betriebsunterbrechung.
      </p>
      <InlineCTA />
    </Section>
  );
}
