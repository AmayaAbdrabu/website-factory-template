import type { Metadata } from "next"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import ImageSection from "../components/ImageSection"
import { siteData } from "../lib/siteData"

export const metadata: Metadata = {
  title: `Contact | ${siteData.businessName}`,
  description: `Contact ${siteData.businessName} in ${siteData.location}.`,
}

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoText={siteData.logoText} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Contact"
          title={`Get in touch with ${siteData.businessName}`}
          subtitle={`Tell us what you need and our team in ${siteData.location} will get back to you as soon as possible.`}
        />
        <div className="mt-10">
          <ContactForm
            title="Send us an enquiry"
            subtitle="We’ll respond as soon as possible with the next best step."
            phone={siteData.phone}
            email={siteData.email}
          />
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--surface-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ImageSection
            title="A modern contact experience"
            subtitle="A professional website should make it easy for visitors to reach out, trust the business, and take the next step."
            imageUrl={siteData.images.contact}
            reverse
          />
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
