// pages/api/contact.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Nur POST-Anfragen erlauben
  }

  const { name, email, message, services } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfüllen.' });
  }

  // Beispiel: Logik zum Versenden der Nachricht (hier nur ein console.log)
  console.log(`Neue Nachricht von ${name} (${email}): ${message}`);
  console.log(`Interessierte Services: ${services.join(', ')}`);

  return res.status(200).json({ message: 'Nachricht erhalten' });
}
