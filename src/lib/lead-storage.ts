import fs from 'fs/promises';
import path from 'path';
import type { LeadMagnetInput } from './validation';

export async function storeLeadMagnet(payload: LeadMagnetInput) {
  if (process.env.NODE_ENV !== 'development') return;

  const filePath = path.join(process.cwd(), 'data', 'leadmagnet.json');
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  let existing: LeadMagnetInput[] = [];
  try {
    const file = await fs.readFile(filePath, 'utf-8');
    existing = JSON.parse(file) as LeadMagnetInput[];
  } catch {
    existing = [];
  }

  existing.push(payload);
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2));
}
