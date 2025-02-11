import { Button } from "@/components/ui/button"

interface ExclusiveOfferProps {
  property: {
    price: {
      market: number
      discounted: number
    }
  }
}

export function ExclusiveOffer({ property }: ExclusiveOfferProps) {
  const discountPercentage = Math.floor(
    ((property.price.market - property.price.discounted) / property.price.market) * 100,
  )
  const interiorDesignValue = Math.min(100000, property.price.discounted * 0.02) // 2% of property value, max 1 lakh

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md p-6 my-4">
      <h2 className="text-2xl font-bold mb-4">Exclusive Offer</h2>
      <p className="text-lg mb-4">
        Purchase this property and receive free interior design services worth ₹{interiorDesignValue.toLocaleString()}!
      </p>
      {discountPercentage > 0 && (
        <p className="text-xl font-semibold">Save {discountPercentage}% on the market price!</p>
      )}
      <Button className="mt-4 bg-white text-purple-600 hover:bg-gray-100">Claim Offer</Button>
    </div>
  )
}

