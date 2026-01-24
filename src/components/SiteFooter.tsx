import Image from 'next/image';
import Link from 'next/link';
import { footerLinks, siteConfig } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/90 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[2fr,1fr,1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="NexGen Consulting Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <p className="text-lg font-semibold text-slate-900">NexGen Consulting</p>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Digitalisierung, Prozessautomatisierung und Softwarelösungen für KMU in Oberfranken und
            dem DACH-Raum.
          </p>
          <div className="mt-6 space-y-1 text-sm text-slate-600">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Links</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-700 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Rechtliches</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-700 hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section-shell mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NexGen Consulting. Alle Rechte vorbehalten.</p>
        <div className="flex gap-4">
          {Object.entries(siteConfig.social)
            .filter(([, href]) => Boolean(href))
            .map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-slate-700">
                {label === 'linkedin' ? 'LinkedIn' : label.toUpperCase()}
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
