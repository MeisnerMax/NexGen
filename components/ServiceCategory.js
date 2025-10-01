export default function ServiceCategory({ title, link, children }) {
  return (
    <div className="space-y-6" data-reveal>
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-3xl font-heading font-semibold text-white">
            {link ? (
              <a href={link} className="hover:text-brand-accent/90 transition-colors">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
