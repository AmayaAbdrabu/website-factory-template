export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-slate-600">{subtitle}</p> : null}
    </div>
  )
}
