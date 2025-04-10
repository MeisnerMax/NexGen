import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCategory({ title, link, direction, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.set(containerRef.current, {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    });

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
    <div className="mb-16 rounded-lg p-2">
      <h3 className="text-3xl font-semibold mb-6">
        <a href={link} className="hover:underline">
          {title}
        </a>
      </h3>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full"
      >
        {children}
      </div>
    </div>
  );
}
