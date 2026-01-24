import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type CardProps = ComponentPropsWithoutRef<'div'> & {
  interactive?: boolean;
};

export function Card({
  className,
  children,
  interactive = false,
  ...props
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white/95 via-white/90 to-[var(--color-accent-soft)]/70 p-6 shadow-sm transition',
        interactive &&
          'hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_20px_45px_-32px_rgba(12,37,48,0.6)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
