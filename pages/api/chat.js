import OpenAI from "openai";
import axios from "axios";
import * as cheerio from "cheerio";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API-Schlüssel aus der .env-Datei
});

// Funktion zum Abrufen von Website-Inhalten
async function fetchWebsiteContent(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const content = $("body").text(); // Alternativ: $("main").text()
    return content.trim();
  } catch (error) {
    console.error(`Fehler beim Abrufen der Website: ${error.message}`);
    return "Fehler beim Abrufen der Website-Inhalte.";
  }
}

// Funktion zum Extrahieren von Text aus Word-Dokumenten
async function extractTextFromWord(filePath) {
  // Implementiere die Logik, um Text aus einem Word-Dokument zu extrahieren
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  try {
    // Website-Inhalte abrufen
    const websiteContent = await fetchWebsiteContent("https://www.nexgen-consulting.de");

    // Inhalte aus Dokument 1 (direkt eingebaut)
    const document1Text = `
      Leistungsspektrum – Nexgen Consulting
      Professionelle Digitalisierung für kleine und mittelständische Unternehmen – lokal, effizient und individuell.

      Hier finden Sie unser gesamtes Leistungsangebot rund um Website, Social Media, Software, Digitalisierung und mehr.

      🌐 Website-Service
      • Website Basis: 1-seitige Webvisitenkarte inkl. Kontakt & Impressum – 599 €
      • Website Standard: 3–5 Seiten, CMS, Bilder, SEO-Basics – 999 €
      • Website Premium: Online-Terminbuchung, Shop, Wartungspaket – 1.299 €

      🛠️ Wartungs-Service
      • Basis: Hosting, Domain, SSL, Backups, WP-Updates – 25 €/Monat
      • Standard: + Support, kleine Änderungen (z. B. Bilder/Text) – 50 €/Monat
      • Premium: + SEO-Checks, Inhalte, Monitoring – 70 €/Monat

      📱 Social Media
      • Erstellung: Profilaufbau & Einrichtung – 149 €
      • Basis: 4 Grafiken + Texte pro Monat – 99 €/Monat
      • Standard: 8 Posts inkl. Storys, Interaktion, Analyse – 179 €/Monat
      • Premium: 12+ Posts, Community Mgmt, Ads-Beratung – 299 €/Monat

      💡 Software-Beratung
      • Bedarfsermittlung: Gespräch & Analyse – kostenlos
      • Vergleich: Recherche & Bewertung von 2–3 Tools – 249 €
      • Einführung: Einrichtung + Schulung – 399 €

      ⚙️ Automatisierungs-Beratung
      • Konzept: Toolrecherche & Prozessplanung – 249 €
      • Einführung: Einrichtung + Schulung – 399 €

      💶 Fördermittel-Beratung
      • Förder-Check: Analyse & Potenzialbewertung – 75 €
      • Begleitung: Antragstellung & Projektumsetzung – 249 €

      🖥️ Individuelle Softwarelösungen
      • Web-Software: z. B. Verwaltungstools – ab 3.500 €
      • Wartung: Funktionsprüfung & Updates – 75 €/Monat

      📲 App-Entwicklung (iOS & Android)
      • App Basis: z. B. persönliche App – ab 799 €
      • App Standard: Login, Datenbank, dynamisch – 2.999 €
      • App Premium: API, Zahlung, Offline-Modus, GPS – 8.000 €+
    `;

    // Inhalte aus Dokument 2 (falls vorhanden)
    const document2Text = await extractTextFromWord("path/to/document2.docx");

    // Systemnachricht mit allen Inhalten
    const systemMessage = `
      Du bist ein Chatbot für Nexgen Consulting. Nutze die folgenden Informationen, um Fragen zu beantworten:
      Website-Inhalte: ${websiteContent}
      Dokument 1: ${document1Text}
      Dokument 2: ${document2Text}

      Beantworte keine anderen Fragen. Wenn eine Frage nicht relevant ist, antworte mit: 'Entschuldigung, ich kann nur Fragen zu Nexgen Consulting beantworten.'
      Beantworte Nutzerfragen in **maximal 3–5 Sätzen**. Verwende **nur das Nötigste**, antworte präzise und ohne Wiederholungen."

      NNutze folgende Struktur für deine Antworten (immer Markdown-Format):

Wiederhole die Frage nicht.


Antworte in kurzen, gut lesbaren Absätzen.  
Verwende:

- Absätze zwischen Themenbereichen  
- **Fett** für wichtige Begriffe  
- Listen für Aufzählungen  
- Emojis sparsam zur Strukturierung (🛠️, 📱, 💡 etc.)



    `;

    // Anfrage an OpenAI senden
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        ...messages,
      ],
    });

    res.status(200).json({ choices: response.choices });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
}