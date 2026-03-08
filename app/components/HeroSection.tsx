type HeroProps = {
  badge: string
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
  phone: string
  heroImage: string
}
 
export default function HeroSection({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  phone,
  heroImage,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-slate-950/75" />
 
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
 
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">{subtitle}</p>
 
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg px-5 py-3 font-semibold text-white transition"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              {primaryCta}
            </a>
            <a
              href={"tel:" + phone}
              className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
