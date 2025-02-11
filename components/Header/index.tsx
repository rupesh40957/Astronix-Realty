"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MainNavigation } from "./navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="compnaylogo" width={40} height={40} />
            <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-black"}`}>SBS REALTY</span>
          </Link>
          <div className="hidden md:block">
            <MainNavigation isScrolled={isScrolled} />
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-primary" : "text-black"} />
              ) : (
                <Menu className={isScrolled ? "text-primary" : "text-black"} />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <MainNavigation isScrolled={true} isMobile={true} />
        </div>
      )}
    </header>
  )
}

