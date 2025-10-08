/* Replace common ae/oe/ue transliterations with German umlauts in .js UI text files.
   Applies to files under pages/services and selected top-level pages. */
const fs = require('fs');
const path = require('path');

const targets = [
  path.join(process.cwd(), 'pages', 'services'),
  path.join(process.cwd(), 'pages'),
  path.join(process.cwd(), 'components'),
];

const rules = [
  [/\bFuer\b/g, 'Für'],
  [/\bfuer\b/g, 'für'],
  [/\bUeber\b/g, 'Über'],
  [/\bueber\b/g, 'über'],
  [/Foerder/g, 'Förder'],
  [/foerder/g, 'förder'],
  [/Erstgespraech/g, 'Erstgespräch'],
  [/Gespraech/g, 'Gespräch'],
  [/gespraech/g, 'gespräch'],
  [/Naechst/g, 'Nächst'],
  [/naechst/g, 'nächst'],
  [/Oeff/g, 'Öff'],
  [/oeff/g, 'öff'],
  [/Beschaeftig/g, 'Beschäftig'],
  [/beschaeftig/g, 'beschäftig'],
  [/Beschaeft/g, 'Beschäft'],
  [/beschaeft/g, 'beschäft'],
  [/Loesung/g, 'Lösung'],
  [/loesung/g, 'lösung'],
  [/Loes/g, 'Lös'],
  [/loes/g, 'lös'],
  [/Moecht/g, 'Möcht'],
  [/moecht/g, 'möcht'],
  [/Moechte/g, 'Möchte'],
  [/moechte/g, 'möchte'],
  [/Guenstig/g, 'Günstig'],
  [/guenstig/g, 'günstig'],
  [/Faehig/g, 'Fähig'],
  [/faehig/g, 'fähig'],
  [/Qualitaet/g, 'Qualität'],
  [/qualitaet/g, 'qualität'],
  [/Rueck/g, 'Rück'],
  [/rueck/g, 'rück'],
  [/Verkuerz/g, 'Verkürz'],
  [/verkuerz/g, 'verkürz'],
  [/Kuerz/g, 'Kürz'],
  [/kuerz/g, 'kürz'],
  [/Spaet/g, 'Spät'],
  [/spaet/g, 'spät'],
  [/Aehnlich/g, 'Ähnlich'],
  [/aehnlich/g, 'ähnlich'],
  [/Veraender/g, 'Veränder'],
  [/veraender/g, 'veränder'],
  [/Praegen/g, 'Prägen'],
  [/praegen/g, 'prägen'],
  [/Praeg/g, 'Präg'],
  [/praeg/g, 'präg'],
];

function processFile(fp) {
  const ext = path.extname(fp).toLowerCase();
  if (ext !== '.js' && ext !== '.jsx' && ext !== '.ts' && ext !== '.tsx') return;
  const original = fs.readFileSync(fp, 'utf8');
  let updated = original;
  for (const [re, rep] of rules) {
    updated = updated.replace(re, rep);
  }
  if (updated !== original) {
    fs.writeFileSync(fp, updated, 'utf8');
    console.log('Updated', path.relative(process.cwd(), fp));
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fp);
    } else {
      processFile(fp);
    }
  }
}

for (const t of targets) walk(t);

