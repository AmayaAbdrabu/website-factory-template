import type { Metadata } from "next"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import TrustGrid from "../components/TrustGrid"
import ImageSection from "../components/ImageSection"
import { siteData } from "../lib/siteData"
 
export const metadata: Metadata = {
  title: `About | ${siteData.businessName}`,
  description: `Learn more about ${siteData.businessName} in ${siteData.location}.`,
}
 
export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoUrl={siteData.logoUrl} />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="About us"
          title={`About ${siteData.businessName}`}
          subtitle={`Professional service in ${siteData.location} with a focus on trust, quality, and strong client relationships.`}
        />
 
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            {siteData.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
 
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "var(--surface-color)" }}
          >
            <h3 className="text-2xl font-bold text-slate-900">Quick contact</h3>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">Phone:</span> {siteData.phone}</p>
              <p><span className="font-semibold">Email:</span> {siteData.email}</p>
              <p><span className="font-semibold">Location:</span> {siteData.location}</p>
            </div>
          </div>
        </div>
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--muted-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ImageSection
            title="A more polished client experience"
            subtitle="We focus on professionalism, presentation, and strong communication so every interaction feels clear and well managed."
            imageUrl={siteData.images.about}
            reverse
          />
        </div>
      </section>
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why clients choose us"
          title="What sets our service apart"
          subtitle="We focus on reliability, professionalism, and a better client experience."
        />
        <div className="mt-10">
          <TrustGrid points={siteData.trustPoints} />
        </div>
      </section>
 
      <SiteFooter
        businessName={siteData.businessName}
        phone={siteData.phone}
        email={siteData.email}
        logoUrl={siteData.logoUrl}
      />
    </main>
  )
}
