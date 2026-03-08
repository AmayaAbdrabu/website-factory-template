export default function TrustGrid({ points }: { points: readonly string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {points.map((point, index) => (
        <div
          key={point}
          className="rounded-2xl p-5 text-slate-700"
          style={{
            backgroundColor: index % 2 === 0 ? "var(--muted-color)" : "var(--surface-color)"
          }}
        >
          <p className="font-medium">{point}</p>
        </div>
      ))}
    </div>
  )
}
