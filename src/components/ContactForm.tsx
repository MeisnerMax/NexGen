'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { contactSchema } from '@/lib/validation';
import { trackingEvents, trackEvent } from '@/lib/tracking';
import { siteConfig } from '@/lib/site';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  consent: false,
  website: '',
};

type ContactState = typeof initialState;

export default function ContactForm() {
  const [formState, setFormState] = useState<ContactState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [errorCode, setErrorCode] = useState('');
  const router = useRouter();

  const handleChange = (field: keyof ContactState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formState);

    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ContactState, string>> = {};
      parsed.error.errors.forEach((error) => {
        const key = error.path[0] as keyof ContactState;
        nextErrors[key] = error.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setErrorCode('');
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { code?: string; message?: string };
        setErrorCode(response.status === 429 ? 'zu viele Anfragen' : data.code || String(response.status));
        throw new Error('Request failed');
      }

      trackEvent(trackingEvents.contactSubmit);
      router.push('/danke');
    } catch {
      setErrorCode((current) => current || 'Netzwerk');
      setStatus('error');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
            value={formState.name}
            onChange={(event) => handleChange('name', event.target.value)}
            required
          />
          {errors.name && <span className="mt-1 block text-xs text-red-500">{errors.name}</span>}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Firma
          <input
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
            value={formState.company}
            onChange={(event) => handleChange('company', event.target.value)}
            required
          />
          {errors.company && (
            <span className="mt-1 block text-xs text-red-500">{errors.company}</span>
          )}
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          E-Mail
          <input
            type="email"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
            value={formState.email}
            onChange={(event) => handleChange('email', event.target.value)}
            required
          />
          {errors.email && <span className="mt-1 block text-xs text-red-500">{errors.email}</span>}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Telefon (optional)
          <input
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
            value={formState.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
          />
        </label>
      </div>
      <label className="text-sm font-medium text-slate-700">
        Anliegen
        <select
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
          value={formState.topic}
          onChange={(event) => handleChange('topic', event.target.value)}
          required
        >
          <option value="">Bitte auswählen</option>
          <option value="Prozessautomatisierung">Prozessautomatisierung</option>
          <option value="Software & Tools">Digitale Tools & Software</option>
          <option value="Website & SEO">Website & SEO</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
        {errors.topic && <span className="mt-1 block text-xs text-red-500">{errors.topic}</span>}
      </label>
      <label className="text-sm font-medium text-slate-700">
        Nachricht
        <textarea
          className="mt-2 min-h-[140px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
          value={formState.message}
          onChange={(event) => handleChange('message', event.target.value)}
          required
        />
        {errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message}</span>}
      </label>
      <label className="flex items-start gap-3 text-xs text-slate-600">
        <input
          type="checkbox"
          className="mt-1"
          checked={formState.consent}
          onChange={(event) => handleChange('consent', event.target.checked)}
          required
        />
        <span>
          Ich stimme der Verarbeitung meiner Angaben gemäß der Datenschutzerklärung zu.
        </span>
      </label>
      {errors.consent && (
        <span className="block text-xs text-red-500">{errors.consent}</span>
      )}
      <label className="hidden">
        Website
        <input
          value={formState.website}
          onChange={(event) => handleChange('website', event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      {status === 'error' && (
        <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <p>
            Die Anfrage konnte gerade nicht automatisch versendet werden{errorCode ? ` (${errorCode})` : ''}. Ihre Angaben gehen nicht verloren:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="rounded-full bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Anfrage von ${formState.name}${formState.company ? ` (${formState.company})` : ''}`)}&body=${encodeURIComponent([`Anliegen: ${formState.topic}`, `Telefon: ${formState.phone || '-'}`, '', formState.message].join('\n'))}`}
            >
              Per E-Mail senden
            </a>
            <a className="rounded-full border border-red-300 px-4 py-2 font-medium hover:bg-red-100" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>
              Anrufen: {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
      <Button type="submit" disabled={status === 'sending'}>
        Anfrage senden
      </Button>
    </form>
  );
}
