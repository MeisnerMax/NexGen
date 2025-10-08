/* Replace common ae/oe/ue transliterations with German umlauts in posts/*.md.
   Cautious, targeted replacements for typical words to avoid harming English terms. */
const fs = require('fs');
const path = require('path');

const postsDir = path.join(process.cwd(), 'posts');

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
  [/Praxisleitfaeden/g, 'Praxisleitfäden'],
  [/praxisleitfaeden/g, 'praxisleitfäden'],
  [/Erhoehen/g, 'Erhöhen'],
  [/erhoehen/g, 'erhöhen'],
  [/Qualitaet/g, 'Qualität'],
  [/qualitaet/g, 'qualität'],
  [/Uebergab/g, 'Übergab'],
  [/uebergab/g, 'übergab'],
  [/Aufwaend/g, 'Aufwänd'],
  [/aufwaend/g, 'aufwänd'],
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

function processFile(fullPath) {
  const original = fs.readFileSync(fullPath, 'utf8');
  let updated = original;
  for (const [re, rep] of rules) {
    updated = updated.replace(re, rep);
  }
  if (updated !== original) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    // eslint-disable-next-line no-console
    console.log('Updated', path.basename(fullPath));
  }
}

function main() {
  if (!fs.existsSync(postsDir)) return;
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
  files.forEach((f) => processFile(path.join(postsDir, f)));
}

main();

