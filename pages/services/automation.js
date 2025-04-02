// pages/automation.js
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Automation() {
  const sectionRefs = useRef([]);
  const countRefs = useRef([]);

  useEffect(() => {
    // Animiert alle Abschnitte individuell, wenn sie in den Viewport kommen
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Zählanimation für die Zahlen
    countRefs.current.forEach((countRef) => {
      gsap.fromTo(
        countRef,
        { innerText: 0 },
        {
          innerText: countRef.dataset.value,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: countRef,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            countRef.innerText = Math.ceil(countRef.innerText);
          },
        }
      );
    });
  }, []);

  // Hilfsfunktion, um refs zu setzen
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToCountRefs = (el) => {
    if (el && !countRefs.current.includes(el)) {
      countRefs.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>Automatisierung & Software - Nexgen Consulting </title>
        <meta
          name="description"
          content="Optimieren Sie Ihre Geschäftsprozesse mit innovativen Automatisierungslösungen und maßgeschneiderter Softwareentwicklung."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Automatisierung & Software",
              "description":
                "Effizienzsteigerung durch automatisierte Geschäftsprozesse und individuelle Softwarelösungen.",
            }),
          }}
        />
      </Head>

      <NavBar />

      <main className="container mx-auto py-24 px-8">
        {/* Header / Einleitung */}
        <header ref={addToRefs} className="mb-20 text-center">
          <h1 className="text-4xl text-white font-bold mb-4">Automatisierung & Software</h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Optimieren Sie Ihre Geschäftsprozesse und reduzieren Sie manuelle Fehler durch innovative Automatisierungslösungen und maßgeschneiderte Softwareentwicklung.
          </p>
        </header>

        {/* Abschnitt: Prozessautomatisierung */}
        <section ref={addToRefs} className="mb-20">
          
        <div className="bg-[#0A1129] flex flex-col md:flex-row items-center gap-12 rounded-lg p-6">
            <div className="md:w-1/2">
              <img
                src="/images/automation.jpg"
                alt="Prozessautomatisierung"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 text-lg text-white leading-relaxed">
              <h2 className="text-3xl text-white font-semibold mb-6 text-center">Prozessautomatisierung</h2>
              <p>
                Unsere Automatisierungslösungen identifizieren ineffiziente manuelle Abläufe und ersetzen sie durch digitale Prozesse, die nahtlos in Ihre bestehende IT-Infrastruktur integriert werden. Dadurch steigern wir die Effizienz, senken Kosten und minimieren Fehlerquellen.
              </p>
            </div>
          </div>
        </section>

        {/* Abschnitt: Individuelle Softwareentwicklung */}
        <section ref={addToRefs} className="mb-20">
          <div className="bg-[#0A1129] flex flex-col md:flex-row items-center gap-12 rounded-lg p-6">
            <div className="md:w-1/2 text-lg text-white leading-relaxed text-center mx-auto">
              <h2 className="text-3xl text-white font-semibold mb-6">Individuelle Softwareentwicklung</h2>
              <p className="max-w-lg mx-auto">
                Wir entwickeln Softwarelösungen, die exakt auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind. Von der Konzeptphase über die Entwicklung bis zur Implementierung bieten wir Ihnen einen ganzheitlichen Ansatz, der Ihre digitalen Prozesse zukunftssicher gestaltet und Ihnen einen Wettbewerbsvorteil verschafft.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/software.jpg"
                alt="Individuelle Softwareentwicklung"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* {/* Interaktive Infografik 
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-3xl text-white font-semibold text-center mb-12">
            Unsere Erfolge in Zahlen
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-16">
            <div className="text-center">
              <div ref={addToCountRefs} data-value="85" className="text-5xl font-bold text-blue-600">0</div>
              <p className="text-xl text-white">Effizienzsteigerung</p>
            </div>
            <div className="text-center">
              <div ref={addToCountRefs} data-value="120" className="text-5xl font-bold text-blue-600">0</div>
              <p className="text-xl text-white">Projekte realisiert</p>
            </div>
            <div className="text-center">
              <div ref={addToCountRefs} data-value="95" className="text-5xl font-bold text-blue-600">0</div>
              <p className="text-xl text-white">Kundenzufriedenheit</p>
            </div>
          </div>
        </section>
        */}
      </main>

      
    </>
  );
}
