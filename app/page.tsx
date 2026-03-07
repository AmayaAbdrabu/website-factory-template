export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-transparent to-cyan-400/10" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-sky-200">
              24/7 Emergency Plumbing in Perth
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Fast, reliable plumbing services across Perth
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              From burst pipes and blocked drains to hot water repairs and general plumbing,
              we deliver prompt callouts, honest advice, and quality workmanship for homes
              and businesses.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0890000000"
                className="inline-flex items-center justify-center rounded-md bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400"
              >
                Call for Emergency Service
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request a Free Quote
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>Licensed & insured</div>
              <div>Same-day service available</div>
              <div>Residential & commercial</div>
            </div>
          </div>

          <div
            id="quote"
            className="relative z-10 rounded-2xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl lg:p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Get a fast plumbing quote</h2>
              <p className="mt-2 text-sm text-slate-600">
                Tell us what you need and our Perth team will get back to you promptly.
              </p>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="04xx xxx xxx"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
                <div>
                  <label htmlFor="suburb" className="mb-2 block text-sm font-medium text-slate-700">
                    Perth suburb
                  </label>
                  <input
                    id="suburb"
                    name="suburb"
                    type="text"
                    placeholder="e.g. Joondalup"
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Emergency plumbing</option>
                  <option>Blocked drains</option>
                  <option>Burst pipes</option>
                  <option>Hot water systems</option>
                  <option>Leak detection</option>
                  <option>General plumbing</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Job details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe the issue, urgency, and preferred time for contact."
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  Need urgent help? Call now for immediate emergency plumbing assistance.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Plumbing services tailored for Perth homes and businesses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We handle urgent callouts, repairs, maintenance, and installations with a focus
              on fast response times and lasting results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Emergency Plumbing",
                description:
                  "24/7 response for burst pipes, overflowing fixtures, major leaks, and urgent plumbing issues.",
              },
              {
                title: "Blocked Drains",
                description:
                  "Quick diagnosis and clearing of blocked sinks, toilets, stormwater lines, and sewer drains.",
              },
              {
                title: "Hot Water Systems",
                description:
                  "Repairs, replacements, and installations for electric, gas, and continuous flow systems.",
              },
              {
                title: "General Plumbing",
                description:
                  "Taps, toilets, leak repairs, pipework, maintenance, and plumbing upgrades for all property types.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-200 hover:bg-white"
              >
                <div className="mb-4 h-10 w-10 rounded-lg bg-sky-100" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                Why choose us
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted local plumbers with a strong focus on service
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We know plumbing problems can&apos;t wait. Our Perth team is committed to clear
                communication, tidy workmanship, and dependable solutions that keep your property
                running smoothly.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Prompt emergency callouts",
                  "Upfront, honest pricing",
                  "Licensed and insured team",
                  "Workmanship you can rely on",
                  "Residential and commercial experience",
                  "Friendly local Perth service",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Trusted by Perth property owners</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <p className="mt-2 text-sm text-slate-600">Emergency support for urgent plumbing issues</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">Fast</div>
                  <p className="mt-2 text-sm text-slate-600">Rapid response across Perth metro areas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">Local</div>
                  <p className="mt-2 text-sm text-slate-600">Perth-based service with local knowledge</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-600">
                  &ldquo;Excellent service, quick response, and the issue was fixed properly the
                  first time. Highly recommended for anyone needing a plumber in Perth.&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">Local customer review</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-600 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-100">
              Contact us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Need a plumber now? We&apos;re ready to help.
            </h2>
            <p className="mt-4 text-lg text-sky-50">
              For urgent plumbing emergencies or a fast quote, contact our Perth team today.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0890000000"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              Call 08 9000 0000
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}