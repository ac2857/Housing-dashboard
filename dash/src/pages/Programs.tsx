
import { useEffect, useMemo, useState } from 'react';
import { fetchPrograms } from '@/features/programs/api';
import { Program } from '@/lib/types';
import { Link } from 'react-router-dom';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

export default function Programs(){
  const [q,setQ]=useState('');
  const [county,setCounty]=useState('');
  const [category,setCategory]=useState('');
  const [data,setData]=useState<Program[]>([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{ (async ()=>{
    setLoading(true);
    setData(await fetchPrograms({q,county,category}));
    setLoading(false);
  })(); },[q,county,category]);

  const counties = useMemo(()=>Array.from(new Set(data.map(d=>d.county))).sort(),[data]);

  return (
    <section aria-labelledby="programs">
      <h1 id="programs" className="text-2xl font-semibold mb-4">Find Housing Programs</h1>

      <form className="grid sm:grid-cols-3 gap-3 mb-4" role="search" aria-label="Program search">
        <label className="flex flex-col gap-1">
          <span className="text-sm">Keyword</span>
          <Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name, city, eligibility" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">County</span>
          <Select value={county} onChange={e=>setCounty(e.target.value)}>
            <option value="">All</option>
            {counties.map(c=><option key={c} value={c}>{c}</option>)}
          </Select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Category</span>
          <Select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="eviction">Eviction Prevention</option>
            <option value="affordable_housing">Affordable Housing</option>
            <option value="veterans">Veterans</option>
            <option value="homelessness">Homelessness</option>
          </Select>
        </label>
      </form>

      {loading ? <p role="status">Loading…</p> : (
        <ul className="grid gap-3" aria-live="polite">
          {data.map(p=>
            <li key={p.id} className="border rounded p-3">
              <h2 className="text-lg font-medium">
                <Link to={`/programs/${p.id}`} className="underline">{p.name}</Link>
              </h2>
              <p className="text-sm text-gray-700">{p.city}, {p.county}</p>
              <p className="mt-1">{p.eligibility}</p>
              <div className="mt-2 text-sm">
                <span className="rounded bg-gray-100 px-2 py-1">{p.category}</span>
                {p.languages?.length ? <span className="ml-2">Languages: {p.languages.join(', ')}</span> : null}
              </div>
            </li>
          )}
          {!data.length && <p>No programs found.</p>}
        </ul>
      )}
    </section>
  );
}
