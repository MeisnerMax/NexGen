import OpenAI from "openai";
import axios from "axios";
import * as cheerio from "cheerio";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In-Memory-Cache, um Crawling zu drosseln
const siteCache = {
  updatedAt: 0,
  ttlMs: 10 * 60 * 1000, // 10 Minuten
  summary: "",
};

function buildBaseUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  const proto = (req?.headers?.["x-forwarded-proto"] || "https").toString();
  const host = (req?.headers?.host || "www.nexgen-consulting.de").toString();
  return `${proto}://${host}`;
}

async function fetchPageText(url) {
  try {
    const { data } = await axios.get(url, { timeout: 10000 });
    const $ = cheerio.load(data);
    const pick = $("main").text().trim() || $("body").text().trim();
    const title = ($("title").first().text() || "").trim();
    const desc = $('meta[name="description"]').attr("content") || "";
    const text = pick.replace(/\s+/g, " ").slice(0, 3000);
    return { url, title, desc, text };
  } catch (e) {
    return { url, title: "", desc: "", text: "" };
  }
}

async function tryFetchSitemapUrls(base) {
  const candidates = ["/sitemap-0.xml", "/sitemap.xml"]; // häufige Outputs
  for (const path of candidates) {
    try {
      const { data } = await axios.get(base + path, { timeout: 8000 });
      const matches = Array.from(String(data).matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)).map((m) => m[1]);
      if (matches.length) return matches;
    } catch (_) {}
  }
  return [];
}

async function crawlImportantPages(req) {
  const base = buildBaseUrl(req);
  const important = [
    "/",
    "/webdesign-coburg",
    "/online-marketing-coburg",
    "/appentwicklung-coburg",
    "/softwareentwicklung-coburg",
    "/microsoft365-loesungen-coburg",
    "/branding-coburg",
    "/schulungen-coburg",
    "/digitalberatung-coburg",
    "/kontakt",
  ].map((p) => base + p);

  const fromSitemap = (await tryFetchSitemapUrls(base)).filter((u) => u.startsWith(base)).slice(0, 25);
  const uniqueUrls = Array.from(new Set([...important, ...fromSitemap]));
  const pages = await Promise.all(uniqueUrls.map((u) => fetchPageText(u)));
  const fragments = pages
    .filter((p) => p.text)
    .map((p) => `URL: ${p.url}\nTitel: ${p.title}\nBeschreibung: ${p.desc}\nInhalt: ${p.text}`);
  return fragments.join("\n\n---\n\n").slice(0, 12000);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid payload: messages[] required" });
  }

  try {
    // Website-Inhalte sammeln (mit Cache)
    let websiteSummary = siteCache.summary;
    const now = Date.now();
    if (!websiteSummary || now - siteCache.updatedAt > siteCache.ttlMs) {
      websiteSummary = await crawlImportantPages(req);
      siteCache.summary = websiteSummary;
      siteCache.updatedAt = now;
    }

    const systemMessage = `Du bist ein hilfreicher, präziser Chatbot für Nexgen Consulting.\n\nNutze ausschließlich die folgenden aktuellen Website-Inhalte, um Antworten zu geben (kein Halluzinieren):\n${websiteSummary}\n\nRichtlinien:\n- Antworte auf Deutsch, prägnant (max. 3–5 Sätze).\n- Nutze nur Informationen aus dem obigen Kontext; falls nicht vorhanden: antworte "Dazu liegen mir keine verlässlichen Infos vor."\n- Formatiere sparsam in Markdown (Fettdruck für Schlüsselwörter, Listen bei Bedarf).`;

    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemMessage }, ...messages],
      temperature: 0.2,
    });

    res.status(200).json({ choices: response.choices });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({ error: "Failed to fetch response from OpenAI" });
  }
}
