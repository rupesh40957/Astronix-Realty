import { Button } from "@/components/ui/button"
import { Grid2X2, AlignStartVerticalIcon as AlignVertical } from "lucide-react"

interface ViewModeToggleProps {
  viewMode: "horizontal" | "vertical"
  setViewMode: (mode: "horizontal" | "vertical") => void
}

export function ViewModeToggle({ viewMode, setViewMode }: ViewModeToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={viewMode === "horizontal" ? "default" : "outline"}
        size="icon"
        onClick={() => setViewMode("horizontal")}
        aria-label="Horizontal view"
        className="bg-button text-white hover:bg-button/90"
      >
        <Grid2X2 className="h-4 w-4" />
      </Button>
      <Button
        variant={viewMode === "vertical" ? "default" : "outline"}
        size="icon"
        onClick={() => setViewMode("vertical")}
        aria-label="Vertical view"
        className="bg-button text-white hover:bg-button/90"
      >
        <AlignVertical className="h-4 w-4" />
      </Button>
    </div>
  )
}

