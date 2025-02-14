import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="/placeholder.svg?height=800&width=1920"
        alt="S.B.S REALTY office"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Get in Touch with Us</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          We're here to answer all your property-related queries. Reach out to us, and we'll be happy to assist you!
        </p>
        <a
          href="#contact-form"
          className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us Now
          <ArrowDown className="ml-2" />
        </a>
      </div>
    </section>
  )
}

