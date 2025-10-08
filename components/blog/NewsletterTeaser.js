import Link from 'next/link';

export default function NewsletterTeaser() {
  return (
    <aside className="col-span-full rounded-2xl border border-white/10 bg-white/10 p-8 text-white shadow-xl shadow-black/10 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out hover:border-brand-accent/40">
      <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
        Newsletter · Digitalisierung Coburg
      </span>
      <h3 className="mt-4 text-2xl font-heading font-semibold">Insights direkt ins Postfach</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        Einmal im Monat verschicken wir kompakte Updates zu Foerderprogrammen, Webdesign-Trends und Automatisierungsideen fuer KMU in Coburg und Oberfranken.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/services/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        >
          Kostenloses Erstgespraech
        </Link>
        <Link
          href="mailto:info@nexgen-consulting.de?subject=Newsletter-Opt-in"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        >
          Newsletter anfragen
        </Link>
      </div>
    </aside>
  );
}
