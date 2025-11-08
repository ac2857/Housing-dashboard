
import { useEffect, useState } from 'react';
import { fetchStats } from '@/features/stats/api';
import { ProgramStats } from '@/lib/types';
import KPI from '@/components/charts/KPI';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function Home(){
  const [stats, setStats] = useState<ProgramStats | null>(null);
  useEffect(()=>{ fetchStats().then(setStats); },[]);
  if(!stats) return <p role="status">Loading statistics…</p>;

  const cat = Object.entries(stats.byCategory).map(([k,v])=>({ category:k, count:v }));

  return (
    <section aria-labelledby="overview">
      <h1 id="overview" className="text-2xl font-semibold mb-4">Housing Assistance Overview</h1>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <KPI label="Total programs" value={stats.totalPrograms} />
        <KPI label="Counties covered" value={Object.keys(stats.byCounty).length} />
        <KPI label="Last updated" value={new Date(stats.updatedAt).toLocaleDateString()} />
      </div>
      <article aria-labelledby="by-category">
        <h2 id="by-category" className="text-xl font-medium mb-2">Programs by Category</h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={cat}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
}
