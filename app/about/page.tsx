import type { Metadata } from "next"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import TestimonialsGrid from "../components/TestimonialsGrid"
import ImageSection from "../components/ImageSection"
import { siteData } from "../lib/siteData"
 
export const metadata: Metadata = {
  title: `About | ${siteData.businessName}`,
  description: `Learn more about ${siteData.businessName} in ${siteData.location}.`,
}
 
export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoText={siteData.logoText} />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="About us"
          title={`About ${siteData.businessName}`}
          subtitle={`Professional service in ${siteData.location} with a focus on trust, quality, and strong client relationships.`}
        />
 
        <div className="mt-10 space-y-6 text-lg leading-8 text-slate-600">
          {siteData.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Professional service leaves a strong impression when the experience is clear and well managed."
        />
        <div className="mt-10">
          <TestimonialsGrid testimonials={siteData.testimonials} />
        </div>
      </section>
 
      <SiteFooter
        businessName={siteData.businessName}
        phone={siteData.phone}
        email={siteData.email}
      />
    </main>
  )
}
