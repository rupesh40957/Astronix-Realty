import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Welcome to S.B.S REALTY</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 animate-fade-in-up animation-delay-300">
          Your Trusted Partner for Legally Verified & Affordable Properties
        </h2>
        <p className="text-xl mb-8 max-w-2xl animate-fade-in-up animation-delay-600">
          We bring you the best properties in Dombivli, Kalyan, and beyond, with transparent deals, exclusive discounts,
          and expert interior design services.
        </p>
        <Button asChild size="lg" className="animate-fade-in-up animation-delay-900">
          <Link href="/properties">Browse Properties</Link>
        </Button>
      </div>
    </section>
  )
}

