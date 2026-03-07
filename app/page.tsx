export default function Home() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Comprehensive check-ups, cleans, fillings, and preventive care to keep your smile healthy year-round.",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and smile enhancements designed to improve confidence with natural-looking results.",
    },
    {
      title: "Emergency Dental Care",
      description:
        "Fast support for tooth pain, chipped teeth, and urgent dental issues when you need care most.",
    },
    {
      title: "Family Dental Care",
      description:
        "Friendly dental services for children, adults, and seniors in a comfortable Perth clinic environment.",
    },
  ];

  const trustPoints = [
    "Experienced Perth dentists focused on gentle, patient-first care",
    "Convenient appointment booking for routine and urgent visits",
    "Modern clinic with a calm, welcoming environment",
    "Personalised treatment plans for long-term oral health",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">
              Trusted Dentist Clinic in Perth
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Modern dental care for healthy, confident smiles
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Book appointments with a friendly Perth dental clinic offering preventive, cosmetic, family, and emergency dental care. We make every visit simple, comfortable, and tailored to your needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
              >
                Book an Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                Gentle, patient-focused care
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                Easy online appointment booking
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                Convenient Perth location
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="rounded-xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Book Your Visit
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Request an appointment
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Schedule a check-up, cosmetic consultation, or emergency visit with our Perth dental team.
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-600"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-600"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-cyan-600"
                />
                <select className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-cyan-600">
                  <option>Select service</option>
                  <option>General Dentistry</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Emergency Dental Care</option>
                  <option>Family Dental Care</option>
                </select>
                <button
                  type="submit"
                  className="w-full rounded-md bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete dental services for every stage of life
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From routine oral health care to urgent treatment and cosmetic improvements, our clinic supports patients across Perth with practical, high-quality dental solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
              >
                Book this service
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Why Choose Us
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Trusted dental care in a calm, professional setting
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We help Perth individuals and families feel confident about visiting the dentist with clear communication, modern treatment options, and a strong focus on comfort.
              </p>
            </div>

            <div className="grid gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white sm:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                Contact & Booking
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to book your next dental appointment?
              </h2>
              <p className="mt-4 text-slate-300">
                Whether you need a routine check-up, cosmetic consultation, or urgent dental support, our Perth clinic is here to help. Get in touch today to secure your preferred time.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl bg-white/5 p-6">
              <div>
                <p className="text-sm font-semibold text-cyan-300">Call Us</p>
                <p className="mt-1 text-lg font-medium">(08) 9000 1234</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-300">Visit Us</p>
                <p className="mt-1 text-lg font-medium">Perth, Western Australia</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-300">Email</p>
                <p className="mt-1 text-lg font-medium">hello@perthdentalclinic.com.au</p>
              </div>
              <a
                href="tel:0890001234"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                Call to Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}