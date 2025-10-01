import Link from "next/link";

export default function ServiceCard({ icon, title, description, href }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className="group block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent">
        <div className="rounded-brand-2xl ring-1 ring-white/10 bg-brand-primary/90 shadow-card transition duration-300 ease-brand group-hover:-translate-y-1 group-hover:shadow-overlay h-full flex flex-col justify-between p-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-accent/15 text-brand-accent flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <div className="space-y-3 text-center">
            <h4 className="text-2xl font-semibold text-white">{title}</h4>
            <p className="text-surface-light/80 text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
