import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function ContactSection() {
  return (
    <section id="contact-form" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Can We Help You?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

