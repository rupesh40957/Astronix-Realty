import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import type React from "react" // Added import for React

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Pagination({ className, ...props }: PaginationProps) {
  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`} {...props}>
      <Button variant="outline" size="icon" className="hidden sm:inline-flex">
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" className="sm:hidden">
        Previous
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        1
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        2
      </Button>
      <Button variant="outline" className="hidden sm:inline-flex">
        3
      </Button>
      <Button variant="outline" className="sm:hidden">
        Next
      </Button>
      <Button variant="outline" size="icon" className="hidden sm:inline-flex">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

