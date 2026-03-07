import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import FAQSection from "../components/FAQSection"
 
const plan = {
  "businessName": "Harbour Dental Care",
  "location": "Perth",
  "badge": "Premium Dental Clinic in Perth",
  "heroTitle": "Modern Dental Care for Confident Smiles",
  "heroSubtitle": "Harbour Dental Care delivers premium family and cosmetic dentistry in Perth with a calm, modern clinic environment, advanced technology, and a patient-first approach designed for comfort at every visit.",
  "primaryCta": "Book an Appointment",
  "secondaryCta": "View Our Services",
  "phone": "(08) 6245 2800",
  "email": "hello@harbourdentalcare.com.au",
  "services": [
    {
      "title": "General Dentistry",
      "description": "Comprehensive everyday dental care including check-ups, cleans, fillings, and preventive treatments to keep your teeth and gums healthy."
    },
    {
      "title": "Cosmetic Dentistry",
      "description": "Enhance your smile with whitening, veneers, and tailored cosmetic treatments designed to deliver natural-looking, confident results."
    },
    {
      "title": "Family Dental Care",
      "description": "Gentle dental services for children, teens, adults, and seniors in a welcoming clinic that makes ongoing care simple for the whole family."
    },
    {
      "title": "Emergency Dental",
      "description": "Fast support for toothaches, chipped teeth, swelling, and urgent dental concerns with prompt appointments and compassionate care."
    },
    {
      "title": "Dental Implants",
      "description": "Restore missing teeth with durable, functional implant solutions that help improve bite, appearance, and long-term oral health."
    },
    {
      "title": "Invisalign & Smile Alignment",
      "description": "Discreet orthodontic treatment using clear aligners to straighten teeth comfortably while fitting into your daily lifestyle."
    }
  ],
  "trustPoints": [
    "Modern Perth clinic with advanced dental technology and a calming patient experience",
    "Personalised treatment plans for preventive, family, and cosmetic dental needs",
    "Friendly, highly trained team focused on comfort, clarity, and long-term oral health"
  ],
  "faqs": [
    {
      "question": "Do you accept new patients?",
      "answer": "Yes, Harbour Dental Care welcomes new patients of all ages and offers flexible appointment options for individuals and families across Perth."
    },
    {
      "question": "What services do you provide?",
      "answer": "We provide general, family, cosmetic, emergency, restorative, and smile alignment treatments tailored to each patient's goals and oral health needs."
    },
    {
      "question": "Do you offer emergency dental appointments?",
      "answer": "Yes, we aim to provide prompt care for urgent dental issues such as tooth pain, broken teeth, swelling, and other unexpected concerns."
    },
    {
      "question": "Is your clinic suitable for nervous patients?",
      "answer": "Absolutely. Our team focuses on clear communication, gentle care, and a calm modern setting to help anxious patients feel more at ease."
    }
  ],
  "aboutParagraphs": [
    "Harbour Dental Care is a modern premium dental clinic in Perth created for patients who value expert care, comfort, and a refined healthcare experience. Our clinic combines contemporary treatment spaces, advanced equipment, and a warm professional team to make every visit feel calm, clear, and reassuring.",
    "We care for individuals and families across every stage of life, offering preventive, restorative, and cosmetic dentistry with a personalised approach. From your first consultation to your ongoing care plan, our focus is on building trust, improving oral health, and helping you smile with confidence."
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
