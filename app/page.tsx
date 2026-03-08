import type { Metadata } from "next"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"
import SectionHeading from "./components/SectionHeading"
import HeroSection from "./components/HeroSection"
import ServicesGrid from "./components/ServicesGrid"
import ContactForm from "./components/ContactForm"
import { siteData } from "./lib/siteData"
 
export const metadata: Metadata = {
  title: siteData.businessName,
  description: siteData.heroSubtitle,
}
 
export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoText={siteData.logoText} />
 
      <HeroSection
        badge={siteData.badge}
        title={siteData.heroTitle}
        subtitle={siteData.heroSubtitle}
        primaryCta={siteData.primaryCta}
        secondaryCta={siteData.secondaryCta}
        phone={siteData.phone}
        heroImage={siteData.images.hero}
      />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Our services"
          title={`Professional services from ${siteData.businessName}`}
          subtitle={`Trusted support across ${siteData.location} with a strong focus on quality, communication, and fast turnaround.`}
        />
        <div className="mt-10">
          <ServicesGrid services={siteData.services} />
        </div>
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--muted-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <ContactForm
            title={`Get in touch with ${siteData.businessName}`}
            subtitle={`Tell us what you need and our team in ${siteData.location} will get back to you shortly.`}
            phone={siteData.phone}
            email={siteData.email}
          />
        </div>
      </section>
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div
          className="rounded-3xl p-10 text-white"
          style={{
            background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))"
          }}
        >
          <h2 className="text-3xl font-bold">{siteData.ctaHeadline}</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            {siteData.ctaText}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-slate-900"
          >
            Go to Contact Page
          </a>
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
