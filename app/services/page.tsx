import type { Metadata } from "next"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import ServicesGrid from "../components/ServicesGrid"
import ContactForm from "../components/ContactForm"
import ImageSection from "../components/ImageSection"
import { siteData } from "../lib/siteData"
 
export const metadata: Metadata = {
  title: `Services | ${siteData.businessName}`,
  description: `Explore the services offered by ${siteData.businessName} in ${siteData.location}.`,
}
 
export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoUrl={siteData.logoUrl} />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Services"
          title={`Services from ${siteData.businessName}`}
          subtitle="A professional range of services delivered with clear communication, quality, and care."
        />
        <div className="mt-10">
          <ServicesGrid services={siteData.services} />
        </div>
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--surface-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ImageSection
            title="Modern service, clearer presentation"
            subtitle="Well-presented service pages help clients understand what you offer and make the website feel more trustworthy."
            imageUrl={siteData.images.services}
          />
        </div>
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--muted-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ContactForm
            title="Need help choosing the right service?"
            subtitle="Tell us what you need and we’ll point you in the right direction."
            phone={siteData.phone}
            email={siteData.email}
          />
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
