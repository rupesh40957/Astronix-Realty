import { Header } from "@/components/Header"
import { MobileBottomNav } from "@/components/Header/mobile-bottom-nav"
import Footer  from "@/components/Footer"
import Home from "@/components/Home"
// import Properties from "@/app/Properties"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pb-16 lg:pb-0">
        <Home />

      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

57