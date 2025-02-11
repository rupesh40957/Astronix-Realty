"use client"

import { useState } from "react"
import { User, Gift, Clock, AlertTriangle, ChevronRight, Star, Zap, Share2, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"

// Mock data (replace with actual data fetching in a real application)
const userData = {
  name: "John Doe",
  points: 750,
  tier: "Silver",
  nextTier: "Gold",
  pointsToNextTier: 250,
  vouchers: [
    { type: "50% off", condition: "Interior design services for properties worth ₹50 lakhs", expiry: "2026-01-15" },
    { type: "25% off", condition: "Home appliances purchase", expiry: "2025-12-31" },
  ],
  activityTimeline: [
    { date: "Jan 15, 2025", description: "Earned 200 points for purchasing Property ABC", points: 200 },
    { date: "Jan 18, 2025", description: "Redeemed 300 points for a dining table", points: -300 },
    { date: "Jan 20, 2025", description: "Referred a friend", points: 500 },
  ],
}

export default function RewardDashboard() {
  const [activeTab, setActiveTab] = useState("summary")
  const [notifications, setNotifications] = useState([])

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, { id: Date.now(), message }])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== Date.now()))
    }, 5000)
  }

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-4 right-4 z-50 w-full max-w-sm"
          >
            <Alert>
              <AlertTitle>Notification</AlertTitle>
              <AlertDescription>{notification.message}</AlertDescription>
            </Alert>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to S.B.S REALTY Rewards Program!</h1>
        <p className="text-xl md:text-2xl lg:text-3xl opacity-90">
          Earn Points, Get Vouchers, and Enjoy Exclusive Benefits
        </p>
      </div>

      <Card className="bg-gradient-to-br from-quinary to-quaternary border-none shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary">
            <User className="h-8 w-8 md:h-10 md:w-10" />
            Hi {userData.name}, welcome back!
          </CardTitle>
          <CardDescription className="text-tertiary text-lg md:text-xl mt-2">
            You're currently a <span className="font-semibold text-secondary">{userData.tier}</span> tier member. Let's
            check out your rewards!
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
          <TabsTrigger value="summary" className="text-sm md:text-base lg:text-lg">
            Summary
          </TabsTrigger>
          <TabsTrigger value="points" className="text-sm md:text-base lg:text-lg">
            Points
          </TabsTrigger>
          <TabsTrigger value="vouchers" className="text-sm md:text-base lg:text-lg">
            Vouchers
          </TabsTrigger>
          <TabsTrigger value="how-it-works" className="text-sm md:text-base lg:text-lg">
            How It Works
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-primary">Reward Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-quaternary to-quinary p-6 rounded-lg text-center shadow-md">
                  <span className="text-lg md:text-xl font-semibold text-primary">Available Vouchers</span>
                  <span className="text-4xl md:text-5xl font-bold text-secondary block mt-3">
                    {userData.vouchers.length}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-quinary to-quaternary p-6 rounded-lg text-center shadow-md">
                  <span className="text-lg md:text-xl font-semibold text-primary">Current Points</span>
                  <span className="text-4xl md:text-5xl font-bold text-secondary block mt-3">{userData.points}</span>
                  <Progress
                    value={(userData.points / (userData.points + userData.pointsToNextTier)) * 100}
                    className="mt-4"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-quaternary to-quinary p-6 rounded-lg shadow-md">
                <span className="text-lg md:text-xl font-semibold text-primary">Next Tier Progress</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-tertiary">{userData.tier}</span>
                  <span className="text-tertiary">{userData.nextTier}</span>
                </div>
                <Progress
                  value={(userData.points / (userData.points + userData.pointsToNextTier)) * 100}
                  className="mt-2"
                />
                <p className="text-sm md:text-base text-tertiary mt-2">
                  {userData.pointsToNextTier} points to reach {userData.nextTier} Tier
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
              <Button
                onClick={() => setActiveTab("vouchers")}
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base bg-primary hover:bg-primary/90"
              >
                View Voucher Details
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => setActiveTab("points")}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-sm md:text-base border-primary text-primary hover:bg-primary hover:text-white"
              >
                Points History
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="points">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-primary">Points System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="earn-points">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">How to Earn Points</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-tertiary">
                      <li>Sign up: 100 points welcome gift</li>
                      <li>Property purchase: 10 points per ₹1 lakh</li>
                      <li>Successful referral: 500 points</li>
                      <li>Social media engagement: Varies</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="redeem-points">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">Redeem Points For</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-tertiary">
                      <li>Discounts on future purchases</li>
                      <li>Premium services</li>
                      <li>Exclusive merchandise</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="bg-gradient-to-br from-quaternary to-quinary p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-xl md:text-2xl text-primary mb-4">Points History</h4>
                <div className="space-y-4">
                  {userData.activityTimeline.map((activity, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                      <div>
                        <span className="text-sm text-tertiary block">{activity.date}</span>
                        <span className="text-base md:text-lg text-primary">{activity.description}</span>
                      </div>
                      <Badge variant={activity.points > 0 ? "default" : "destructive"} className="text-sm md:text-base">
                        {activity.points > 0 ? `+${activity.points}` : activity.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vouchers">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-primary">Interior Design Vouchers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="voucher-tiers">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">Voucher Tiers</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-tertiary">
                      <li>Silver: 50% of property value</li>
                      <li>Gold: 75% of property value</li>
                      <li>Platinum: 100% of property value</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="bg-gradient-to-br from-quaternary to-quinary p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-xl md:text-2xl text-primary mb-4">Your Vouchers:</h4>
                {userData.vouchers.map((voucher, index) => (
                  <div key={index} className="flex flex-col gap-3 bg-white p-4 rounded-lg mt-4 shadow-sm">
                    <span className="text-lg md:text-xl font-semibold text-primary">{voucher.type}</span>
                    <span className="text-sm md:text-base text-tertiary">{voucher.condition}</span>
                    <Badge variant="secondary" className="w-fit text-sm md:text-base bg-tertiary text-white">
                      Expires: {new Date(voucher.expiry).toLocaleDateString()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="how-it-works">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-primary">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sign-up">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">
                    <User className="h-6 w-6 mr-3" />
                    Sign Up
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base">
                    Join our rewards program and start earning benefits immediately!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="earn-points">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">
                    <Star className="h-6 w-6 mr-3" />
                    Earn Points
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base">
                    Collect points through purchases, referrals, and campaigns.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="vouchers">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">
                    <Gift className="h-6 w-6 mr-3" />
                    Vouchers
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base">
                    Receive vouchers for interior design services with property purchases.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="redeem">
                  <AccordionTrigger className="text-lg md:text-xl text-primary">
                    <Zap className="h-6 w-6 mr-3" />
                    Redeem
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base">
                    Use your points and vouchers for discounts and premium services.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8 bg-gradient-to-br from-quinary to-quaternary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary">
            <Share2 className="h-8 w-8" />
            Refer a Friend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg md:text-xl text-tertiary mb-6">Earn 500 points for every successful referral!</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value="https://sbs-realty.com/refer/johndoe"
              readOnly
              className="flex-grow p-3 border rounded-lg text-sm md:text-base bg-white"
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText("https://sbs-realty.com/refer/johndoe")
                addNotification("Referral link copied to clipboard!")
              }}
              className="text-sm md:text-base bg-accent hover:bg-accent/90"
            >
              Copy Link
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-quaternary to-quinary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary">
            <TrendingUp className="h-8 w-8" />
            Bonus Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <Gift className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-lg md:text-xl text-primary">Double Benefits on Referrals:</span>
                <p className="text-base md:text-lg text-tertiary mt-2">
                  Get 500 points and an additional ₹5,000 voucher for every successful referral.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-warning flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-lg md:text-xl text-primary">Time-Limited Campaigns:</span>
                <p className="text-base md:text-lg text-tertiary mt-2">
                  Festive Bonuses, Double Voucher Weekends to earn higher-value rewards.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-success flex-shrink-0 mt-1" />
              <div>
                <span className="font-semibold text-lg md:text-xl text-primary">Gamified Rewards System:</span>
                <p className="text-base md:text-lg text-tertiary mt-2">
                  Track your progress with badges and unlock new rewards as you move up the tiers.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-quinary to-quaternary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-primary">
            <AlertTriangle className="h-8 w-8" />
            Terms and Conditions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-tertiary">
            <li>Points are valid for 12 months from the date they are earned.</li>
            <li>Vouchers are non-transferable and cannot be exchanged for cash.</li>
            <li>Rewards are subject to availability and may change without notice.</li>
            <li>Points and vouchers cannot be transferred between accounts.</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
        <Button size="lg" className="w-full sm:w-auto text-lg md:text-xl bg-primary hover:bg-primary/90">
          Sign Up Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full sm:w-auto text-lg md:text-xl border-primary text-primary hover:bg-primary hover:text-white"
        >
          Browse Properties
        </Button>
      </div>
    </div>
  )
}

