import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Bitte den Namen angeben.'),
  company: z.string().min(2, 'Bitte die Firma angeben.'),
  email: z.string().email('Bitte eine gültige E-Mail angeben.'),
  phone: z.string().optional().or(z.literal('')),
  topic: z.string().min(2, 'Bitte ein Anliegen auswählen.'),
  message: z.string().min(10, 'Bitte eine kurze Nachricht verfassen.'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Bitte der Datenschutzerklärung zustimmen.' }),
  }),
  website: z.string().optional(),
});

export const leadMagnetSchema = z.object({
  name: z.string().min(2, 'Bitte den Namen angeben.'),
  email: z.string().email('Bitte eine gültige E-Mail angeben.'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Bitte der Datenschutzerklärung zustimmen.' }),
  }),
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type LeadMagnetInput = z.infer<typeof leadMagnetSchema>;
