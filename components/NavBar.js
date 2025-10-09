import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

function Icon({ name, className = '' }) {
  const cls = `h-5 w-5 ${className}`;
  switch (name) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M3 10.5 12 3l9 7.5V21a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H4.5A1.5 1.5 0 0 1 3 21v-10.5z" />
        </svg>
      );
    case 'bulb':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M12 2a7 7 0 0 0-4 12.9V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 2zm-2 18a2 2 0 0 0 4 0h-4z" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3.2A15.8 15.8 0 0 0 13 4.3 8.04 8.04 0 0 1 18.9 8zM12 4.1c.9.7 2 2.2 2.6 3.9H9.4c.6-1.7 1.7-3.2 2.6-3.9zM7 12c0-.7.1-1.4.3-2h9.4c.2.6.3 1.3.3 2s-.1 1.4-.3 2H7.3A8 8 0 0 1 7 12zm.1 4h3.2A15.8 15.8 0 0 0 11 19.7 8.04 8.04 0 0 1 7.1 16zM12 19.9c-.9-.7-2-2.2-2.6-3.9h5.2c-.6 1.7-1.7 3.2-2.6 3.9zM12 4.3A15.8 15.8 0 0 0 9.9 8H6.1A8.04 8.04 0 0 1 12 4.3zM5.1 16A8.04 8.04 0 0 1 3.9 12c0-.7.1-1.4.3-2h3.8c-.2.6-.3 1.3-.3 2s.1 1.4.3 2H5.1zM14.1 16h3.8a8.04 8.04 0 0 1-1.2 4 15.8 15.8 0 0 0-2.6-4z" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M3 11a2 2 0 0 0 2 2h2l8 4V5l-8 4H5a2 2 0 0 0-2 2zm8 6v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h6z" />
        </svg>
      );
    case 'id':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm6 1h6v2h-6zM14 13h6v2h-6z" />
        </svg>
      );
    case 'puzzle':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M8 2a2 2 0 0 1 2 2v1h2a2 2 0 1 1 0 4h-2v2h2a2 2 0 1 1 0 4h-2v1a2 2 0 0 1-4 0v-1H5a2 2 0 1 1 0-4h1V9H5a2 2 0 1 1 0-4h1V4a2 2 0 0 1 2-2z" />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M9 18 3 12l6-6 1.5 1.5L6 12l4.5 4.5L9 18zm6 0-1.5-1.5L18 12l-4.5-4.5L15 6l6 6-6 6z" />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3 18h4v-1h-4v1z" />
        </svg>
      );
    case 'newspaper':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cls}>
          <path d="M4 5h14a2 2 0 0 1 2 2v11H6a2 2 0 0 1-2-2V5zm0 13a2 2 0 0 1-2-2V8h2v10zm4-9h10v3H8V9zm0 4h10v2H8v-2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const links = [
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/services/beratung', label: 'Beratung', icon: 'bulb' },
    { href: '/services/website', label: 'Website', icon: 'globe' },
    { href: '/services/marketing', label: 'Marketing', icon: 'megaphone' },
    { href: '/services/firmenidentitaet', label: 'Firmenidentität', icon: 'id' },
    { href: '/services/loesungen', label: 'Lösungen', icon: 'puzzle' },
    { href: '/services/softwareentwicklung', label: 'Softwareentwicklung', icon: 'code' },
    { href: '/services/app', label: 'App-Entwicklung', icon: 'phone' },
    { href: '/blog', label: 'Blog', icon: 'newspaper' },
  ];

  // Kategorien ableiten
  const homeItem = links.find((l) => l.href === '/');
  const serviceItems = links.filter((l) => l.href.startsWith('/services') && l.href !== '/services/contact');
  const resourceItems = links.filter((l) => l.href === '/blog');
  const sections = [
    { title: null, items: [homeItem].filter(Boolean) },
    { title: 'Leistungen', items: serviceItems },
    { title: 'Ressourcen', items: resourceItems },
  ];

  const isActive = (href) => {
    const p = router.asPath || '/';
    return p === href || ['/', '?', '#'].some((sep) => p.startsWith(href + sep));
  };

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  // Schließen bei Klick außerhalb des Drawers
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const t = e.target;
      if (
        panelRef.current && !panelRef.current.contains(t) &&
        triggerRef.current && !triggerRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
    };
  }, [open]);

  useEffect(() => {
    const onRoute = () => setOpen(false);
    router?.events?.on('routeChangeStart', onRoute);
    router?.events?.on('hashChangeStart', onRoute);
    return () => {
      router?.events?.off('routeChangeStart', onRoute);
      router?.events?.off('hashChangeStart', onRoute);
    };
  }, [router]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-primary/70 backdrop-blur supports-[backdrop-filter]:bg-brand-primary/60 text-white border-b border-white/10">
        <div className="container mx-auto flex items-center p-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Nexgen Consulting Logo"
              width={40}
              height={40}
              className="rounded"
              priority
            />
            <Link href="/" className="flex items-baseline gap-2 focus:outline-none">
              <span className="text-2xl text-brand-accent font-bold">Nexgen</span>
              <span className="text-2xl font-bold">Consulting</span>
            </Link>
          </div>

          {/* Immer Hamburger */}
          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-white text-brand-primary px-3 py-2 text-sm font-medium hover:bg-white/90 active:bg-white/80 transition focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
              aria-label="Menü öffnen"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              ref={triggerRef}
            >
              <span className="sr-only">Menü</span>
              <div className="relative h-4 w-6">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-6 rounded bg-brand-primary transition-transform duration-300 ease-brand ${open ? 'translate-y-[7px] rotate-45' : ''}`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded bg-brand-primary transition-opacity duration-200 ease-brand ${open ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute left-0 bottom-0 block h-0.5 w-6 rounded bg-brand-primary transition-transform duration-300 ease-brand ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16" />

      {/* Overlay + Drawer (nicht Fullscreen Panel) */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[80] overflow-x-hidden transition-opacity duration-300 ease-brand ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop lässt Scroll zu (keine Pointer-Events) */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        <aside
          id="mobile-drawer"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-3 bottom-3 z-10 w-[76%] max-w-xs bg-brand-primary/70 backdrop-blur supports-[backdrop-filter]:bg-brand-primary/60 border-l border-white/10 shadow-2xl px-5 pt-4 pb-8 flex flex-col rounded-l-2xl overflow-y-auto transform transition-transform duration-300 ease-brand ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Nexgen Consulting Logo" width={36} height={36} />
              <span className="font-heading text-lg">Menü</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-white/90 hover:text-brand-accent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-accent/60"
              aria-label="Menü schließen"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M6.225 4.811 4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z" />
              </svg>
            </button>
          </div>

          <nav className="mt-2 grid gap-3">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="contents">
                {section.title ? (
                  <div className="px-2 pt-1 text-[11px] uppercase tracking-wide text-white/50">
                    {section.title}
                  </div>
                ) : null}
                {section.items.map((l, idx) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-base transition-all duration-300 ease-brand transform ${
                      isActive(l.href) ? 'bg-white/10 ring-1 ring-white/10' : 'hover:bg-white/5'
                    } ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}
                    style={{ transitionDelay: `${open ? (sIdx * 8 + idx) * 40 : 0}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <Icon name={l.icon} className={`flex-none ${isActive(l.href) ? 'text-brand-accent' : 'text-white/70 group-hover:text-brand-accent'}`} />
                      <span>{l.label}</span>
                    </span>
                    <span className="text-brand-accent/70 group-hover:text-brand-accent">›</span>
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <Link
              href="/services/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-4 py-3 font-medium text-brand-primary shadow-card hover:opacity-95 active:opacity-90 transition"
            >
              Kontakt aufnehmen
            </Link>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-white/80">
              <a
                href="https://www.linkedin.com/company/106936390"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nexgenconsultingcoburg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
