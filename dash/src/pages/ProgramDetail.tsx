
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Program } from '@/lib/types';
import { fetchPrograms } from '@/features/programs/api';

export default function ProgramDetail(){
  const { id } = useParams();
  const [program,setProgram]=useState<Program|undefined>();
  useEffect(()=>{ fetchPrograms().then(all => setProgram(all.find(p=>p.id===id))); },[id]);
  if(!program) return <p role="status">Loading…</p>;
  return (
    <article aria-labelledby="title" className="max-w-3xl">
      <Link className="underline text-sm" to="/programs">← Back to Programs</Link>
      <h1 id="title" className="text-2xl font-semibold mt-2">{program.name}</h1>
      <p className="text-gray-700">{program.city}, {program.county}</p>

      <section className="mt-4">
        <h2 className="text-xl font-medium">Eligibility</h2>
        <p className="mt-1">{program.eligibility}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-medium">How to Apply</h2>
        <p className="mt-1">{program.howToApply}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-medium">Contact</h2>
        <ul className="list-disc pl-6">
          {program.address && <li>{program.address}</li>}
          {program.phone && <li><a className="underline" href={`tel:${program.phone}`}>{program.phone}</a></li>}
          {program.website && <li><a className="underline" href={program.website}>Website</a></li>}
          <li>Languages: {program.languages?.join(', ') || 'English'}</li>
        </ul>
      </section>

      <p className="mt-4 text-sm text-gray-600">Last updated: {new Date(program.lastUpdated).toLocaleDateString()}</p>
    </article>
  );
}
