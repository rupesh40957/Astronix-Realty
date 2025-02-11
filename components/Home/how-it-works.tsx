import { Search, Gift, FileCheck } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Search className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Browse Verified Properties</h3>
            <p className="text-gray-600">View properties in your preferred locations and categories.</p>
          </div>
          <div className="text-center">
            <Gift className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Enjoy Exclusive Offers</h3>
            <p className="text-gray-600">Get discounts on interior design services as part of the property deal.</p>
          </div>
          <div className="text-center">
            <FileCheck className="w-16 h-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Legal Assistance & Easy Purchase</h3>
            <p className="text-gray-600">
              Trust our 100% legally verified properties and enjoy seamless documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

