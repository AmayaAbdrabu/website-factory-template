type ContactFormProps = {
  title: string
  subtitle: string
  phone: string
  email: string
}

export default function ContactForm({
  title,
  subtitle,
  phone,
  email,
}: ContactFormProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600">{subtitle}</p>

        <form className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border px-4 py-3" placeholder="Full name" />
            <input className="rounded-lg border px-4 py-3" placeholder="Phone number" />
          </div>
          <input className="rounded-lg border px-4 py-3" placeholder="Email" />
          <input className="rounded-lg border px-4 py-3" placeholder="Service needed" />
          <textarea
            className="min-h-[140px] rounded-lg border px-4 py-3"
            placeholder="Tell us how we can help"
          />
          <button
            type="button"
            className="rounded-lg px-5 py-3 font-semibold text-white transition"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Submit enquiry
          </button>
        </form>
      </div>

      <div
        className="rounded-2xl p-8"
        style={{ backgroundColor: "var(--surface-color)" }}
      >
        <h3 className="text-2xl font-bold text-slate-900">Contact details</h3>
        <div className="mt-6 space-y-4 text-slate-700">
          <p>
            <span className="font-semibold">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  )
}
