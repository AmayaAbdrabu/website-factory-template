export default function ServicesGrid({
  services
}: {
  services: { title: string; description: string }[]
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <div key={service.title} className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-3 text-slate-600">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
