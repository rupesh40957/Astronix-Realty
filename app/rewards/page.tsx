import type { Metadata } from "next"
import RewardDashboard from "@/components/rewards/reward-dashboard"
import PointShop from "@/components/rewards/point-shop"

export const metadata: Metadata = {
  title: "Your Reward Dashboard",
  description: "Track your rewards, redeem exclusive offers, and turn your house into your dream home.",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <RewardDashboard />
      <PointShop />
    </div>
  )
}

