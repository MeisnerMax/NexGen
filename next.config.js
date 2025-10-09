// next.config.js
/**
 * next.config.js
 * Adds SEO-friendly route aliases with rewrites and preserves old URLs via redirects.
 */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/services/website', destination: '/webdesign-coburg', permanent: true },
      { source: '/services/app', destination: '/appentwicklung-coburg', permanent: true },
      { source: '/services/marketing', destination: '/online-marketing-coburg', permanent: true },
      { source: '/services/softwareentwicklung', destination: '/softwareentwicklung-coburg', permanent: true },
      { source: '/services/loesungen', destination: '/microsoft365-loesungen-coburg', permanent: true },
      { source: '/services/firmenidentitaet', destination: '/branding-coburg', permanent: true },
      { source: '/services/schulungen', destination: '/schulungen-coburg', permanent: true },
      { source: '/services/beratung', destination: '/digitalberatung-coburg', permanent: true },
      { source: '/services/contact', destination: '/kontakt', permanent: true },
      { source: '/website', destination: '/webdesign-coburg', permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: '/webdesign-coburg', destination: '/services/website' },
      { source: '/appentwicklung-coburg', destination: '/services/app' },
      { source: '/online-marketing-coburg', destination: '/services/marketing' },
      { source: '/softwareentwicklung-coburg', destination: '/services/softwareentwicklung' },
      { source: '/microsoft365-loesungen-coburg', destination: '/services/loesungen' },
      { source: '/branding-coburg', destination: '/services/firmenidentitaet' },
      { source: '/schulungen-coburg', destination: '/services/schulungen' },
      { source: '/digitalberatung-coburg', destination: '/services/beratung' },
      { source: '/kontakt', destination: '/services/contact' },
    ];
  },
};
  
