import clsx from "clsx";
import Link from "next/link";

export function Timeline({ children, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        "relative flex flex-col gap-12 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-12",
        className
      )}
    >
      <div className="absolute left-4 top-8 bottom-8 w-px bg-brand-primary/20 md:hidden" aria-hidden="true" />
      <div className="hidden md:block absolute top-14 left-0 right-0 mx-8 h-px bg-brand-primary/15" aria-hidden="true" />
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

  const content = (
    <div
      className={clsx(
        "rounded-brand-2xl bg-white/85 backdrop-blur shadow-card ring-1 ring-brand-primary/10 transition-transform duration-300 ease-brand hover:-translate-y-1 hover:shadow-overlay",
        isCurrent && "bg-brand-accent/10"
      )}
    >
      <div className="p-6 flex flex-col gap-4 text-left text-brand-primary/85">
        <h3 className="text-xl font-heading font-semibold text-brand-primary">{title}</h3>
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
        {ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent/80"
          >
            {ctaLabel ?? "Mehr erfahren"}
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <li
      className="relative pl-12 md:pl-0"
      aria-current={isCurrent ? "step" : undefined}
      data-reveal
    >
      <div className="absolute left-3 top-9 bottom-0 w-px bg-brand-primary/10 md:hidden" aria-hidden="true" />
      <StepBadge index={index} status={status} icon={icon} />
      <div className="mt-4 md:mt-0" role="group" aria-label={`${index + 1}/${total}: ${title}`}>
        {href ? (
          <Link
            href={href}
            className="group block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            {content}
          </Link>
        ) : (
          <div>{content}</div>
        )}
      </div>
    </li>
  );
}

function StepBadge({ index, status, icon }) {
  const base = "absolute left-3 top-0 flex h-12 w-12 items-center justify-center rounded-full md:static md:mx-auto md:mb-4 transition-transform duration-300 ease-brand";

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
