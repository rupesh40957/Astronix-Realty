import HeroSection from "@/components/contact/HeroSection"
import ContactSection from "@/components/contact/ContactSection"
import MapSection from "@/components/contact/MapSection"
import FAQSection from "@/components/contact/FAQSection"
import SocialMediaSection from "@/components/contact/SocialMediaSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | S.",
  description:
    "Get in touch with S.B.S REALTY for all your property needs. Contact us via phone, email, or visit our office in Dombivli.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex-grow flex flex-col">
      
        <HeroSection />
        <ContactSection />
        <MapSection />
        <FAQSection />
        <SocialMediaSection />
    </div>
  )
}

