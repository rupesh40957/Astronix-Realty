import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="bg-theme-1 py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-theme-5 mb-4">Stay Updated with SBS Realty</h2>
          <p className="text-theme-4 mb-6">
            Subscribe to our newsletter for the latest property listings, market insights, and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-theme-5 text-theme-1"
              required
            />
            <Button type="submit" className="bg-button text-white hover:bg-button/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

