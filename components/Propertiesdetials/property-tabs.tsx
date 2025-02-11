"use client"

import {
  Calculator,
  CheckCircle2,
  Clock,
  Construction,
  Home,
  Maximize2,
  Sun,
  Shield,
  Car,
  Zap,
  PocketIcon as Pool,
  Dumbbell,
  Users,
  Building,
  FileCheck,
  Scale,
  FileText,
  Building2,
  IndianRupee,
  ChevronRight,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useState } from "react"

export default function PropertyTabs() {
  const [loanAmount, setLoanAmount] = useState(5200000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(20)

  const calculateEMI = () => {
    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const numberOfPayments = tenure * 12
    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments)) /
      (Math.pow(1 + ratePerMonth, numberOfPayments) - 1)
    return Math.round(emi)
  }

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      {/* Mobile-optimized tab list with horizontal scroll */}
      <ScrollArea className="w-full">
        <TabsList className="bg-blue-50 p-1 w-full flex whitespace-nowrap">
          <TabsTrigger
            value="overview"
            className="flex-1 min-w-[120px] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="flex-1 min-w-[120px] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Features
          </TabsTrigger>
          <TabsTrigger
            value="legal"
            className="flex-1 min-w-[120px] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Legal Details
          </TabsTrigger>
          <TabsTrigger
            value="calculator"
            className="flex-1 min-w-[120px] data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            EMI Calculator
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <TabsContent value="overview">
        <div className="space-y-6">
          {/* Welcome Section - Mobile optimized */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-100">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Welcome to Your Dream Home</h3>
            <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
              This stunning 3BHK apartment in the heart of Kalyan offers the perfect blend of comfort and luxury.
              Experience modern living with thoughtfully designed spaces and premium amenities throughout.
            </p>
          </div>

          {/* Property Highlights - Mobile optimized */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-900 px-1">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Property Highlights
            </h3>
            <div className="grid gap-3">
              {/* Made cards full width on mobile */}
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Sun className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Living Room</h4>
                    <p className="text-sm text-blue-600">Spacious with natural lighting</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Home className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Kitchen</h4>
                    <p className="text-sm text-blue-600">Modern modular with premium fittings</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Maximize2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Bedrooms</h4>
                    <p className="text-sm text-blue-600">3 well-ventilated with attached baths</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Construction Status - Mobile optimized */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-900 px-1">
              <Construction className="w-5 h-5 text-blue-600" />
              Construction Status
            </h3>
            <div className="space-y-4 p-4 sm:p-6 bg-white border border-blue-100 rounded-xl">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-900">Current Progress</span>
                  <span className="text-sm font-bold text-blue-600">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
              </div>
              <div className="flex items-center gap-3 text-blue-600">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-blue-700">Expected Completion:</span>
                  <span className="ml-1 font-semibold">December 2024</span>
                </div>
              </div>
              {/* Stats grid optimized for mobile */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-blue-100">
                <div className="text-center p-2 bg-blue-50/50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">60%</div>
                  <div className="text-xs text-blue-700">Progress</div>
                </div>
                <div className="text-center p-2 bg-blue-50/50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">11</div>
                  <div className="text-xs text-blue-700">Months Left</div>
                </div>
                <div className="text-center p-2 bg-blue-50/50 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">12</div>
                  <div className="text-xs text-blue-700">Floors Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="features">
        <div className="space-y-6">
          {/* Building Features - Mobile optimized */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-900 px-1">
              <Building2 className="w-5 h-5 text-blue-600" />
              Building Features
            </h3>
            <div className="grid gap-3">
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">24/7 Security</h4>
                    <p className="text-sm text-blue-600">CCTV surveillance & guards</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Car className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Covered Parking</h4>
                    <p className="text-sm text-blue-600">Dedicated spots available</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Power Backup</h4>
                    <p className="text-sm text-blue-600">100% power backup</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Amenities - Mobile optimized */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-900 px-1">
              <Building className="w-5 h-5 text-blue-600" />
              Lifestyle Amenities
            </h3>
            <div className="grid gap-3">
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Pool className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Swimming Pool</h4>
                    <p className="text-sm text-blue-600">Temperature controlled</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Dumbbell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Modern Gym</h4>
                    <p className="text-sm text-blue-600">State-of-the-art equipment</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg active:bg-blue-50 transition-colors touch-pan-y">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Community Hall</h4>
                    <p className="text-sm text-blue-600">Multi-purpose space</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-300 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="legal">
        <div className="space-y-6">
          {/* Legal Status Overview - Mobile optimized */}
          <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">Legal Verification Status</h3>
                <p className="text-sm sm:text-base text-blue-800">
                  This property has undergone thorough legal verification by our expert team. All necessary
                  documentation is complete and verified.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Documents - Mobile optimized */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-blue-900 px-1">
              <FileCheck className="w-5 h-5 text-blue-600" />
              Verified Documents
            </h3>
            <div className="grid gap-3">
              <div className="p-4 bg-white border border-blue-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-blue-900">Title Deed</h4>
                    <p className="text-sm text-blue-600 mt-1">Clear ownership documentation verified</p>
                    <Button variant="link" className="text-emerald-600 h-8 px-0 mt-1">
                      Request to view
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-blue-900">NOC Certificates</h4>
                    <p className="text-sm text-blue-600 mt-1">All required NOCs obtained</p>
                    <Button variant="link" className="text-emerald-600 h-8 px-0 mt-1">
                      Request to view
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-blue-900">Building Plan</h4>
                    <p className="text-sm text-blue-600 mt-1">Approved by municipal authorities</p>
                    <Button variant="link" className="text-emerald-600 h-8 px-0 mt-1">
                      Request to view
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border border-blue-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <FileText className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-blue-900">RERA Registration</h4>
                    <p className="text-sm text-blue-600 mt-1">Project registered under RERA</p>
                    <Button variant="link" className="text-emerald-600 h-8 px-0 mt-1">
                      Request to view
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="calculator">
        {/* EMI Calculator - Mobile optimized */}
        <div className="space-y-6">
          {/* Calculator Inputs */}
          <div className="p-4 sm:p-6 bg-white border border-blue-100 rounded-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calculator className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">EMI Calculator</h3>
            </div>

            {/* Loan Amount */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-blue-900">Loan Amount</label>
                  <span className="text-sm font-bold text-blue-600">₹{loanAmount.toLocaleString()}</span>
                </div>
                <Slider
                  value={[loanAmount]}
                  min={1000000}
                  max={10000000}
                  step={100000}
                  onValueChange={([value]) => setLoanAmount(value)}
                  className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:bg-blue-600"
                />
                <div className="flex justify-between text-xs text-blue-600">
                  <span>₹10L</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-blue-900">Interest Rate</label>
                  <span className="text-sm font-bold text-blue-600">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  min={5}
                  max={15}
                  step={0.1}
                  onValueChange={([value]) => setInterestRate(value)}
                  className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:bg-blue-600"
                />
                <div className="flex justify-between text-xs text-blue-600">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-sm font-medium text-blue-900">Loan Tenure</label>
                  <span className="text-sm font-bold text-blue-600">{tenure} Years</span>
                </div>
                <Slider
                  value={[tenure]}
                  min={5}
                  max={30}
                  step={1}
                  onValueChange={([value]) => setTenure(value)}
                  className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:bg-blue-600"
                />
                <div className="flex justify-between text-xs text-blue-600">
                  <span>5 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <IndianRupee className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900">Loan Summary</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-blue-600 mb-1">Monthly EMI</p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-900">₹{calculateEMI().toLocaleString()}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-blue-600 mb-1">Principal Amount</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-900">₹{loanAmount.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-blue-600 mb-1">Total Interest</p>
                  <p className="text-lg sm:text-xl font-bold text-blue-900">
                    ₹{(calculateEMI() * tenure * 12 - loanAmount).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/80 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-blue-600 mb-1">Total Amount Payable</p>
                <p className="text-lg sm:text-xl font-bold text-blue-900">
                  ₹{(calculateEMI() * tenure * 12).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

