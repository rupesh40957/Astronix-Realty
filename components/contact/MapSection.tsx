"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export default function MapSection() {
  const [showDirections, setShowDirections] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
        <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.19296304462!2d73.06742!3d19.21914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf9a8a4e7c3f%3A0x1b8e4d54e7d9b3c!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1644321234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-4 left-4">
            <button
              onClick={() => setShowDirections(!showDirections)}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center"
            >
              <MapPin className="mr-2" />
              {showDirections ? "Hide Directions" : "Get Directions"}
            </button>
          </div>
        </div>
        {showDirections && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Directions to S.B.S REALTY</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Head northwest on Main Street toward Cross Street</li>
              <li>Turn right onto Oak Avenue</li>
              <li>Take the second left onto Pine Road</li>
              <li>S.B.S REALTY will be on your right</li>
            </ol>
          </div>
        )}
      </div>
    </section>
  )
}

