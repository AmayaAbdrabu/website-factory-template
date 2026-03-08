export default function FAQSection({
  faqs,
}: {
  faqs: readonly { question: string; answer: string }[]
}) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
          <p className="mt-3 text-slate-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}
