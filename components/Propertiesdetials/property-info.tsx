import { Building2, MapPin, Ruler } from "lucide-react"

export default function PropertyInfo() {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Property Type</p>
            <p className="font-medium">Residential</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Ruler className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Super Built-up Area</p>
            <p className="font-medium">1,500 sq.ft.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">Kalyan West</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">Exclusive Interior Design Offer</h3>
        <p className="text-sm text-blue-600">
          Get up to ₹50,000 worth of interior design services with this property. Discount varies based on property
          value.
        </p>
      </div>
    </div>
  )
}

