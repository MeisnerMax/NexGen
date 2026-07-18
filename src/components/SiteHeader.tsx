'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site';
import { ButtonLink } from '@/components/Button';
import { trackingEvents } from '@/lib/tracking';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,253,249,0.92)] backdrop-blur-xl">
      <div className="section-shell flex h-[4.75rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label="NexGen Consulting – Startseite"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--color-border)] bg-white font-heading text-base font-bold shadow-sm transition group-hover:border-[rgba(201,86,11,0.4)]"
            aria-hidden="true"
          >
            <span>
              <span className="text-[var(--color-primary)]">›</span>
              <span className="text-[var(--color-accent)]">‹</span>
            </span>
          </span>
          <span className="leading-none">
            <strong className="block font-heading text-base tracking-[-0.04em]">
              <span className="text-[var(--color-primary)]">Nex</span>
              <span className="text-[var(--color-accent)]">Gen</span>
            </strong>
            <small className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Consulting
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            if (!link.children) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] transition hover:bg-white hover:text-[var(--color-primary)]',
                    active && 'bg-white text-[var(--color-primary)] shadow-sm',
                  )}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
                onFocusCapture={() => setActiveDropdown(link.href)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null))
                    setActiveDropdown(null);
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] transition hover:bg-white hover:text-[var(--color-primary)]',
                    active && 'bg-white text-[var(--color-primary)] shadow-sm',
                  )}
                >
                  {link.label}
                  <svg
                    viewBox="0 0 12 12"
                    className={cn(
                      'h-3 w-3 transition',
                      activeDropdown === link.href && 'rotate-180',
                    )}
                    aria-hidden="true"
                  >
                    <path
                      d="m2.5 4.5 3.5 3 3.5-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div
                  className={cn(
                    'absolute left-0 top-[calc(100%+0.85rem)] w-[22rem] origin-top-left rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-2 opacity-0 shadow-[var(--shadow-card)] transition duration-200',
                    activeDropdown === link.href
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2',
                  )}
                >
                  <div className="px-3 pb-2 pt-3">
                    <p className="eyebrow">Leistungsbereiche</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                      Vom größten operativen Engpass bis zur stabilen digitalen Lösung.
                    </p>
                  </div>
                  {link.children.map((child, index) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-accent-soft)]"
                    >
                      <span>
                        <span className="mr-3 text-[0.65rem] text-[var(--color-accent)]">
                          0{index + 1}
                        </span>
                        {child.label}
                      </span>
                      <span
                        className="translate-x-[-4px] text-[var(--color-accent)] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/termin"
            trackingEvent={trackingEvents.ctaBookingClick}
            className="hidden xl:inline-flex"
          >
            Prozessanalyse <span aria-hidden="true">↗</span>
          </ButtonLink>
          <ButtonLink
            href="/termin"
            trackingEvent={trackingEvents.ctaBookingClick}
            className="px-4 text-xs sm:hidden"
          >
            Termin
          </ButtonLink>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-5 bg-current transition',
                  open && 'top-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-2 h-px w-5 bg-current transition',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-5 bg-current transition',
                  open && 'bottom-[7px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-x-0 top-[4.75rem] h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-surface-strong)] transition duration-300 lg:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0',
        )}
      >
        <nav className="section-shell py-8" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <div key={link.href} className="border-b border-[var(--color-border)] py-4">
              <Link
                href={link.href}
                className="flex items-center justify-between text-xl font-semibold text-[var(--color-primary)]"
              >
                {link.label}
                <span className="text-[var(--color-accent)]" aria-hidden="true">
                  ↗
                </span>
              </Link>
              {link.children && (
                <div className="mt-3 grid gap-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1 text-sm text-[var(--color-muted)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ButtonLink
            href="/termin"
            trackingEvent={trackingEvents.ctaBookingClick}
            className="mt-8 w-full"
          >
            Kostenlose Prozessanalyse
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
