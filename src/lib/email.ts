import nodemailer from 'nodemailer';
import type { ContactInput, LeadMagnetInput } from './validation';

const hasSmtp =
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS;

const mailFrom = process.env.MAIL_FROM ?? process.env.SMTP_USER ?? '';
const mailTo = process.env.MAIL_TO ?? process.env.SMTP_USER ?? '';

const transporter = hasSmtp
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

export async function sendContactEmail(payload: ContactInput) {
  if (!transporter || !mailFrom || !mailTo) {
    if (process.env.NODE_ENV === 'development') {
      console.info('Kontaktformular (dev):', payload);
    }
    return;
  }

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `Neue Kontaktanfrage von ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Firma: ${payload.company}`,
      `E-Mail: ${payload.email}`,
      `Telefon: ${payload.phone || '-'}`,
      `Anliegen: ${payload.topic}`,
      '',
      payload.message,
    ].join('\n'),
  });
}

export async function sendLeadMagnetEmail(payload: LeadMagnetInput) {
  if (!transporter || !mailFrom || !mailTo) {
    if (process.env.NODE_ENV === 'development') {
      console.info('Lead Magnet (dev):', payload);
    }
    return;
  }

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: `Neuer Lead Magnet Download von ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `E-Mail: ${payload.email}`,
      'Lead Magnet: 7 Prozesse, die jedes KMU automatisieren sollte',
    ].join('\n'),
  });
}

export async function sendLeadMagnetDelivery(payload: LeadMagnetInput, downloadUrl: string) {
  if (!transporter || !mailFrom) {
    if (process.env.NODE_ENV === 'development') {
      console.info('Lead Magnet Versand (dev):', { ...payload, downloadUrl });
    }
    return;
  }

  await transporter.sendMail({
    from: mailFrom,
    to: payload.email,
    subject: 'Ihr PDF: 7 Prozesse, die jedes KMU automatisieren sollte',
    text: [
      `Hallo ${payload.name},`,
      '',
      'vielen Dank für Ihr Interesse. Hier ist der Download-Link:',
      downloadUrl,
      '',
      'Wenn Sie Fragen haben oder direkt starten möchten, antworten Sie einfach auf diese E-Mail.',
      '',
      'Viele Grüße',
      'NexGen Consulting',
    ].join('\n'),
  });
}
