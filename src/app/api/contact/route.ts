import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { contactSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const rate = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);

  if (!rate.success) {
    return NextResponse.json({ message: 'Zu viele Anfragen.' }, { status: 429 });
  }

  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  await sendContactEmail(parsed.data);

  return NextResponse.json({ ok: true });
}
