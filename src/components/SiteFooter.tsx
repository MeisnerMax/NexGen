import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { footerLinks, siteConfig } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="bg-[var(--color-primary)] pb-8 pt-20 text-white">
      <div className="section-shell">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.35fr,0.65fr] lg:items-end">
          <div>
            <p className="eyebrow eyebrow--light">Der nächste sinnvolle Schritt</p>
            <h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">
              Welcher Prozess kostet Sie gerade am meisten Zeit?
            </h2>
          </div>
          <div className="lg:text-right">
            <ButtonLink href="/termin" variant="light">
              Gemeinsam analysieren <span aria-hidden="true">↗</span>
            </ButtonLink>
            <p className="mt-4 text-xs text-[#91a4ae]">
              Unverbindlich · 30 Minuten · klare nächste Schritte
            </p>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.6fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="grid h-11 w-11 place-items-center rounded-xl bg-white font-heading text-lg font-bold"
                aria-hidden="true"
              >
                <span>
                  <span className="text-[var(--color-primary)]">›</span>
                  <span className="text-[var(--color-accent)]">‹</span>
                </span>
              </span>
              <div>
                <strong className="block font-heading text-lg">NexGen Consulting</strong>
                <span className="text-xs text-[#91a4ae]">Komplexe Abläufe. Klar verbunden.</span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#aab9c0]">
              Prozessautomatisierung, digitale Werkzeuge und leistungsfähige Websites für KMU in
              Oberfranken und im DACH-Raum.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[#aab9c0]">
              <p>
                {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#728a96]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c2cdd2] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#728a96]">
              Rechtliches
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c2cdd2] transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-[#728a96] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NexGen Consulting. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            {Object.entries(siteConfig.social)
              .filter(([, href]) => Boolean(href))
              .map(([label, href]) => (
                <Link key={label} href={href} className="transition hover:text-white">
                  {label === 'linkedin' ? 'LinkedIn' : label.toUpperCase()}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
