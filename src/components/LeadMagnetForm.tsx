'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { leadMagnetSchema } from '@/lib/validation';
import { trackingEvents, trackEvent } from '@/lib/tracking';

const initialState = {
  name: '',
  email: '',
  consent: false,
  website: '',
};

type LeadState = typeof initialState;

export default function LeadMagnetForm() {
  const [formState, setFormState] = useState<LeadState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleChange = (field: keyof LeadState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = leadMagnetSchema.safeParse(formState);

    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof LeadState, string>> = {};
      parsed.error.errors.forEach((error) => {
        const key = error.path[0] as keyof LeadState;
        nextErrors[key] = error.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      const response = await fetch('/api/leadmagnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = (await response.json()) as { downloadUrl?: string };
      setDownloadUrl(data.downloadUrl ?? null);
      trackEvent(trackingEvents.leadMagnetSubmit);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
        <p className="text-sm font-semibold text-emerald-800">Danke! Das PDF ist unterwegs.</p>
        <p className="mt-2 text-sm text-emerald-700">
          Wir senden den Leitfaden an Ihre E-Mail-Adresse. Wenn Sie jetzt starten möchten, buchen
          Sie direkt ein Erstgespräch.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          {downloadUrl && (
            <Button
              variant="secondary"
              onClick={() => {
                window.location.href = downloadUrl;
              }}
            >
              PDF jetzt herunterladen
            </Button>
          )}
          <Button onClick={() => (window.location.href = '/termin')}>Termin sichern</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
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
        <p className="text-sm text-red-500">Bitte versuchen Sie es gleich noch einmal.</p>
      )}
      <Button type="submit" disabled={status === 'sending'}>
        PDF erhalten
      </Button>
    </form>
  );
}
