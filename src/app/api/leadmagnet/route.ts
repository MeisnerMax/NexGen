import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { leadMagnetSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { sendLeadMagnetEmail, sendLeadMagnetDelivery } from '@/lib/email';
import { storeLeadMagnet } from '@/lib/lead-storage';
import { siteConfig } from '@/lib/site';

export async function POST(request: Request) {
  const requestHeaders = headers();
  const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const rate = rateLimit(`leadmagnet:${ip}`, 8, 60 * 60 * 1000);

  if (!rate.success) {
    return NextResponse.json({ message: 'Zu viele Anfragen.' }, { status: 429 });
  }

  const payload = await request.json();
  const parsed = leadMagnetSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const protocol = requestHeaders.get('x-forwarded-proto') ?? 'http';
  const host = requestHeaders.get('host');
  const origin = requestHeaders.get('origin');
  const baseUrl = origin ?? (host ? `${protocol}://${host}` : siteConfig.url);
  const downloadPath = '/downloads/7-prozesse-kmu.pdf';
  const downloadUrl = new URL(downloadPath, baseUrl).toString();

  await storeLeadMagnet(parsed.data);
  await sendLeadMagnetEmail(parsed.data);
  await sendLeadMagnetDelivery(parsed.data, downloadUrl);

  return NextResponse.json({ ok: true, downloadUrl });
}
