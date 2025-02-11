import Link from "next/link"
import { Home, Search, Heart, User } from "lucide-react"

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center lg:hidden">
      <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-primary">
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center text-gray-600 hover:text-primary">
        <Search size={24} />
        <span className="text-xs mt-1">Search</span>
      </Link>
      <Link href="/favorites" className="flex flex-col items-center text-gray-600 hover:text-primary">
        <Heart size={24} />
        <span className="text-xs mt-1">Favorites</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-gray-600 hover:text-primary">
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </nav>
  )
}

