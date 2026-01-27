import Link from 'next/link';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { GridIcon, SparklesIcon } from '@/components/Icons';
import { focusAreas } from '@/lib/services';

export default function FocusAreasSection({
  eyebrow = 'Schwerpunkte',
  title = 'Microsoft 365 und KI als wichtige Ergänzungen',
  description = 'Wenn die Kernprozesse stehen, stärken wir Zusammenarbeit und Wissenszugang mit den richtigen Tools.',
  tone = 'default',
  divider = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: 'default' | 'soft' | 'muted' | 'accent';
  divider?: boolean;
}) {
  return (
    <Section id="schwerpunkte" tone={tone} divider={divider}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {focusAreas.map((area, index) => {
          const Icon = index === 0 ? GridIcon : SparklesIcon;
          const content = (
            <>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Schwerpunkt
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{area.title}</h3>
                  <p className="mt-3 text-sm text-slate-700">{area.summary}</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                {area.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </>
          );

          return (
            <Card
              key={area.title}
              interactive
              className="space-y-4 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {area.href ? (
                <Link href={area.href} className="block h-full">
                  {content}
                </Link>
              ) : (
                content
              )}
            </Card>
          );
        })}
      </div>
      <InlineCTA />
    </Section>
  );
}
