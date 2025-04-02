// pages/api/newsletter.js – Newsletter anmelden/abmelden
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const subFile = path.join(dataDir, 'subscribers.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Bitte eine gültige E-Mail-Adresse angeben.' });
    }
    let subs = [];
    if (fs.existsSync(subFile)) {
      subs = JSON.parse(fs.readFileSync(subFile, 'utf-8'));
    } else {
      // Falls data/ noch nicht existiert (beim ersten Aufruf)
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
    }
    if (subs.find(sub => sub.email === email)) {
      return res.status(409).json({ error: 'Diese E-Mail ist bereits angemeldet.' });
    }
    const newSub = { email, date: new Date().toISOString() };
    subs.push(newSub);
    fs.writeFileSync(subFile, JSON.stringify(subs, null, 2));
    return res.status(201).json({ message: 'Erfolgreich zum Newsletter angemeldet.' });
  } 
  else if (req.method === 'DELETE') {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: 'E-Mail erforderlich.' });
    }
    if (!fs.existsSync(subFile)) {
      return res.status(404).json({ error: 'Keine Abonnentenliste vorhanden.' });
    }
    let subs = JSON.parse(fs.readFileSync(subFile, 'utf-8'));
    subs = subs.filter(sub => sub.email !== email);
    fs.writeFileSync(subFile, JSON.stringify(subs, null, 2));
    return res.status(200).json({ message: 'Abonnent entfernt.' });
  } 
  else {
    return res.status(405).end();
  }
}
