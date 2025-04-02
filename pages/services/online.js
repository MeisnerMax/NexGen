// pages/online.js
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Online() {
  const sectionRefs = useRef([]);
  const countRefs = useRef([]);

  useEffect(() => {
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
        <title>Online-Auftritt & Schulungen - Nexgen Consulting </title>
        <meta
          name="description"
          content="Optimieren Sie Ihre digitale Präsenz mit modernem Webdesign, Branding und praxisorientierten Schulungen."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Online-Auftritt & Schulungen",
              "description":
                "Optimieren Sie Ihre digitale Präsenz mit modernem Webdesign, Branding und praxisorientierten Schulungen.",
            }),
          }}
        />
      </Head>

      <NavBar />

      <main className="container mx-auto py-24 px-8">
        <header ref={addToRefs} className="mb-20 text-center">
          <h1 className="text-4xl text-white font-bold mb-4">Online-Auftritt & Schulungen</h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Wir gestalten Ihre digitale Präsenz neu und statten Ihr Team mit dem nötigen Wissen aus, um langfristig in der digitalen Welt erfolgreich zu sein.
          </p>
        </header>

        <section ref={addToRefs} className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-[#0A1129] rounded-lg p-6 backdrop-blur-md">
            <div className="md:w-1/2">
              <img
                src="/images/webdesign.jpg"
                alt="Webdesign und Branding"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 text-lg text-white leading-relaxed">
              <h2 className="text-3xl text-white font-semibold mb-6 text-center">Webdesign & Branding</h2>
              <p>
                Wir entwickeln moderne, responsive Websites mit Fokus auf Benutzerfreundlichkeit und Ästhetik. Dabei schaffen wir eine starke Markenidentität, die Ihre Zielgruppe anspricht und Vertrauen aufbaut.
              </p>
            </div>
          </div>
        </section>

        <section ref={addToRefs} className="mb-20">
          
          <div className="flex flex-col md:flex-row items-center gap-12 bg-[#0A1129] rounded-lg p-6 backdrop-blur-md">
            <div className="md:w-1/2 order-2 md:order-1 text-lg text-white leading-relaxed">
              <h2 className="text-3xl text-white font-semibold mb-6 text-center">Microsoft 365 Schulungen</h2>
              <p>
                Unsere Schulungen zu Microsoft 365 sind praxisnah und interaktiv. Ihr Team lernt den effektiven Umgang mit Outlook, Word, Excel, Teams und weiteren Tools – für eine reibungslose, digitale Zusammenarbeit im Unternehmen.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="/images/m365.jpg"
                alt="Microsoft 365 Schulungen"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section ref={addToRefs} className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-[#0A1129] rounded-lg p-6 backdrop-blur-md">
            <div className="md:w-1/2">
              <img
                src="/images/marketing.jpg"
                alt="Digitales Marketing"
                className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 text-lg text-white leading-relaxed">
              <h2 className="text-3xl text-white font-semibold mb-6 text-center">Digitales Marketing</h2>
              <p>
                Mit durchdachten Online-Marketing-Strategien erhöhen wir Ihre Sichtbarkeit und Reichweite. Ob SEO, Social Media oder datengetriebene Kampagnen – wir liefern individuell abgestimmte Maßnahmen mit messbarem Erfolg.
              </p>
            </div>
          </div>
        </section>

        {/*
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
