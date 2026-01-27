import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const tones = {
  default: '',
  soft: 'bg-[var(--color-surface)]/70',
  muted: 'bg-[var(--color-surface)]/85',
  accent: 'bg-[var(--color-accent-soft)]/70',
};

export function Section({
  id,
  className,
  children,
  tone = 'default',
  divider = false,
}: PropsWithChildren<{
  id?: string;
  className?: string;
  tone?: keyof typeof tones;
  divider?: boolean;
}>) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        tones[tone],
        divider &&
          'relative overflow-hidden border-y border-slate-200/70 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:content-[""] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-slate-100/80 after:to-transparent after:content-[""]',
        className,
      )}
    >
      <div className="section-shell">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}) {
  const Heading = as;
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-4 text-3xl font-semibold md:text-4xl">{title}</Heading>
      {description && <p className="mt-4 text-lg text-slate-700">{description}</p>}
    </div>
  );
}
