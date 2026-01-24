const fs = require('fs');
const path = require('path');

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 60;
const MAX_WIDTH = PAGE_WIDTH - MARGIN * 2;

function escapePdfText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(text, fontSize) {
  const approxCharWidth = fontSize * 0.52;
  const maxChars = Math.max(40, Math.floor(MAX_WIDTH / approxCharWidth));
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';

  for (const word of words) {
    const next = line ? line + ' ' + word : word;
    if (next.length > maxChars) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }

  if (line) lines.push(line);
  return lines;
}

const lines = [];

function addSpacer(height) {
  lines.push({ text: '', size: 11, lineHeight: height });
}

function addWrapped(text, size, lineHeight, spacingAfter) {
  const wrapped = wrapText(text, size);
  wrapped.forEach((lineText) => lines.push({ text: lineText, size, lineHeight }));
  if (spacingAfter) addSpacer(spacingAfter);
}

function addTitle(text) {
  addWrapped(text, 20, 26, 12);
}

function addSubtitle(text) {
  addWrapped(text, 12, 16, 14);
}

function addHeading(text) {
  addWrapped(text, 14, 20, 6);
}

function addParagraph(text) {
  addWrapped(text, 11, 16, 8);
}

function addList(items) {
  items.forEach((item) => {
    const wrapped = wrapText(item, 11);
    wrapped.forEach((lineText, index) => {
      const prefix = index === 0 ? '- ' : '  ';
      lines.push({ text: prefix + lineText, size: 11, lineHeight: 16 });
    });
  });
  addSpacer(8);
}

addTitle('7 Prozesse, die jedes KMU automatisieren sollte');
addSubtitle('Leitfaden für schnelle Entlastung und klare Abläufe');

addParagraph(
  'Dieser Leitfaden zeigt Prozesse, die in vielen KMU Zeit kosten und Fehler verursachen. Ziel ist nicht Technik um der Technik willen, sondern weniger manuelle Schritte, klare Übergaben und saubere Daten.',
);

addHeading('So nutzen Sie den Leitfaden');
addList([
  'Starten Sie mit dem größten Engpass und nicht mit dem spannendsten Tool.',
  'Skizzieren Sie den Zielprozess: Wer macht was, wann und mit welchen Daten.',
  'Prüfen Sie Schnittstellen: Wo müssen Daten heute doppelt eingegeben werden?',
  'Setzen Sie zuerst eine kleine Automatisierung um und bauen dann aus.',
]);

addHeading('Die 7 Prozesse');

addParagraph('1) Angebot bis Rechnung');
addList([
  'Problem: Angebote liegen in Excel, die Übergabe an Auftrag und Rechnung kostet Zeit.',
  'Automatisierung: Angebotsvorlage -> Auftrag -> Rechnungsentwurf mit klaren Statusfeldern.',
  'Wirkung: Weniger Rückfragen und schnellere Abrechnung.',
]);

addParagraph('2) Kundenanfragen und Terminierung');
addList([
  'Problem: Anfragen landen in Postfächern und bleiben liegen.',
  'Automatisierung: Formular -> CRM -> automatische Rückmeldung -> Terminlink.',
  'Wirkung: Schnellere Reaktion und bessere Qualifizierung.',
]);

addParagraph('3) Projektstatus und Übergaben');
addList([
  'Problem: Projektwissen steckt in E-Mails und Einzelpersonen.',
  'Automatisierung: Checklisten, Statusupdates und klare Verantwortliche in Teams oder Planner.',
  'Wirkung: Weniger Nachfragen und stabile Abläufe.',
]);

addParagraph('4) Einkauf und Freigaben');
addList([
  'Problem: Bestellungen werden per E-Mail freigegeben und sind schwer nachzuverfolgen.',
  'Automatisierung: Freigabe-Workflow mit Status und Budgetgrenzen.',
  'Wirkung: Transparenz, weniger Reibung und klare Verantwortlichkeiten.',
]);

addParagraph('5) Zeiterfassung und Nachkalkulation');
addList([
  'Problem: Zeiten fehlen oder sind nicht auswertbar.',
  'Automatisierung: Digitale Erfassung -> Projektkosten -> automatischer Report.',
  'Wirkung: Bessere Steuerung und saubere Nachkalkulation.',
]);

addParagraph('6) HR Onboarding und Offboarding');
addList([
  'Problem: Aufgaben werden vergessen, Zugriffe sind uneinheitlich.',
  'Automatisierung: Checklisten, Rollenrechte und automatische Zuweisungen.',
  'Wirkung: Schneller Start und weniger Sicherheitsrisiko.',
]);

addParagraph('7) Reporting und Management-Dashboard');
addList([
  'Problem: Zahlen werden manuell zusammengestellt und sind veraltet.',
  'Automatisierung: Daten aus CRM, ERP oder Projekttool in ein klares Dashboard.',
  'Wirkung: Schnellere Entscheidungen und ein gemeinsames Zahlenbild.',
]);

