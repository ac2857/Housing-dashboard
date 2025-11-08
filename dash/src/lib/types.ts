
export type ProgramCategory = 'eviction' | 'affordable_housing' | 'veterans' | 'homelessness';

export interface Program {
  id: string;
  name: string;
  category: ProgramCategory;
  county: string;
  city: string;
  address?: string;
  phone?: string;
  website?: string;
  eligibility: string;
  howToApply: string;
  languages: string[];
  lastUpdated: string;
}

export interface ProgramStats {
  totalPrograms: number;
  byCategory: Record<ProgramCategory, number>;
  byCounty: Record<string, number>;
  updatedAt: string;
}
