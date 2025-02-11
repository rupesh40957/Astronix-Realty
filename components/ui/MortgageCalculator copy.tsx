import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface MortgageCalculatorProps {
  onClose: () => void
}

export function MortgageCalculator({ onClose }: MortgageCalculatorProps) {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8)
  const [loanTerm, setLoanTerm] = useState(20)

  const calculateEMI = () => {
    const r = interestRate / 12 / 100
    const n = loanTerm * 12
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    return Math.round(emi)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">EMI Calculator</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>
      <div>
        <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
        <Input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="interestRate">Interest Rate (%)</Label>
        <Input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="loanTerm">Loan Term (years)</Label>
        <Input
          id="loanTerm"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(Number(e.target.value))}
          className="mt-1"
        />
      </div>
      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm font-semibold text-blue-800">Estimated Monthly EMI:</p>
        <p className="text-xl font-bold text-blue-600">₹{calculateEMI().toLocaleString()}</p>
      </div>
    </div>
  )
}

