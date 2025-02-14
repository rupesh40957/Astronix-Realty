import type { Metadata } from "next"
import PropertyGallery from "@/components/Propertiesdetials/property-gallery"
import PropertyInfo from "@/components/Propertiesdetials/property-info"
import PropertyTabs from "@/components/Propertiesdetials/property-tabs"
import SimilarProperties from "@/components/Propertiesdetials/similar-properties"
import ContactForm from "@/components/Propertiesdetials/contact-form"
import PropertyMap from "@/components/Propertiesdetials/property-map"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "3BHK Apartment in Kalyan | Legally Verified Property",
  description:
    "Spacious 3BHK apartment in Kalyan with modern amenities. Legally verified property with exclusive interior design offers. Perfect for families.",
}

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6">
        {/* Property Overview Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <PropertyGallery />
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Under Construction
              </Badge>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                Legally Verified
              </Badge>
            </div>
            <h1 className="text-3xl font-bold">3BHK Apartment in Kalyan</h1>
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold">₹65,00,000</span>
              <span className="text-lg text-muted-foreground line-through">₹75,00,000</span>
              <span className="text-emerald-600 font-medium">13% OFF</span>
            </div>
            <div className="grid gap-4">
              <PropertyInfo />
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Schedule a Visit
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <WhatsappIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <PropertyTabs />

        {/* Map Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <PropertyMap />
        </section>

        {/* Contact Form */}
        <section className="my-8 max-w-2xl mx-auto">
          <ContactForm />
        </section>

        {/* Similar Properties */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Similar Properties</h2>
          <SimilarProperties />
        </section>
      </main>
    </div>
  )
}

