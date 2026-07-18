import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const tones = {
  default: '',
  soft: 'bg-[var(--color-surface-strong)]',
  muted: 'bg-[#ece9e2]',
  accent: 'bg-[var(--color-accent-soft)]',
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
        'py-20 md:py-28 lg:py-32',
        tones[tone],
        divider && 'relative overflow-hidden border-y border-[var(--color-border)]',
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
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="mt-4 text-4xl font-semibold leading-[1.04] md:text-5xl lg:text-6xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">{description}</p>
      )}
    </div>
  );
}
