import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Find Your Dream Property?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let S.B.S REALTY guide you through the process of finding and purchasing your ideal home. Our team of experts
          is ready to assist you every step of the way.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/properties">Browse Our Listings</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

