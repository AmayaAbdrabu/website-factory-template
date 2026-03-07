export default function SiteHeader({ businessName }: { businessName: string }) {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold text-slate-900">{businessName}</a>
        <nav className="flex gap-6 text-sm text-slate-600">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/services" className="hover:text-slate-900">Services</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
