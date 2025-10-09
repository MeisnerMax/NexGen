// pages/services/website.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';
import { useRouter } from 'next/router';

export default function WebsiteService() {
  const router = useRouter();

  const redirectToContact = (message) => {
    router.push(`/kontakt?message=${encodeURIComponent(message)}`);
  };

  return (
    <div className="min-h-screen bg-brand-primary text-white">
      <Head>
        <title>Webdesign & Branding - Nexgen Consulting</title>
        <meta name="description" content="Professionelles Webdesign und starke Markenidentität – schnell, modern, suchmaschinenoptimiert." />
        <meta name="keywords" content="Webdesign, Branding, Responsive Design, SEO, CMS, Website, Logo, UX Design" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Webdesign & Branding - Nexgen Consulting" />
        <meta property="og:description" content="Professionelles Webdesign und starke Markenidentität für Ihre digitale Sichtbarkeit." />
        <meta property="og:url" content="https://nexgen-consulting.de/webdesign-coburg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <link rel="canonical" href="https://nexgen-consulting.de/webdesign-coburg" />
      </Head>

      <Chatbot />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
          <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">Leistung</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">Webdesign & Branding</h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80">Websites, die Wirkung zeigen – schnell, sicher, SEO‑stark und auf Ihr Ziel ausgerichtet.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">SEO‑ready</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">PageSpeed</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">CMS</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">DSGVO</span>
          </div>
        </div>
      </header>

      {/* Value Props */}
      <section className="py-12 md:py-16 bg-brand-primary">
        <div className="container mx-auto px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-white/80">Mobil‑first umgesetzt – überzeugend auf Smartphone, Tablet und Desktop.</p>
          </div>
          <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">SEO‑Optimierung</h3>
            <p className="text-white/80">Sauberer Code, schnelle Ladezeiten, strukturierte Daten und sinnvolle Meta‑Daten.</p>
          </div>
          <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Einfache Pflege (CMS)</h3>
            <p className="text-white/80">Texte und Bilder selbst im CMS verwalten – ohne Programmierkenntnisse.</p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">Website‑Pakete für jeden Bedarf</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Schneller Einstieg oder individuelles Projekt – transparent, skalierbar, erweiterbar.</p>
        </div>
        <div className="container mx-auto px-6 lg:px-8 mt-8 grid gap-6 md:grid-cols-3">
          <button onClick={() => redirectToContact('Starter-Website')} className="group text-left">
            <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
              <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Starter – Website</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Einsteiger</span>
                </div>
                <p className="text-2xl font-bold">ab 599 €</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {['Landingpage','Kontaktformular','Impressum & Datenschutz','Basis‑SEO'].map(perk => (
                    <li key={perk} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden /><span>{perk}</span></li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg transition group-hover:brightness-110">Anfragen</span>
              </div>
            </div>
          </button>

          <button onClick={() => redirectToContact('Standard-Website')} className="group text-left">
            <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
              <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Standard – Website</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Beliebt</span>
                </div>
                <p className="text-2xl font-bold">ab 1.299 €</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {['3–5 Seiten','CMS integriert','On‑Page SEO','Stock‑Bilder'].map(perk => (
                    <li key={perk} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden /><span>{perk}</span></li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg transition group-hover:brightness-110">Anfragen</span>
              </div>
            </div>
          </button>

          <button onClick={() => redirectToContact('Premium-Website')} className="group text-left">
            <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
              <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">Premium – Website</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Individuell</span>
                </div>
                <p className="text-2xl font-bold">individuell</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {['Individuelles Design','Terminbuchung/Webshop','Wartung','Erweiterbar'].map(perk => (
                    <li key={perk} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden /><span>{perk}</span></li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg transition group-hover:brightness-110">Anfragen</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Process highlight */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6 lg:px-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-semibold">Klarer Prozess, messbare Ergebnisse</h3>
            <p className="text-white/80">Vom Kick‑off bis zum Go‑Live: Transparenz in jedem Schritt. Optional binden wir Analytik und A/B‑Tests ein, um die Ziele der Seite zu belegen.</p>
          </div>
          <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-white/60">Time‑to‑First‑Byte</span><div className="text-white font-semibold">&lt; 200 ms</div></div>
              <div><span className="text-white/60">PageSpeed</span><div className="text-white font-semibold">90+ mobil</div></div>
              <div><span className="text-white/60">SEO‑Ready</span><div className="text-white font-semibold">Meta/Schema</div></div>
              <div><span className="text-white/60">Launch</span><div className="text-white font-semibold">2–4 Wochen</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-brand-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold mb-3">Bereit, Ihre Website zu starten?</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Kurzes Erstgespräch, klare Roadmap, schneller Go‑Live.</p>
          <a href="/kontakt" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Jetzt Erstgespräch vereinbaren</a>
        </div>
      </section>

      {/* Optional: Footer einbinden, falls gewünscht */}
      {/* <Footer /> */}
    </div>
  );
}

