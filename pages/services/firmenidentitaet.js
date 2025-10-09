import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";

const deliverables = [
  "Logo-Design mit klarer Markenbotschaft",
  "Farb- und Typografie-Systeme",
  "Brand Guidelines & Asset-Bibliotheken",
  "Geschftsausstattung & Templates",
  "Social-Media- und Prsentationsvorlagen",
  "Redesign & Rebranding-Roadmaps",
];

export default function Firmenidentitaet() {
  useReveal();

  return (
    <>
      <Head>
        <title>Firmenidentitt & Branding - NexGen Consulting</title>
        <meta
          name="description"
          content="Corporate Design, Markenstrategie und Brand Guidelines von NexGen Consulting: Wir entwickeln Identitten, die wirken."
        />
        <meta property="og:title" content="Firmenidentitt & Branding - NexGen Consulting" />
        <meta
          property="og:description"
          content="Logoentwicklung, Styleguides und Markenaktivierung - NexGen Consulting begleitet Ihr Branding von der Idee bis zum Roll-out."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/branding-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/branding-coburg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Branding & Firmenidentitt in Coburg",
          serviceType: "Branding",
          areaServed: "Coburg, Germany",
          provider: { "@type": "LocalBusiness", name: "Nexgen Consulting", url: "https://nexgen-consulting.de", telephone: "+49 1525 9089486", address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" } },
          url: "https://nexgen-consulting.de/branding-coburg"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nexgen Consulting",
          url: "https://nexgen-consulting.de",
          telephone: "+49 1525 9089486",
          address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" }
        }) }} />
      </Head>

      <Chatbot />

      <main>
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center" data-reveal>
            <div>
              <p className="uppercase tracking-widest text-brand-accent font-semibold mb-4">Branding & Corporate Design</p>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                Markenidentitten mit Wiedererkennungswert
              </h1>
              <p className="text-lg text-surface-light/90 leading-relaxed mb-8">
                Wir entwickeln Marken, die Haltung zeigen  visuell konsistent, strategisch fundiert und bereit fr alle Kanle. Von Logo ber Farbwelten bis zu digitalen Templates erhalten Sie ein System, das Ihr Team eigenstndig nutzen kann.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
                Branding-Gesprch vereinbaren
              </Link>
            </div>
            <div className="rounded-brand-2xl bg-brand-primary/70 ring-1 ring-white/10 shadow-card p-8 space-y-4" data-reveal>
              <h2 className="text-xl font-heading font-semibold">Brand Deliverables</h2>
              <ul className="space-y-3 text-white/80 leading-relaxed">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6" data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-white">Vom Marken-Workshop bis zum Launch</h2>
              <p className="text-white/80 leading-relaxed">
                Gemeinsam definieren wir Markenwerte, Tonalitt und visuelle Leitplanken. Daraus entstehen Moodboards, Design-Routen und ein finaler Brand Guide, der Print- wie Digitalformate abdeckt.
              </p>
              <p className="text-white/80 leading-relaxed">
                Unser Enablement-Ansatz stellt sicher, dass Ihre Teams Assets eigenstndig verwenden knnen  inklusive Schulung, Tool-Vorlagen und Feedback-Loops.
              </p>
            </div>
            <div className="" data-reveal>
                <div className="rounded-brand-xl text-brand-primary shadow-card ring-1 ring-brand-primary/10 p-6">
                <h3 className="text-3xl font-heading font-semibold text-white mb-2">Deliverable-Pakete</h3>
                <p className=" text-white leading-relaxed">
                  Logo-Sets, Typo-Systeme, Icon Libraries, Social-Media-Templates, Prsentations-Decks, Print-Assets, Design-Systeme fr Web & App.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center space-y-6" data-reveal>
            <h2 className="text-3xl font-heading font-semibold">Bereit fr einen klaren Markenauftritt?</h2>
            <p className="text-surface-light/85 leading-relaxed max-w-2xl mx-auto">
              Wir begleiten Ihr Rebranding oder den Start einer neuen Marke  vom Naming bis zum Launch-Toolkit. Lassen Sie uns gemeinsam die nchsten Schritte planen.
            </p>
            <Link href="/kontakt" className="btn-secondary inline-flex text-base sm:text-lg">
              Kostenlose Erstberatung buchen
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

