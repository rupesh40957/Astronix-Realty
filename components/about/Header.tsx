import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          S.B.S REALTY
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/properties" className="text-gray-600 hover:text-primary">
            Properties
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-primary">
            Login
          </Link>
          <Button asChild>
            <Link href="/properties">Explore Properties</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

