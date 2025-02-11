import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"
import { MortgageCalculator } from "./MortgageCalculator"

export function EMICalculatorToggle() {
  const [showEMICalculator, setShowEMICalculator] = useState(false)

  return (
    <div className="relative">
      <Button
        variant={showEMICalculator ? "default" : "outline"}
        size="sm"
        onClick={() => setShowEMICalculator(!showEMICalculator)}
        className="bg-button text-white hover:bg-button/90"
      >
        <Calculator className="h-4 w-4 mr-2" />
        EMI
      </Button>
      {showEMICalculator && (
        <div className="absolute top-full right-0 mt-2 w-80 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <MortgageCalculator onClose={() => setShowEMICalculator(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

