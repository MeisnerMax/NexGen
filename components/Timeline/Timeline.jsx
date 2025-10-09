import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";

export function Timeline({ children, className }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!nodes.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <ol
      role="list"
      className={clsx(
        "relative flex flex-col gap-12 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-12",
        className
      )}
    >
      <div className="absolute left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-brand-primary/25 to-transparent md:hidden" aria-hidden="true" />
      <div className="hidden md:block absolute top-14 left-0 right-0 mx-8 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" aria-hidden="true" />
      {children}
    </ol>
  );
}

export function TimelineStep({
  index,
  total,
  title,
  subtitle,
  highlights = [],
  href,
  status = "upcoming",
  ctaLabel,
  ctaHref,
  icon,
}) {
  const isCurrent = status === "current";
  const isDone = status === "done";
  const computedHref = href || ctaHref || null;

  const FallbackIcon = () => {
    const key = (title || '').toLowerCase();
    const c = "h-5 w-5";
    if (key.includes('analyse') || key.includes('audit')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
          <path d="M10 3a7 7 0 1 0 4.9 12l4.8 4.8 1.4-1.4-4.8-4.8A7 7 0 0 0 10 3zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 10 5z" />
        </svg>
      );
    }
    if (key.includes('strategie') || key.includes('plan')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
          <path d="M4 4h16v2H4V4zm0 7h10v2H4v-2zm0 7h16v2H4v-2z" />
        </svg>
      );
    }
    if (key.includes('design') || key.includes('ux')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      );
    }
    if (key.includes('entwick') || key.includes('build') || key.includes('implement')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
          <path d="M7 2h10v2H7V2zM4 6h16v2H4V6zm2 4h12v2H6v-2zm-2 4h16v2H4v-2zm3 4h10v2H7v-2z" />
        </svg>
      );
    }
    if (key.includes('launch') || key.includes('go live') || key.includes('live')) {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
          <path d="M2 21l9-3 6 6-3-9 9-9-9 3L8 2l6 6-12 13z" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={c}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      </svg>
    );
  };

  const content = (
    <div className={
      clsx(
        // Outer gradient border that "fills" on hover via stronger stops
        "relative rounded-brand-2xl p-[1px] bg-gradient-to-r from-brand-accent/0 via-brand-accent/25 to-brand-accent/0 transition-all duration-500 group-hover:from-brand-accent/40 group-hover:via-brand-accent/80 group-hover:to-brand-accent/40 group-hover:shadow-overlay",
      )
    }>
      <div
        className={clsx(
          "rounded-brand-2xl bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur-md shadow-card ring-1 ring-brand-primary/10 transition-all duration-300 ease-brand group-hover:-translate-y-1 group-hover:ring-brand-accent/50",
          isCurrent && "bg-brand-accent/10 ring-brand-accent/40"
        )}
      >
        <div className="p-6 flex flex-col gap-4 text-left text-brand-primary/85">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/5 text-brand-accent ring-1 ring-brand-primary/10">
              {icon ? icon : <FallbackIcon />}
            </span>
            <h3 className="text-xl font-heading font-semibold text-brand-primary">{title}</h3>
          </div>
          {subtitle && <p className="text-sm leading-relaxed">{subtitle}</p>}
          {highlights.length > 1 ? (
            <ul className="space-y-2 text-sm leading-relaxed text-brand-primary/75">
              {highlights.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : highlights[0] ? (
            <p className="text-sm leading-relaxed text-brand-primary/75">{highlights[0]}</p>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <li
      className="relative pl-12 md:pl-0 reveal"
      aria-current={isCurrent ? "step" : undefined}
      data-reveal
    >
      <div className="absolute left-3 top-9 bottom-0 w-px bg-brand-primary/10 md:hidden" aria-hidden="true" />
      <StepBadge index={index} status={status} icon={icon} />
      <div className="mt-4 md:mt-0" role="group" aria-label={`${index + 1}/${total}: ${title}`}>
        {computedHref ? (
          <Link
            href={computedHref}
            className="group block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            {content}
          </Link>
        ) : (
          <div className="group block">{content}</div>
        )}
      </div>
    </li>
  );
}

function StepBadge({ index, status, icon }) {
  const base = "absolute left-3 top-0 flex h-12 w-12 items-center justify-center rounded-full md:static md:mx-auto md:mb-4 transition-transform duration-300 ease-brand shadow-sm";

  if (status === "done") {
    return (
      <span
        className={clsx(base, "bg-brand-accent text-white shadow-card")}
        aria-label={`Schritt ${index + 1} abgeschlossen`}
      >
        {icon ?? "✓"}
      </span>
    );
  }
  if (status === "current") {
    return (
      <span
        className={clsx(
          base,
          "bg-brand-accent/10 ring-2 ring-brand-accent text-brand-accent animate-[pulse_2s_ease-in-out_infinite] motion-reduce:animate-none"
        )}
        aria-label={`Aktueller Schritt ${index + 1}`}
      >
        {icon ?? index + 1}
      </span>
    );
  }
  return (
    <span
      className={clsx(base, "bg-brand-primary/5 ring-1 ring-brand-primary/20 text-brand-primary")}
      aria-label={`Kommender Schritt ${index + 1}`}
    >
      {icon ?? index + 1}
    </span>
  );
}
