import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import FAQSection from "../components/FAQSection"
 
const plan = {
  "businessName": "Hassy’s Mowing",
  "location": "Perth, WA",
  "badge": "Premium Gardening & Lawn Care in Perth",
  "heroTitle": "Premium Lawn & Garden Care With A Calm, Professional Touch",
  "heroSubtitle": "Hassy’s Mowing delivers high-end mowing and hedge trimming services across Perth with reliable scheduling, modern equipment, and a clean, trustworthy experience from first enquiry to final finish.",
  "primaryCta": "Book a Free Quote",
  "secondaryCta": "Request an Emergency Cut",
  "phone": "(08) 9000 1234",
  "email": "hello@hassysmowing.com.au",
  "services": [
    {
      "title": "General Mowing",
      "description": "Keep your lawn neat, healthy, and consistently well-presented with professional mowing tailored to residential and small commercial properties. We focus on clean lines, reliable maintenance, and a polished finish that elevates the look of your outdoor space."
    },
    {
      "title": "Hedge Trimming",
      "description": "Maintain tidy, structured, and attractive hedges with precise trimming that improves curb appeal and supports healthy growth. We shape and refine hedges carefully to create a sharp, premium look without overcutting."
    },
    {
      "title": "Emergency Cuts",
      "description": "Need urgent lawn attention before an inspection, event, rental handover, or last-minute visit? Our emergency cut service is designed for fast-response mowing and garden tidying to quickly restore a neat, presentable appearance."
    }
  ],
  "trustPoints": [
    "Licensed and fully insured for peace of mind",
    "Modern, well-maintained equipment for clean, efficient results",
    "Years of hands-on experience caring for Perth gardens"
  ],
  "faqs": [
    {
      "question": "What areas of Perth do you service?",
      "answer": "Hassy’s Mowing services many suburbs across Perth. Contact us with your location and we’ll confirm availability and the earliest booking time."
    },
    {
      "question": "Do you offer one-off and regular mowing services?",
      "answer": "Yes. We provide both one-time lawn services and ongoing maintenance plans depending on your property, schedule, and budget."
    },
    {
      "question": "What is included in an emergency cut?",
      "answer": "Emergency cuts typically include urgent mowing and a general tidy-up to improve the appearance of your lawn and garden quickly. We’ll confirm the scope based on your needs and timing."
    },
    {
      "question": "Do I need to be home during the service?",
      "answer": "Not always. As long as we have clear access to the areas being serviced and any required instructions in advance, we can often complete the job while you’re away."
    }
  ],
  "aboutParagraphs": [
    "Hassy’s Mowing is a premium gardening business based in Perth, built around reliability, presentation, and a calm, professional customer experience. The brand is designed to feel more like a trusted healthcare provider than a typical trade service, with clear communication, attention to detail, and consistent results that give clients confidence in the care of their outdoor spaces.",
    "The business is owned and operated by Hassan, who takes pride in delivering neat, high-quality work across every property. From routine general mowing to precise hedge trimming and urgent emergency cuts, Hassan focuses on jobs that help homes and small commercial spaces look clean, maintained, and welcoming. The goal is simple: make premium lawn care feel easy, dependable, and genuinely professional."
  ]
}
 
export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader businessName={plan.businessName} />
 
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Contact"
          title={`Talk to ${plan.businessName}`}
          subtitle={`Reach out for quotes, enquiries, or general support in ${plan.location}.`}
        />
 
        <div className="mt-10">
          <ContactForm
            title="Send us a message"
            subtitle="Tell us a little about what you need and our team will get back to you."
            phone={plan.phone}
            email={plan.email}
          />
        </div>
      </section>
 
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="FAQs"
            title="Before you contact us"
            subtitle="A few common questions clients ask before getting started."
          />
          <div className="mt-10">
            <FAQSection faqs={plan.faqs} />
          </div>
        </div>
      </section>
 
      <SiteFooter businessName={plan.businessName} phone={plan.phone} email={plan.email} />
    </main>
  )
}