addHeading('Priorisierung in 4 Schritten');
addList([
  'Wirkung: Wie viel Zeit oder Risiko wird reduziert?',
  'Volumen: Wie häufig läuft der Prozess pro Woche?',
  'Datenlage: Sind die benötigten Daten bereits vorhanden?',
  'Pilot: Starten Sie mit einem Prozess, der schnell testbar ist.',
]);

addHeading('Checkliste für den Start');
addList([
  'Prozessverantwortliche benennen',
  'Ziel und Erfolgskriterium definieren',
  'Datenquellen und Schnittstellen erfassen',
  'Datenschutz und Zugriffe klären',
  'Team früh einbinden und testen',
]);

addHeading('Nächster Schritt');
addParagraph(
  'Wenn Sie wissen möchten, welcher Prozess bei Ihnen den größten Hebel hat, buchen Sie eine kostenlose Prozessanalyse. Wir liefern eine klare Roadmap und zeigen den schnellsten Einstieg.',
);
addParagraph('Kontakt: meisner@nexgen-consulting.de | +49 15259089485');
addParagraph('Termin: https://app.cal.eu/max-meisner-3p3wma');

const pages = [];
let currentLines = [];
let currentHeight = PAGE_HEIGHT - MARGIN;

for (const line of lines) {
  if (currentHeight - line.lineHeight < MARGIN) {
    pages.push(currentLines);
    currentLines = [];
    currentHeight = PAGE_HEIGHT - MARGIN;
  }
  currentLines.push(line);
  currentHeight -= line.lineHeight;
}
if (currentLines.length) pages.push(currentLines);

function buildContentStream(pageLines) {
  let stream = 'BT\n';
  let currentFont = 11;
  stream += '/F1 ' + currentFont + ' Tf\n';
  stream += MARGIN + ' ' + (PAGE_HEIGHT - MARGIN) + ' Td\n';

  pageLines.forEach((line, index) => {
    if (line.size !== currentFont) {
      currentFont = line.size;
      stream += '/F1 ' + currentFont + ' Tf\n';
    }
    if (line.text) {
      stream += '(' + escapePdfText(line.text) + ') Tj\n';
    }
    if (index < pageLines.length - 1) {
      stream += '0 -' + line.lineHeight + ' Td\n';
    }
  });

  stream += 'ET\n';
  return stream;
}

const objects = [];
objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

const pageKids = pages.map((_, index) => String(index + 3) + ' 0 R').join(' ');
objects.push(
  '2 0 obj\n<< /Type /Pages /Kids [' +
    pageKids +
    '] /Count ' +
    pages.length +
    ' >>\nendobj\n',
);

pages.forEach((pageLines, index) => {
  const contentStream = buildContentStream(pageLines);
  const contentLength = Buffer.byteLength(contentStream, 'latin1');
  const contentObjectId = pages.length + 3 + index;
  const pageObjectId = index + 3;
  const fontObjectId = pages.length + 3 + pages.length;

  objects.push(
    pageObjectId +
      ' 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' +
      PAGE_WIDTH +
      ' ' +
      PAGE_HEIGHT +
      '] /Contents ' +
      contentObjectId +
      ' 0 R /Resources << /Font << /F1 ' +
      fontObjectId +
      ' 0 R >> >> >>\nendobj\n',
  );
  objects.push(
    contentObjectId +
      ' 0 obj\n<< /Length ' +
      contentLength +
      ' >>\nstream\n' +
      contentStream +
      '\nendstream\nendobj\n',
  );
});

const fontObjectId = pages.length + 3 + pages.length;
objects.push(
  fontObjectId + ' 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
);

let pdf = '%PDF-1.4\n';
const offsets = [0];
let offset = Buffer.byteLength(pdf, 'latin1');

for (const obj of objects) {
  offsets.push(offset);
  pdf += obj;
  offset += Buffer.byteLength(obj, 'latin1');
}

const xrefOffset = offset;
pdf += 'xref\n';
pdf += '0 ' + (objects.length + 1) + '\n';
pdf += '0000000000 65535 f \n';
for (let i = 1; i < offsets.length; i += 1) {
  const entry = String(offsets[i]).padStart(10, '0');
  pdf += entry + ' 00000 n \n';
}
pdf += 'trailer\n';
pdf += '<< /Size ' + (objects.length + 1) + ' /Root 1 0 R >>\n';
pdf += 'startxref\n';
pdf += xrefOffset + '\n';
pdf += '%%EOF\n';

const outputPath = path.join(process.cwd(), 'public', 'downloads', '7-prozesse-kmu.pdf');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, pdf, 'latin1');
console.log('PDF written: ' + outputPath);
