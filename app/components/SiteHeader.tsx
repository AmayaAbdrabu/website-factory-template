export default function SiteHeader({
  businessName,
  logoUrl,
}: {
  businessName: string
  logoUrl: string
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt={businessName}
            className="h-10 w-10 rounded-xl border bg-white object-cover"
          />
          <span className="text-xl font-bold text-slate-900">{businessName}</span>
        </a>
 
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="/" className="transition hover:text-slate-900">Home</a>
          <a href="/about" className="transition hover:text-slate-900">About</a>
          <a href="/services" className="transition hover:text-slate-900">Services</a>
          <a href="/contact" className="transition hover:text-slate-900">Contact</a>
        </nav>
 
        <a
          href="/contact"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  )
}
