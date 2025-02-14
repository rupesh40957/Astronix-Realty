"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./Sidebar"

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Blog Navigation</SheetTitle>
          <SheetDescription>Access categories, recent posts, and more.</SheetDescription>
        </SheetHeader>
        <div className="mt-4 overflow-y-auto h-[calc(100vh-120px)]">
          <Sidebar />
        </div>
      </SheetContent>
    </Sheet>
  )
}

