// components/Hero.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Parallax Text
    gsap.to(textRef.current, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Overlay-Fade
    gsap.to(overlayRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Video Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Video-Hintergrund (immer im DOM, Quelle bei Sichtbarkeit) */}
      <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[100px]" // Hier abgerundete untere Ecken
>
  {isVideoLoaded ? (
    <source src="/videos/hero.mp4" type="video/mp4" />
  ) : null}
</video>

{!isVideoLoaded && (
  <img
    src="/images/hero-fallback.jpg"
    alt="Hero Fallback"
    className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-[100px]" // Auch hier!
  />
)}

<div
  ref={overlayRef}
  className="absolute top-0 left-0 w-full h-full bg-black opacity-50 " // Und Overlay ebenfalls
></div>


      {/* Textinhalt mit Parallax */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-4">Visionen digital umsetzen – klar, strukturiert, wirkungsvoll</h1>
        <p className="text-xl mb-8 max-w-2xl">
        Digitale Lösungen, die exakt zum Unternehmen passen: von der Prozessautomatisierung bis zum überzeugenden Online-Auftritt. Zukunftssicher, flexibel und auf messbaren Erfolg ausgerichtet.
        </p>
        <a
          href="/services/contact"
          className="bg-blue text-2xl px-6 py-14 rounded-full font-semibold hover:bg-grey transition"
        >
          Jetzt kostenlose Erstberatung anfordern
        </a>
      </div>
    </section>
  );
}
