export default function SiteHeader({
  businessName,
  logoText,
}: {
  businessName: string
  logoText: string
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            {logoText}
          </div>
          <span className="text-xl font-bold text-slate-900">{businessName}</span>
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="/" className="transition hover:text-slate-900">Home</a>
          <a href="/about" className="transition hover:text-slate-900">About</a>
          <a href="/services" className="transition hover:text-slate-900">Services</a>
          <a href="/faq" className="transition hover:text-slate-900">FAQ</a>
          <a href="/contact" className="transition hover:text-slate-900">Contact</a>
        </nav>

        <details className="md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border px-3 py-2 text-sm font-medium text-slate-700">
            Menu
          </summary>
          <div className="absolute right-6 mt-3 flex w-52 flex-col rounded-xl border bg-white p-3 shadow-xl">
            <a href="/" className="rounded-lg px-3 py-2 hover:bg-slate-50">Home</a>
            <a href="/about" className="rounded-lg px-3 py-2 hover:bg-slate-50">About</a>
            <a href="/services" className="rounded-lg px-3 py-2 hover:bg-slate-50">Services</a>
            <a href="/faq" className="rounded-lg px-3 py-2 hover:bg-slate-50">FAQ</a>
            <a href="/contact" className="rounded-lg px-3 py-2 hover:bg-slate-50">Contact</a>
          </div>
        </details>
      </div>
    </header>
  )
}
