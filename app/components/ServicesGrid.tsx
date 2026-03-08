export default function ServicesGrid({
  services,
}: {
  services: { title: string; description: string }[]
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={service.title}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: index % 2 === 0 ? "var(--primary-color)" : "var(--secondary-color)" }}
          >
            <span className="text-lg font-bold">{service.title.charAt(0)}</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-slate-600">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
