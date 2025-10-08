export const CATEGORY_STYLES = {
  digitalisierung: { label: 'Digitalisierung', color: '#3498DB' },
  webdesign: { label: 'Webdesign', color: '#FF8C00' },
  automatisierung: { label: 'Automatisierung', color: '#1ABC9C' },
  'automatisierung-rpa': { label: 'Automatisierung/RPA', color: '#1ABC9C' },
  rpa: { label: 'RPA', color: '#1ABC9C' },
  app: { label: 'App & Software', color: '#9B59B6' },
  software: { label: 'Software', color: '#9B59B6' },
  'app-software': { label: 'App & Software', color: '#9B59B6' },
  marketing: { label: 'SEO & Marketing', color: '#F1C40F' },
  'seo-marketing': { label: 'SEO & Marketing', color: '#F1C40F' },
};

export function resolveCategoryStyle(slug, fallbackLabel = 'Digitalisierung') {
  if (!slug) {
    return { label: fallbackLabel, color: CATEGORY_STYLES.digitalisierung.color };
  }
  const key = slug.toLowerCase();
  if (CATEGORY_STYLES[key]) {
    return CATEGORY_STYLES[key];
  }
  return { label: fallbackLabel, color: CATEGORY_STYLES.digitalisierung.color };
}

export function getCategoryColor(slug) {
  return resolveCategoryStyle(slug).color;
}
