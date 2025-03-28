// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Nur POST-Anfragen erlauben
  }

  const { name, email, message, services } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfüllen.' });
  }

  // Konfiguriere den Nodemailer-Transporter mit direkten Werten
  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // SMTP-Host
    port: 587, // Port für STARTTLS
    secure: false, // Verwende STARTTLS
    auth: {
      user: 'admin@nexgen-consulting.de', // Deine E-Mail-Adresse
      pass: 'JackyCola1!', // Dein E-Mail-Passwort
    },
    tls: {
      rejectUnauthorized: false, // Akzeptiere selbstsignierte Zertifikate (falls nötig)
    },
  });

  try {
    // Teste die Verbindung
    await transporter.verify();
    console.log('SMTP-Verbindung erfolgreich!');

    // Sende die E-Mail
    await transporter.sendMail({
      from: 'admin@nexgen-consulting.de', // Absender (deine E-Mail-Adresse)
      to: 'admin@nexgen-consulting.de', // Zieladresse
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nNachricht: ${message}\nInteressierte Services: ${services?.join(', ') || 'Keine'}`,
    });

    return res.status(200).json({ message: 'E-Mail erfolgreich gesendet!' });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return res.status(500).json({ error: 'Fehler beim Senden der E-Mail.' });
  }
}

