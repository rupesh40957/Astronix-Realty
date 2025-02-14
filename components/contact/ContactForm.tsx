"use client"

import { useState } from "react"
import { Send, Loader } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    // Clear error when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" role="alert">
        <p className="font-bold">Thank you for contacting us!</p>
        <p>We'll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.fullName ? "border-red-500" : ""
          }`}
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.subject ? "border-red-500" : ""
          }`}
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Property Inquiry">Property Inquiry</option>
          <option value="Rewards Program">Rewards Program</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex items-center justify-center transition duration-300 ease-in-out"
      >
        {isSubmitting ? (
          <>
            <Loader className="animate-spin mr-2" />
            Submitting...
          </>
        ) : (
          <>
            Submit <Send className="ml-2" />
          </>
        )}
      </button>
    </form>
  )
}

