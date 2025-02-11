import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SocialMediaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect With Us on Social Media</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
            <Facebook className="w-10 h-10" />
          </a>
          <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
            <Instagram className="w-10 h-10" />
          </a>
          <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
            <Linkedin className="w-10 h-10" />
          </a>
          <a href="#" className="text-primary hover:text-primary-dark transition duration-300">
            <Twitter className="w-10 h-10" />
          </a>
        </div>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Chat with Us on WhatsApp
        </a>
      </div>
    </section>
  )
}

