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
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    })
  : null;

export class MailNotConfiguredError extends Error {
  code = 'NOT_CONFIGURED';
}

/** Kurzbeschreibung eines SMTP-Fehlers ohne Zugangsdaten (für Logs und Fehlersuche). */
export function describeMailError(error: unknown) {
  const e = error as { code?: string; responseCode?: number; command?: string; message?: string };
  const text = String(e?.message ?? error);
  return {
    code: e?.code ?? 'UNKNOWN',
    // erweiterter SMTP-Status (z. B. 5.7.8 = Gmail-Login abgelehnt, 5.7.139 = SMTP AUTH bei Microsoft 365 deaktiviert)
    status: text.match(/\b[245]\.\d{1,3}\.\d{1,3}\b/)?.[0],
    responseCode: e?.responseCode,
    command: e?.command,
    message: String(e?.message ?? error).slice(0, 300),
  };
}

export async function sendContactEmail(payload: ContactInput) {
  if (!transporter || !mailFrom || !mailTo) {
    if (process.env.NODE_ENV === 'development') {
      console.info('Kontaktformular (dev):', payload);
      return;
    }
    // In Produktion darf eine Anfrage nie still verloren gehen.
    throw new MailNotConfiguredError('SMTP ist nicht vollständig konfiguriert.');
  }

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: payload.email,
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
    subject: 'Neuer Lead Magnet Download',
    text: [
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
      'Guten Tag,',
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
