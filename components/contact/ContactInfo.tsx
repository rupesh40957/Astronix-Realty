import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
          <div>
            <p className="font-semibold">Phone</p>
            <p>Sales: +91 XXXXX XXXXX</p>
            <p>Support: +91 XXXXX XXXXX</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
          <div>
            <p className="font-semibold">Email</p>
            <p>info@sbsrealty.com</p>
            <p>support@sbsrealty.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
          <div>
            <p className="font-semibold">Office Address</p>
            <p>S.B.S REALTY</p>
            <p>XYZ Business Center,</p>
            <p>Main Street, Dombivli, Maharashtra.</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
          <div>
            <p className="font-semibold">Business Hours</p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

