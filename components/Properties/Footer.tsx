import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-theme-1 text-theme-5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About SBS Realty</h3>
            <p className="text-sm">
              SBS Realty is a leading real estate company in India, providing top-notch property solutions for buyers,
              sellers, and investors.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-theme-4 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-theme-4 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-theme-4 transition-colors">
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-theme-4 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-sm mb-2">123 Real Estate Street, Mumbai, India 400001</p>
            <p className="text-sm mb-2">Phone: +91 123 456 7890</p>
            <p className="text-sm mb-2">Email: info@sbsrealty.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-theme-4 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-theme-4 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-theme-4 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-theme-4 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-theme-4">
          <p className="text-sm text-center">© {new Date().getFullYear()} SBS Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

