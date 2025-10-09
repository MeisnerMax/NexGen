import Head from 'next/head';
import Chatbot from '../../components/Chatbot';
import { useRouter } from 'next/router';

export default function AppService() {
  const router = useRouter();
  const redirectToContact = (message) => router.push(`/kontakt?message=${encodeURIComponent(message)}`);

  return (
    <>
      <Head>
        <title>App-Entwicklung - Nexgen Consulting</title>
        <meta name="description" content="Professionelle App‑Entwicklung für iOS und Android – modern, skalierbar und benutzerfreundlich." />
        <meta name="keywords" content="App-Entwicklung, iOS, Android, Mobile Apps, UX Design, API Integration" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="App-Entwicklung - Nexgen Consulting" />
        <meta property="og:description" content="Individuelle App‑Entwicklung für Ihre Anforderungen – modern, skalierbar und benutzerfreundlich." />
        <meta property="og:url" content="https://nexgen-consulting.de/appentwicklung-coburg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <link rel="canonical" href="https://nexgen-consulting.de/appentwicklung-coburg" />
      </Head>

      <Chatbot />

      {/* Hero */}
      <header className="relative overflow-hidden bg-brand-primary text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">Leistung</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">App‑Entwicklung</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80">Native und hybride Apps für iOS und Android – performant, benutzerfreundlich und sicher integriert.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">iOS</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Android</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">API</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">UX/UI</span>
          </div>
        </div>
      </header>

      {/* Value Props */}
      <section className="py-12 md:py-16 bg-brand-primary">
        <div className="container mx-auto px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {[
            { title: 'iOS & Android', text: 'Plattformübergreifend umgesetzt – modern, skalierbar, effizient.' },
            { title: 'API‑Integration', text: 'Nahtlose Anbindung an Systeme und Dienste – sicher und performant.' },
            { title: 'UX/UI Design', text: 'Intuitive, zugängliche Interfaces mit klarem Fokus auf Nutzen.' },
          ].map((f) => (
            <div key={f.title} className="rounded-brand-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-white/80">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="py-8 md:py-12 bg-brand-primary text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">App‑Pakete</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Vom schnellen Start bis zur individuellen Lösung – transparent und erweiterbar.</p>
        </div>
        <div className="container mx-auto px-6 lg:px-8 mt-8 grid gap-6 md:grid-cols-3">
          {[
            { name: 'Basis‑App', msg: 'Basis-App', perks: ['Landing‑Screen','Formulare & Listen','Basis‑Offline'] },
            { name: 'Standard‑App', msg: 'Standard-App', perks: ['Login & Rollen','API‑Integration','Push & Medien'] },
            { name: 'Premium‑App', msg: 'Premium-App', perks: ['Zahlung/Store','Erweiterter Offline','Analytics & A/B'] },
          ].map((p) => (
            <button key={p.name} onClick={() => redirectToContact(p.msg)} className="group text-left">
              <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
                <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Empfehlung</span>
                  </div>
                  <ul className="mt-2 space-y-2 text-sm text-white/80">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg transition group-hover:brightness-110">Anfragen</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold mb-3">Bereit für Ihr App‑Projekt?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Kurzes Erstgespräch, klare Roadmap, schneller Store‑Launch.</p>
          <a href="/kontakt" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Jetzt Erstgespräch vereinbaren</a>
        </div>
      </section>
    </>
  );
}

