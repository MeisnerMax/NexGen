import { useState, useMemo, useRef, useEffect } from "react";

const FAQ_ITEMS = [
  {
    question: "Was kostet eine Firmenwebsite in Coburg?",
    answer:
      "Die Kosten beginnen in der Regel bei etwa 599 EUR, koennen aber je nach Funktionsumfang, Design und gewaehlten Zusatzfeatures - beispielsweise Shop, Mehrsprachigkeit oder Backendfunktionen - bis zu mehreren Tausend Euro betragen.",
  },
  {
    question: "Wie lange dauert die Fertigstellung einer Website?",
    answer:
      "Für eine Standardwebsite planen wir in Coburg ueblicherweise etwa vier bis sechs Wochen ein - vom Konzept ueber das Design bis zur Liveschaltung. Komplexere Projekte mit individueller Software- oder Schnittstellenentwicklung benoetigen entsprechend mehr Zeit.",
  },
  {
    question: "Bietet ihr auch Digitalisierung & Automatisierung an?",
    answer:
      "Ja, wir begleiten Unternehmen in Coburg und Oberfranken bei der Digitalisierung und Automatisierung von Geschaeftsprozessen - zum Beispiel mit Office-Automatisierung, RPA-Bots, API-Integrationen oder Workflow-Tools wie Power Automate.",
  },
  {
    question: "Welche Technologien verwendet ihr?",
    answer:
      "Wir setzen auf moderne Web-Stacks mit HTML5, CSS3, JavaScript und Frameworks wie React oder Vue. Für Apps nutzen wir unter anderem Flutter, und im Backend arbeiten wir mit Cloud-Loesungen, REST-APIs, Datenbanken und sicheren Architekturmustern.",
  },
  {
    question: "Gibt es Förderprogramme für Digitalisierung in Bayern?",
    answer:
      "Ja, beispielsweise der Digitalbonus Bayern oder weitere Foerdermittelprogramme. Wir bieten einen Foerdermittel-Check an und unterstuetzen beim Antrag, damit Digitalisierungsprojekte in Coburg und ganz Bayern gefoerdert werden koennen.",
  },
];

function FAQCard({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });
    observer.observe(contentRef.current);
    setContentHeight(contentRef.current.scrollHeight);
    return () => observer.disconnect();
  }, []);

  const accentPalette = useMemo(
    () => [
      "from-brand-accent/80 to-brand-primary/70",
      "from-purple-400/80 to-indigo-500/70",
      "from-cyan-400/80 to-sky-400/70",
      "from-amber-400/80 to-orange-500/70",
      "from-emerald-400/80 to-teal-500/70",
    ],
    []
  );

  const accent = accentPalette[index % accentPalette.length];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl shadow-black/10">
      <div
        className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${accent}`}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        aria-expanded={isOpen}
      >
        <span className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${accent} text-brand-primary font-semibold`}>{String(index + 1).padStart(2, "0")}</span>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white">{item.question}</h3>
          <p className={`text-sm text-white/70 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-80"}`}>
            {isOpen ? "" : "Zum Oeffnen tippen"}
          </p>
        </div>
        <span
          className={`ml-auto mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
            <path fillRule="evenodd" d="M10 3c.414 0 .75.336.75.75v5.5h5.5a.75.75 0 110 1.5h-5.5v5.5a.75.75 0 11-1.5 0v-5.5h-5.5a.75.75 0 110-1.5h5.5v-5.5C9.25 3.336 9.586 3 10 3z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-6 text-sm leading-relaxed text-white/80">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
      <div className="container max-w-screen-xl px-6 lg:px-8 space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4" data-reveal>
          <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            FAQ Coburg
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold">
            Fragen zur Digitalisierung und Prozessautomatisierung in Coburg
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Antworten für Unternehmen in Coburg, Bamberg und ganz Oberfranken zu Kosten, Technologie-Stacks und Foerdermitteln rund um Webentwicklung und Automatisierung.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2" data-reveal>
          {FAQ_ITEMS.map((item, index) => (
            <FAQCard
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


