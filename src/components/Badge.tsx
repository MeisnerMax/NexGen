import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
