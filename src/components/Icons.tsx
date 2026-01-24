import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

function IconBase({
  className,
  strokeWidth = 1.8,
  children,
}: PropsWithChildren<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5', className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function AlertTriangleIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3L2.5 20.5h19L12 3z" />
      <path d="M12 9v4" />
      <circle cx="12" cy="17" r="0.8" />
    </IconBase>
  );
}

export function RotateCwIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M21 12a9 9 0 1 1-3.51-7.12" />
      <polyline points="22 4 22 10 16 10" />
    </IconBase>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </IconBase>
  );
}

export function ShuffleIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M16 3h5v5" />
      <path d="M4 20l16-16" />
      <path d="M16 21h5v-5" />
      <path d="M4 4l6 6" />
      <path d="M14 14l6 6" />
    </IconBase>
  );
}

export function BarChartIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M22 20v-6" />
    </IconBase>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.5-3.5" />
    </IconBase>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
    </IconBase>
  );
}

export function LayoutIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M9 20V10" />
    </IconBase>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M14 7a4 4 0 0 0-5.5 5.5L3 18l3 3 5.5-5.5A4 4 0 0 0 17 9l-3 3-2-2 3-3z" />
    </IconBase>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <polyline points="5 12 10 17 19 7" />
    </IconBase>
  );
}

export function RocketIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M5 19c0-4 4-8 8-8l6-6 2 2-6 6c0 4-4 8-8 8H5z" />
      <path d="M9 15l-4 4" />
    </IconBase>
  );
}

export function LifeBuoyIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3" />
      <path d="M12 17v3" />
      <path d="M4 12h3" />
      <path d="M17 12h3" />
    </IconBase>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </IconBase>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3z" />
      <path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </IconBase>
  );
}
