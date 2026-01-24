'use client';

import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import { trackEvent } from '@/lib/tracking';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-[var(--color-accent)] text-white shadow-[0_18px_40px_-22px_rgba(21,143,106,0.7)] hover:translate-y-[-1px] hover:brightness-95 hover:shadow-[0_22px_45px_-24px_rgba(21,143,106,0.75)] focus-visible:outline-[var(--color-accent)]',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-500',
  ghost:
    'text-[var(--color-primary)] hover:bg-white/70 focus-visible:outline-slate-400',
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: keyof typeof variants;
  trackingEvent?: string;
};

export function Button({
  variant = 'primary',
  className,
  trackingEvent,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(baseStyles, variants[variant], className)}
      onClick={(event) => {
        if (trackingEvent) {
          trackEvent(trackingEvent);
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
};

export function ButtonLink({
  variant = 'primary',
  className,
  trackingEvent,
  onClick,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseStyles, variants[variant], className)}
      onClick={(event) => {
        if (trackingEvent) {
          trackEvent(trackingEvent);
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
