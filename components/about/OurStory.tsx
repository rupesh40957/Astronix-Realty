import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OurStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Journey, Our Commitment</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="mb-6 text-lg">
              At S.B.S REALTY, we believe in making real estate buying an easier, safer, and more enjoyable experience
              for our customers. Founded in 2021, our journey started with a simple mission: to provide 100% legally
              verified properties to the people of Dombivli, Kalyan, and surrounding areas.
            </p>
            <p className="mb-6 text-lg">
              Our mission is to provide legally verified properties, ensuring that every transaction is smooth,
              transparent, and trustworthy for our customers. We are committed to making your real estate journey
              hassle-free while offering exclusive benefits like interior design discounts and under-construction
              property deals at market-beating prices.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Values:</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Transparency", "Trustworthiness", "Customer-Centricity", "Integrity"].map((value, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4">
                    <p className="text-lg font-medium">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/team-image.jpg"
              alt="S.B.S REALTY Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

