'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/lib/site';
import { ButtonLink } from '@/components/Button';
import { trackingEvents } from '@/lib/tracking';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <Image
            src="/images/logo.png"
            alt="NexGen Consulting Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <span>NexGen Consulting</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-700 hover:text-slate-900"
                    onClick={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(link.href)}
                  >
                    {link.label}
                  </Link>
                  <span className="text-xs text-slate-400">▾</span>
                </div>
                <div
                  className={`absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl transition ${
                    activeDropdown === link.href
                      ? 'pointer-events-auto opacity-100'
                      : 'pointer-events-none opacity-0'
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href="/termin" trackingEvent={trackingEvents.ctaBookingClick}>
            Termin buchen
          </ButtonLink>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menü
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white/98 md:hidden">
          <div className="section-shell flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <div key={link.href} className="flex flex-col gap-2">
                <Link
                  href={link.href}
                  className="text-base font-medium text-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col gap-2 border-l border-slate-200 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm text-slate-600 hover:text-slate-900"
                        onClick={() => setOpen(false)}
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
              className="w-full"
            >
              Termin buchen
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
