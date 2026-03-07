import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import SectionHeading from "../components/SectionHeading"
import ContactForm from "../components/ContactForm"
import FAQSection from "../components/FAQSection"
 
const plan = {
  "businessName": "Harbour Dental Care",
  "location": "Perth",
  "badge": "Premium Dental Clinic in Perth",
  "heroTitle": "Modern, Gentle Dental Care Designed Around Your Smile",
  "heroSubtitle": "Harbour Dental Care provides premium dental treatment in Perth with a calm, professional approach, experienced clinicians, and modern technology for patients of all ages.",
  "primaryCta": "Book an Appointment",
  "secondaryCta": "Contact Our Clinic",
  "phone": "(08) 9123 4567",
  "email": "hello@harbourdentalcare.com.au",
  "services": [
    {
      "title": "General Dentistry",
      "description": "Comprehensive everyday dental care including examinations, scale and cleans, fillings, gum care, and preventative treatment to help maintain long-term oral health."
    },
    {
      "title": "Children’s Dentistry",
      "description": "Gentle dental care for children in a calm and welcoming environment, focused on healthy development, prevention, education, and positive early dental experiences."
    },
    {
      "title": "Cosmetic Dentistry",
      "description": "Enhance the appearance of your smile with tailored cosmetic treatments designed to improve colour, shape, balance, and overall confidence."
    },
    {
      "title": "Teeth Whitening",
      "description": "Professional teeth whitening treatments that safely lift stains and brighten your smile with effective, clinically guided care."
    },
    {
      "title": "Emergency Dental Care",
      "description": "Prompt assessment and urgent treatment for toothaches, broken teeth, swelling, infections, lost fillings, and other unexpected dental issues."
    },
    {
      "title": "Dental Implants",
      "description": "Advanced tooth replacement solutions that restore function, comfort, and aesthetics with carefully planned dental implant treatment."
    }
  ],
  "trustPoints": [
    "Licensed dentists focused on patient-first care",
    "Modern equipment and contemporary treatment techniques",
    "Years of clinical experience serving Perth families"
  ],
  "faqs": [
    {
      "question": "Do you accept new patients?",
      "answer": "Yes, Harbour Dental Care welcomes new patients of all ages and offers comprehensive care for individuals, couples, and families."
    },
    {
      "question": "What should I do if I have a dental emergency?",
      "answer": "If you are experiencing pain, swelling, trauma, or a broken tooth, contact our clinic as soon as possible so we can arrange urgent care."
    },
    {
      "question": "Do you provide dental care for children?",
      "answer": "Yes, we offer children’s dentistry with a gentle, reassuring approach that helps young patients feel comfortable and supported."
    },
    {
      "question": "Are cosmetic and whitening treatments available?",
      "answer": "Yes, we provide cosmetic dentistry and professional teeth whitening options tailored to your goals and dental condition."
    }
  ],
  "aboutParagraphs": [
    "Harbour Dental Care is a premium dental clinic in Perth created for patients who value professionalism, comfort, and high-quality care. Our clinic combines a clean, modern environment with a calm and trustworthy healthcare experience, helping patients feel at ease from the moment they arrive.",
    "Our dentists are committed to delivering personalised treatment using modern equipment, clear communication, and a preventative approach to long-term oral health. From routine family check-ups to cosmetic improvements, emergency appointments, and advanced restorative care, we focus on achieving healthy, confident smiles with exceptional attention to detail."
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
