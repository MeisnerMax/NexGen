/* Generate simple branded JPEG placeholders for blog covers */
const fs = require('fs');
const path = require('path');

let sharp;
try {
  // eslint-disable-next-line global-require
  sharp = require('sharp');
} catch (e) {
  console.error('Sharp is not installed. Please run `npm i sharp` and retry.');
  process.exit(1);
}

const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'blog');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const COLORS = {
  digitalisierung: '#3498DB',
  webdesign: '#FF8C00',
  automatisierung: '#1ABC9C',
  'automatisierung-rpa': '#1ABC9C',
  'app-software': '#9B59B6',
  software: '#9B59B6',
  marketing: '#F1C40F',
  'seo-marketing': '#F1C40F',
};

const files = [
  {
    name: 'digitalisierung-coburg-5-schritte.jpg',
    title: 'Digitalisierung Coburg',
    subtitle: '5 Schritte fuer KMU',
    color: COLORS.digitalisierung,
  },
  {
    name: 'flutter-vs-web.jpg',
    title: 'Flutter vs Web',
    subtitle: 'Entscheidungshilfe KMU',
    color: COLORS['app-software'],
  },
  {
    name: 'rpa-hr-vertrieb-7-beispiele.jpg',
    title: 'RPA in HR & Vertrieb',
    subtitle: '7 Beispiele',
    color: COLORS['automatisierung-rpa'],
  },
  {
    name: 'seo-lokal-coburg.jpg',
    title: 'SEO lokal',
    subtitle: 'Coburg ohne Ads',
    color: COLORS['seo-marketing'],
  },
  {
    name: 'webdesign-coburg-kosten-2025.jpg',
    title: 'Webdesign Coburg',
    subtitle: 'Kosten 2025',
    color: COLORS.webdesign,
  },
];

function escapeXml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function svgTemplate({ width, height, color, title, subtitle }) {
  const bg = color;
  const accent = '#ffffff22';
  const textColor = '#ffffff';
  const subColor = '#ffffffcc';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}" stop-opacity="1"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="${width * 0.85}" cy="${height * 0.2}" r="${height * 0.18}" fill="${accent}"/>
  <circle cx="${width * 0.15}" cy="${height * 0.85}" r="${height * 0.22}" fill="${accent}"/>
  <rect x="40" y="40" width="8" height="${height - 80}" rx="4" fill="#ffffff66"/>
  <text x="80" y="${height * 0.45}" font-family="Inter, Poppins, Arial, sans-serif" font-size="${Math.round(height * 0.11)}" font-weight="700" fill="${textColor}">
    ${escapeXml(title)}
  </text>
  <text x="80" y="${height * 0.60}" font-family="Inter, Poppins, Arial, sans-serif" font-size="${Math.round(height * 0.06)}" font-weight="600" fill="${subColor}">
    ${escapeXml(subtitle)}
  </text>
</svg>`;
}

async function main() {
  const width = 1600;
  const height = 900; // 16:9
  for (const f of files) {
    const out = path.join(OUT_DIR, f.name);
    if (fs.existsSync(out)) {
      // eslint-disable-next-line no-console
      console.log('Skip existing', out);
      continue;
    }
    const svg = svgTemplate({ width, height, color: f.color, title: f.title, subtitle: f.subtitle });
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(out);
    // eslint-disable-next-line no-console
    console.log('Wrote', out);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
