"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

interface NewsletterSignupProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NewsletterSignup({ className, ...props }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email)
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail("")
  }

  return (
    <div className={`bg-primary text-primary-foreground p-6 md:p-8 rounded-lg ${className}`} {...props}>
      <h2 className="text-xl md:text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4 text-sm md:text-base">Stay updated with the latest real estate trends and insights.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-primary-foreground text-primary"
        />
        <Button type="submit" variant="secondary" className="w-full sm:w-auto">
          Subscribe
        </Button>
      </form>
    </div>
  )
}

