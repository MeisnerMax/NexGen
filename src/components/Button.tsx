'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/tracking';

const baseStyles =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_18px_40px_-22px_rgba(201,86,11,0.75)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] hover:shadow-[0_22px_45px_-24px_rgba(201,86,11,0.8)] focus-visible:outline-[var(--color-accent)]',
  secondary:
    'border border-[var(--color-border)] bg-[var(--color-surface-strong)] text-[var(--color-primary)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] focus-visible:outline-[var(--color-accent)]',
  ghost:
    'text-[var(--color-primary)] hover:bg-white/70 focus-visible:outline-[var(--color-accent)]',
  dark: 'border border-white/20 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-white',
  light:
    'border border-white bg-white text-[var(--color-primary)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-soft)] focus-visible:outline-white',
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: keyof typeof variants;
  trackingEvent?: string;
  trackingProps?: Record<string, string | number>;
};

export function Button({
  variant = 'primary',
  className,
  trackingEvent,
  trackingProps,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      onClick={(event) => {
        if (trackingEvent) {
          trackEvent(trackingEvent, trackingProps);
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}

export type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
  trackingEvent?: string;
  trackingProps?: Record<string, string | number>;
};

export function ButtonLink({
  variant = 'primary',
  className,
  trackingEvent,
  trackingProps,
  onClick,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseStyles, variants[variant], className)}
      onClick={(event) => {
        if (trackingEvent) {
          trackEvent(trackingEvent, trackingProps);
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
