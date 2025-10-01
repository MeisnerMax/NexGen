import { useEffect } from "react";

export default function useReveal(selector = "[data-reveal]") {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      elements.forEach((element) => {
        element.classList.remove("opacity-0", "translate-y-6");
        element.classList.add("opacity-100", "translate-y-0");
        element.style.transitionDelay = "0ms";
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-6");
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.style.transitionDelay = "0ms";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((element, index) => {
      element.classList.add(
        "opacity-0",
        "translate-y-6",
        "transition",
        "duration-500",
        "ease-out"
      );
      element.style.transitionDelay = `${index * 80}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [selector]);
}
