
export default function KPI({label, value}:{label:string; value:number|string}){
  return (
    <div className="rounded-lg border p-4" role="group" aria-label={label}>
      <div className="text-sm text-gray-600">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
