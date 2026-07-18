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
        'card-premium p-6 transition duration-300',
        interactive &&
          'hover:-translate-y-1 hover:border-[rgba(201,86,11,0.34)] hover:shadow-[var(--shadow-card)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
