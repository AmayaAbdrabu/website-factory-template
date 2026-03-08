export default function SiteFooter({
  businessName,
  phone,
  email,
  logoUrl,
}: {
  businessName: string
  phone: string
  email: string
  logoUrl: string
}) {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt={businessName}
              className="h-10 w-10 rounded-xl border bg-white object-cover"
            />
            <h3 className="text-lg font-semibold text-slate-900">{businessName}</h3>
          </div>
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
