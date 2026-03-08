export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: { name: string; text: string }[]
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              {testimonial.name.charAt(0)}
            </div>
            <p className="font-semibold text-slate-900">{testimonial.name}</p>
          </div>
          <p className="mt-4 text-slate-600">“{testimonial.text}”</p>
        </div>
      ))}
    </div>
  )
}
