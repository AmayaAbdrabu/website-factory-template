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
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(testimonial.name)}&backgroundColor=dbeafe&textColor=1d4ed8`}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full border"
            />
            <p className="font-semibold text-slate-900">{testimonial.name}</p>
          </div>
          <p className="mt-4 text-slate-600">“{testimonial.text}”</p>
        </div>
      ))}
    </div>
  )
}
