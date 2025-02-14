"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of properties do you sell?",
    answer:
      "We offer a wide range of properties including residential apartments, villas, commercial spaces, and plots. Our portfolio caters to various budgets and preferences.",
  },
  {
    question: "How can I redeem my rewards?",
    answer:
      "To redeem your rewards, log into your S.B.S REALTY account, navigate to the 'Rewards' section, and follow the prompts to claim your benefits. If you need assistance, our customer support team is always ready to help.",
  },
  {
    question: "What is the process to schedule a property visit?",
    answer:
      "You can schedule a property visit by contacting our sales team via phone or email. Alternatively, you can use our website's booking feature to select a convenient date and time for your visit.",
  },
  {
    question: "Do you offer virtual property tours?",
    answer:
      "Yes, we offer virtual property tours for many of our listings. This allows you to explore properties from the comfort of your home. Check the individual property listings for virtual tour availability.",
  },
  {
    question: "What documents do I need to buy a property?",
    answer:
      "The required documents may vary depending on the type of property and your financial situation. Generally, you'll need proof of identity, address proof, income proof, and sometimes property-related documents. Our team will guide you through the specific requirements for your purchase.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-inner">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

