
import programs from '@/mocks/programs.json';
import { Program } from '@/lib/types';

export async function fetchPrograms(query?: { q?: string; county?: string; category?: string }): Promise<Program[]> {
  const all = programs as Program[];
  return all.filter(p =>
    (!query?.q || (p.name + p.eligibility + p.city).toLowerCase().includes(query.q!.toLowerCase())) &&
    (!query?.county || p.county === query.county) &&
    (!query?.category || p.category === (query.category as any))
  );
}
