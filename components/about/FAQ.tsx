import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What sets S.B.S REALTY apart from other real estate companies?",
      answer:
        "S.B.S REALTY stands out due to our commitment to 100% legally verified properties, exclusive interior design discounts, and our customer-centric approach. We ensure transparency, affordability, and a hassle-free experience for all our clients.",
    },
    {
      question: "How do you ensure the legal verification of properties?",
      answer:
        "Our team of legal experts thoroughly checks all property documents, including ownership records, tax receipts, and necessary permits. We only list properties that pass our strict verification process, giving you peace of mind in your purchase.",
    },
    {
      question: "Can you explain more about the interior design discounts?",
      answer:
        "When you purchase a property through S.B.S REALTY, you receive exclusive discounts with our partner interior design firms. This can help you save significantly on making your new house feel like home.",
    },
    {
      question: "Do you offer assistance with home loans?",
      answer:
        "Yes, we have partnerships with several leading banks and financial institutions. Our team can guide you through the loan application process and help you secure the best possible rates.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We primarily focus on properties in Dombivli, Kalyan, and surrounding areas. However, we're continuously expanding our reach to serve more locations in the region.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

