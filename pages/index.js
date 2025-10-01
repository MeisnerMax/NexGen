import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import Chatbot from "../components/Chatbot";
import { Timeline, TimelineStep } from "../components/Timeline";
import useReveal from "../hooks/useReveal";
import { rawTimelineSteps } from "../data/timeline";

export default function Home() {
  useReveal();

  const timelineSteps = rawTimelineSteps.reduce((acc, step) => {
    const existing = acc.find((entry) => entry.href === step.href);
    if (existing) {
      existing.highlights = [...new Set([existing.subtitle, step.subtitle])].filter(Boolean);
      existing.subtitle = existing.highlights[0];
      existing.status = existing.status === "done" ? "done" : step.status;
      return acc;
    }
    acc.push({ ...step, highlights: step.subtitle ? [step.subtitle] : [] });
    return acc;
  }, []);

  return (
    <>
      <Head>
        <title>Nexgen Consulting - Digitalisierung & Webdesign</title>
        <meta
          name="description"
          content="Nexgen Consulting unterstützt kleine und mittelständische Unternehmen bei Digitalisierung, Prozessautomatisierung, Webdesign und SEO – alles aus einer Hand."
        />
      </Head>

      <Hero />
      <Chatbot />

      <main>
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div data-reveal>
                <p className="uppercase tracking-widest text-brand-accent font-semibold mb-4">Digitalisierungspartner aus Coburg</p>
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                  Visionen digital umsetzen – klar, strukturiert, wirkungsvoll
                </h2>
                <p className="text-lg leading-relaxed text-surface-light/90">
                  Nexgen Consulting begleitet Sie von der Idee bis zum skalierbaren Betrieb: Prozessautomatisierung, individuelle Software & Apps, überzeugende Webauftritte und wirkungsvolles Marketing – alles miteinander verzahnt.
                </p>
              </div>
              <div data-reveal className="order-first md:order-none">
                <img src="/images/team.jpg" alt="Unser Team" className="w-full rounded-brand-2xl shadow-card ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-12">
            <div className="text-center" data-reveal>
              <p className="uppercase tracking-widest text-brand-accent font-semibold mb-3">Der Nexgen-Prozess</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-primary mb-4">
                Von der Beratung bis zur Umsetzung – ein fließender Digitalisierungsfahrplan
              </h2>
              <p className="text-brand-primary/80 leading-relaxed max-w-3xl mx-auto">
                Jeder Schritt baut auf dem vorherigen auf. So entsteht ein konsistentes Erlebnis für Ihr Team und Ihre Kundschaft – ohne Medienbrüche, dafür mit klaren KPIs.
              </p>
            </div>

            <Timeline>
              {timelineSteps.map((step, index) => (
                <TimelineStep
                  key={step.href ?? index}
                  index={index}
                  total={timelineSteps.length}
                  title={step.title}
                  subtitle={step.subtitle}
                  highlights={step.highlights}
                  status={step.status}
                  href={step.href}
                  ctaHref={step.ctaHref}
                  ctaLabel={step.ctaLabel}
                />
              ))}
            </Timeline>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold mb-4">Gemeinsam in die Umsetzung</h2>
              <p className="text-surface-light/80 leading-relaxed mb-6">
                Wir begleiten Unternehmen aus Coburg, Oberfranken und dem gesamten DACH-Raum bei der digitalen Transformation. Lassen Sie uns in einem Gespräch herausfinden, welche Schritte den größten Impact haben.
              </p>
              <Link href="/services/contact" className="btn-primary inline-flex text-base sm:text-lg">
                Zum Kontaktformular
              </Link>
            </div>
            <div data-reveal className="bg-brand-primary/70 ring-1 ring-white/10 rounded-brand-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Schnelle Terminvereinbarung</h3>
                <p className="text-surface-light/80">Beantworten Sie ein paar Fragen und wir melden uns mit konkreten Vorschlägen für einen Kick-off.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Workshops & Sparring</h3>
                <p className="text-surface-light/80">Wir moderieren Workshops, priorisieren Maßnahmen und dokumentieren Entscheidungen transparent.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Umsetzung & Erfolgsmessung</h3>
                <p className="text-surface-light/80">Gemeinsam begleiten wir die Realisierung, etablieren KPIs und sorgen für kontinuierliche Optimierung.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-cta" className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center" data-reveal>
            <h2 className="text-3xl font-heading font-semibold text-brand-primary mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-brand-primary/80 leading-relaxed mb-8">
              Buchen Sie eine kostenlose Erstberatung und erhalten Sie innerhalb weniger Tage eine klare Einschätzung zu Zeitplan, Budget und Machbarkeit.
            </p>
            <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
              Jetzt kostenlose Erstberatung anfordern
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
