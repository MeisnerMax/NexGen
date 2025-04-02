// components/ServiceCategory.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCategory({ title, link, direction, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialer Zustand: offscreen und transparent
    gsap.set(containerRef.current, {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    });

    // ScrollTrigger-Animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(containerRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });
  }, [direction]);

  return (
    <div className="mb-16 rounded-lg p-4">
      <h3 className="text-3xl font-semibold mb-6">
        <a href={link} className="hover:underline">
          {title}
        </a>
      </h3>
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
