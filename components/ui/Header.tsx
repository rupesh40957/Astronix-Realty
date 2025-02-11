import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  className?: string
}

export function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`bg-theme-1 shadow-md ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-theme-5">
            SBS REALTY
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-theme-5 hover:text-theme-4 transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-theme-5 hover:text-theme-4 transition-colors">
              Properties
            </Link>
            <Link href="/rewards" className="text-theme-5 hover:text-theme-4 transition-colors">
              Rewards
            </Link>
            <Link href="/about" className="text-theme-5 hover:text-theme-4 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-theme-5 hover:text-theme-4 transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="hidden lg:block">
            <Button variant="outline" className="bg-button text-white hover:bg-button/90">
              Login/Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

