export default function SiteFooter({
  businessName,
  phone,
  email,
}: {
  businessName: string
  phone: string
  email: string
}) {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{businessName}</h3>
          <p className="mt-3 text-sm text-slate-600">
            Professional local service with a focus on trust, quality, and strong customer experience.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Pages</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
