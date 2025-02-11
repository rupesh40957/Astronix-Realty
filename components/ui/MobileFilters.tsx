import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Filters } from "./Filters"

interface MobileFiltersProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function MobileFilters({ isOpen, setIsOpen }: MobileFiltersProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-4 overflow-y-auto h-[calc(100vh-5rem)]">
          <Filters />
        </div>
      </SheetContent>
    </Sheet>
  )
}

