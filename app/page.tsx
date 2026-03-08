import type { Metadata } from "next"
import SiteHeader from "./components/SiteHeader"
import SiteFooter from "./components/SiteFooter"
import SectionHeading from "./components/SectionHeading"
import HeroSection from "./components/HeroSection"
import ServicesGrid from "./components/ServicesGrid"
import TrustGrid from "./components/TrustGrid"
import TestimonialsGrid from "./components/TestimonialsGrid"
import FAQSection from "./components/FAQSection"
import ContactForm from "./components/ContactForm"
import ImageSection from "./components/ImageSection"
import { siteData } from "./lib/siteData"
 
export const metadata: Metadata = {
  title: siteData.businessName,
  description: siteData.heroSubtitle,
}
 
export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={siteData.businessName} logoUrl={siteData.logoUrl} />
 
      <HeroSection
        badge={siteData.badge}
        title={siteData.heroTitle}
        subtitle={siteData.heroSubtitle}
        primaryCta={siteData.primaryCta}
        secondaryCta={siteData.secondaryCta}
        phone={siteData.phone}
        services={siteData.services}
        heroImage={siteData.images.hero}
      />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <ImageSection
          title={`Why clients choose ${siteData.businessName}`}
          subtitle="We focus on a better client experience, strong communication, and a polished professional result."
          imageUrl={siteData.images.about}
        />
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--muted-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Our services"
            title={`Professional services from ${siteData.businessName}`}
            subtitle={`Trusted support across ${siteData.location} with a strong focus on quality, communication, and fast turnaround.`}
          />
          <div className="mt-10">
            <ServicesGrid services={siteData.services} />
          </div>
        </div>
      </section>
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built on trust, quality, and consistency"
          subtitle="We focus on clear communication, practical solutions, and a professional client experience."
        />
        <div className="mt-10">
          <TrustGrid points={siteData.trustPoints} />
        </div>
      </section>
 
      <section
        className="py-20"
        style={{ backgroundColor: "var(--surface-color)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Client feedback"
            title="What clients value most"
            subtitle="The qualities that help businesses stand out are consistency, professionalism, and trust."
          />
          <div className="mt-10">
            <TestimonialsGrid testimonials={siteData.testimonials} />
          </div>
        </div>
      </section>
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions"
          subtitle="Helpful answers to the questions clients often ask before getting started."
        />
        <div className="mt-10">
          <FAQSection faqs={siteData.faqs} />
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
 
      <SiteFooter
        businessName={siteData.businessName}
        phone={siteData.phone}
        email={siteData.email}
        logoUrl={siteData.logoUrl}
      />
    </main>
  )
}
