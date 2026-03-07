export default function TrustGrid({ points }: { points: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {points.map((point) => (
        <div key={point} className="rounded-2xl border bg-slate-50 p-5 text-slate-700">
          <p className="font-medium">{point}</p>
        </div>
      ))}
    </div>
  )
}
