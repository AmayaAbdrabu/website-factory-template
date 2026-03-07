type HeroProps = {
  badge: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  phone: string
  services: { title: string; description: string }[]
}
 
export default function HeroSection({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  phone,
  services
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">{subtitle}</p>
 
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400"
            >
              {primaryCta}
            </a>
            <a
              href={"tel:" + phone}
              className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              {secondaryCta}
            </a>
          </div>
 
          <div className="mt-10 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {service.title}
              </div>
            ))}
          </div>
        </div>
 
        <div className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
          <h3 className="text-2xl font-bold">Quick enquiry</h3>
          <p className="mt-2 text-sm text-slate-600">
            Tell us what you need and our team will get back to you promptly.
          </p>
 
          <form className="mt-6 grid gap-4">
            <input className="rounded-lg border px-4 py-3" placeholder="Full name" />
            <input className="rounded-lg border px-4 py-3" placeholder="Phone number" />
            <input className="rounded-lg border px-4 py-3" placeholder="Email" />
            <textarea
              className="min-h-[120px] rounded-lg border px-4 py-3"
              placeholder="How can we help?"
            />
            <button
              type="button"
              className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
