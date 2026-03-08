export default function ImageSection({
  title,
  subtitle,
  imageUrl,
  reverse = false,
}: {
  title: string
  subtitle: string
  imageUrl: string
  reverse?: boolean
}) {
  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      </div>
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="h-[360px] w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </div>
  )
}
