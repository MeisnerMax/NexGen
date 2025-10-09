import Link from 'next/link';

export default function CTABox({ className = '' }) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-white/10 p-8 text-white shadow-xl shadow-black/10 ${className}`}>
      <h2 className="text-2xl font-heading font-semibold">Kostenloses Erstgespräch</h2>
      <p className="mt-3 text-sm leading-relaxed text-white/80">
        Gemeinsam identifizieren wir die nächsten Schritte für Digitalisierung, Webdesign oder Prozessautomatisierung in Coburg. 30 Minuten, unverbindlich, konkret.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        >
          Erstgespräch buchen
        </Link>
        <Link
          href="mailto:info@nexgen-consulting.de"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        >
          Frage per E‑Mail senden
        </Link>
      </div>
    </section>
  );
}
