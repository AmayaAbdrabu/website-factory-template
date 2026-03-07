export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Trusted Family Dentist in Perth
            </span>
            <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Gentle, modern dental care for the whole family
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              From routine check-ups to urgent dental emergencies, our Perth clinic
              provides friendly care in a calm, family-focused environment. Book
              your visit today and keep every smile healthy.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Book an Appointment
              </a>
              <a
                href="#emergency"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Emergency Dental Care
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <span className="block text-2xl font-bold text-slate-900">6 Days</span>
                Open for appointments
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">Same Day</span>
                Emergency slots available
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">Family</span>
                Friendly dental team
              </div>
            </div>
          </div>

          <div
            id="booking"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">Book your visit</h2>
              <p className="mt-2 text-sm text-slate-600">
                Request an appointment and our Perth team will confirm your booking.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="04xx xxx xxx"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Treatment needed
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>General Check-Up</option>
                    <option>Children&apos;s Dentistry</option>
                    <option>Teeth Cleaning</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Emergency Appointment</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Notes
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dental needs or preferred appointment time"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Request Booking
              </button>

              <p className="text-xs text-slate-500">
                By submitting this form, you agree to be contacted about your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 text-sm text-slate-700 md:grid-cols-3 md:px-8">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-900">Convenient Perth Location</p>
            <p className="mt-1 text-slate-600">
              Easy access, welcoming clinic, and flexible appointment times.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-900">Emergency Dental Support</p>
            <p className="mt-1 text-slate-600">
              Fast help for tooth pain, chipped teeth, and urgent dental concerns.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-900">Family-Friendly Care</p>
            <p className="mt-1 text-slate-600">
              Gentle treatments for children, teens, adults, and seniors.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-sky-600">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Complete dental services designed around your family
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine modern treatment options with a caring approach, helping
            patients of all ages feel comfortable and confident.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">General Dentistry</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Regular check-ups, cleans, fillings, and preventive care to protect
              long-term oral health.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Children&apos;s Dentistry</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Gentle dental care for kids in a warm environment that helps build
              healthy habits early.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Cosmetic Treatments</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Whitening, smile improvements, and tailored cosmetic options to boost
              confidence.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Emergency Dental</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Urgent appointments for dental pain, broken teeth, swelling, and other
              unexpected issues.
            </p>
          </div>
        </div>
      </section>

      <section id="emergency" className="bg-rose-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
              Emergency Dental Care
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Need urgent dental help in Perth?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              If you&apos;re experiencing severe toothache, a broken tooth, swelling,
              or a dental injury, contact us as soon as possible. We aim to provide
              same-day emergency appointments whenever available.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Same-day appointments for urgent cases</li>
              <li>• Fast assessment and pain relief options</li>
              <li>• Support for adults and children</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Emergency contact</h3>
            <p className="mt-3 text-slate-600">
              Call our clinic right away for urgent assistance and appointment availability.
            </p>
            <a
              href="tel:+61890000000"
              className="mt-6 inline-flex rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
            >
              Call (08) 9000 0000
            </a>
            <p className="mt-4 text-sm text-slate-500">
              For life-threatening emergencies, call 000 immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Why families choose us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Trusted care with a personal approach
            </h2>
            <p className="mt-4 text-slate-600">
              We focus on comfort, clarity, and quality treatment so every patient
              feels supported from the moment they arrive.
            </p>
          </div>

          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Gentle and reassuring team</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Ideal for nervous patients and young children who need a calm, caring experience.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Modern treatment options</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Contemporary dentistry focused on comfort, precision, and long-term results.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Clear communication</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We explain your options simply so you can make informed decisions with confidence.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Care for every age</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                From first dental visits to ongoing adult care, we support healthy smiles for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-600">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to book your family&apos;s next dental visit?
            </h2>
            <p className="mt-3 max-w-2xl text-sky-100">
              Whether you need a routine check-up or urgent dental care, our Perth
              clinic is here to help with friendly, professional support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              Book Appointment
            </a>
            <a
              href="tel:+61890000000"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call the Clinic
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}