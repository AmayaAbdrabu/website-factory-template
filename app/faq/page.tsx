import type { Metadata } from "next"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import FAQSection from "../components/FAQSection"
import { siteData } from "../lib/siteData"
 
export const metadata: Metadata = {
  title: `FAQ | ${siteData.businessName}`,
  description: `Frequently asked questions for ${siteData.businessName}.`,
}
 
export default function FaqPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoText={siteData.logoText} />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Helpful answers to common questions before getting started."
        />
        <div className="mt-10">
          <FAQSection faqs={siteData.faqs} />
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
