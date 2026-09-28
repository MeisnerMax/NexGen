import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { contactSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { describeMailError, sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const rate = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);

  if (!rate.success) {
    return NextResponse.json({ message: 'Zu viele Anfragen.' }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (error) {
    const details = describeMailError(error);
    console.error('Kontaktformular: Versand fehlgeschlagen', details);
    return NextResponse.json(
      { message: 'Die Anfrage konnte nicht versendet werden.', code: details.status ? `${details.code} ${details.status}` : details.code, responseCode: details.responseCode },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
