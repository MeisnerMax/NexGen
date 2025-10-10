// pages/services/contact.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const messageFromQuery = router.query.message;
    if (messageFromQuery) {
      setFormData((prev) => ({
        ...prev,
        message: decodeURIComponent(messageFromQuery),
      }));
    }
  }, [router.query]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const SERVICES = [
    'Webdesign & Branding',
    'Webshop',
    'Google Analytics',
    'SEO',
    'Social Media',
    'Logo & Firmenidentität',
    'Microsoft 365',
    'Prozessautomatisierung',
    'Softwareentwicklung',
    'Appentwicklung',
  ];

  const toggleService = (service, checked) => {
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((s) => s !== service),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: 'ok', msg: 'Vielen Dank! Ihre Nachricht wurde gesendet.' });
        setFormData({ name: '', email: '', message: '', services: [] });
      } else {
        setStatus({ type: 'err', msg: 'Fehler beim Senden der Nachricht.' });
      }
    } catch (error) {
      setStatus({ type: 'err', msg: 'Fehler beim Senden der Nachricht.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt - NexGen Consulting</title>
        <link rel="canonical" href="https://nexgen-consulting.de/kontakt" />
        <meta name="description" content="Kontaktieren Sie NexGen Consulting – wir melden uns in der Regel innerhalb eines Werktags." />
      </Head>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">Kontakt</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">Lassen Sie uns zusammen starten</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80">Wir antworten in der Regel innerhalb eines Werktags.</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {/* Info card */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl backdrop-blur-md">
            <h2 className="text-lg font-semibold text-white">Kontaktinformationen</h2>
            <ul className="mt-4 space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-0.5">✉️</span>
                <a className="hover:text-cyan-300 underline-offset-4 hover:underline" href="mailto:meisner@nexgen-consulting.de">meisner@nexgen-consulting.de</a>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden className="mt-0.5">📞</span>
                <a className="hover:text-cyan-300 underline-offset-4 hover:underline" href="tel:+4915259089486">+49 1525 9089486</a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="Zertifizierungen">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Cloud Partner</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">AI Ready</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Security First</span>
            </div>
          </aside>

          {/* Form card */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl backdrop-blur-md">
            <h2 className="mb-2 text-xl font-semibold text-white">Nachricht senden</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">E‑Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  placeholder="name@mail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  placeholder="Kurz Ihr Anliegen beschreiben"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-white/80">Interessierte Services</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {SERVICES.map((service) => (
                    <label key={service} htmlFor={service} className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:border-cyan-300/40">
                      <input
                        id={service}
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={(e) => toggleService(service, e.target.checked)}
                        className="h-5 w-5 cursor-pointer rounded border-white/30 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60"
              >
                {submitting ? 'Senden…' : 'Anfrage senden'}
              </button>
              {status && (
                <p className={`text-center text-sm ${status.type === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {status.msg}
                </p>
              )}
            </form>
          </section>
        </div>

        {/* FAQ */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-lg font-semibold text-white">Häufige Fragen</h2>
          <div className="mt-4 grid gap-3">
            <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
              <summary className="cursor-pointer font-medium">Wie schnell erhalte ich eine Antwort?</summary>
              <div className="mt-2 text-white/70">In der Regel innerhalb eines Werktags.</div>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
              <summary className="cursor-pointer font-medium">Welche Branchen betreuen Sie?</summary>
              <div className="mt-2 text-white/70">Wir arbeiten branchenübergreifend, mit kleinen und mittelständischen Unternehmen.</div>
            </details>
            <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90">
              <summary className="cursor-pointer font-medium">Bieten Sie individuelle Workshops an?</summary>
              <div className="mt-2 text-white/70">Ja, wir konzipieren Trainings, die zu Ihrem Team passen.</div>
            </details>
          </div>
        </section>

      </main>
    </>
  );
}

