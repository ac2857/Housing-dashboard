
import stats from '@/mocks/stats.json';
import { ProgramStats } from '@/lib/types';

export async function fetchStats(): Promise<ProgramStats> {
  return stats as ProgramStats;
}
