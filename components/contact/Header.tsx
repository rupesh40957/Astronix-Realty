import Link from "next/link"
import { Search } from "lucide-react"

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
          <Link href="/rewards" className="text-gray-600 hover:text-primary">
            Rewards
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="px-3 py-1 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-white px-3 py-1 rounded-r-md hover:bg-primary-dark">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

