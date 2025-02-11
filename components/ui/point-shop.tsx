"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, TrendingUp } from "lucide-react"

const shopItems = [
  {
    id: 1,
    name: "Premium Sofa Set",
    points: 5000,
    image: "/placeholder.svg?height=200&width=200",
    description: "A luxurious sofa set perfect for your living room.",
  },
  {
    id: 2,
    name: "Luxury Dining Table",
    points: 3000,
    image: "/placeholder.svg?height=200&width=200",
    description: "A stunning dining table to impress your guests.",
  },
  {
    id: 3,
    name: "Designer Wall Art",
    points: 2000,
    image: "/placeholder.svg?height=200&width=200",
    description: "Unique and stylish wall art to enhance your home decor.",
  },
  {
    id: 4,
    name: "Smart Home System",
    points: 4000,
    image: "/placeholder.svg?height=200&width=200",
    description: "Control your home appliances with ease using this smart system.",
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    points: 2500,
    image: "/placeholder.svg?height=200&width=200",
    description: "Improve your posture and comfort with this ergonomic chair.",
  },
  {
    id: 6,
    name: "Modern Floor Lamp",
    points: 1500,
    image: "/placeholder.svg?height=200&width=200",
    description: "A stylish floor lamp to add a touch of elegance to your space.",
  },
]

export default function PointShop() {
  const [userPoints, setUserPoints] = useState(7500) // This should come from your user data
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState(shopItems)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const filtered = shopItems.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredItems(filtered)
  }, [searchTerm])

  const addNotification = (message) => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id))
    }, 5000)
  }

  const handleRedeem = (itemPoints: number) => {
    if (userPoints >= itemPoints) {
      setUserPoints(userPoints - itemPoints)
      addNotification(`Item redeemed successfully! You now have ${userPoints - itemPoints} points.`)
    } else {
      addNotification("Not enough points to redeem this item.")
    }
  }

  return (
    <div className="space-y-8">
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

      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">S.B.S REALTY Point Shop</h2>
        <p className="text-xl md:text-2xl lg:text-3xl opacity-90">
          Redeem your points for exclusive home decor and services!
        </p>
      </div>

      <Card className="bg-gradient-to-br from-quinary to-quaternary border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-primary flex items-center gap-3">
            <ShoppingBag className="h-8 w-8" />
            Your Current Points
          </CardTitle>
          <CardDescription className="text-lg md:text-xl">
            <span className="font-bold text-3xl md:text-4xl text-secondary">{userPoints}</span> points available
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="mb-6">
        <Label htmlFor="search" className="text-lg md:text-xl text-primary mb-2 block">
          Search Items
        </Label>
        <div className="relative">
          <Input
            id="search"
            type="text"
            placeholder="Search for items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-base md:text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Card className="flex flex-col h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 md:h-56 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-base md:text-lg text-tertiary">{item.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Badge variant="secondary" className="text-base md:text-lg bg-quaternary text-primary px-4 py-2">
                    {item.points} points
                  </Badge>
                  <Button
                    onClick={() => handleRedeem(item.points)}
                    className="w-full sm:w-auto text-base md:text-lg bg-accent hover:bg-accent/90 transition-colors duration-300"
                    disabled={userPoints < item.points}
                  >
                    {userPoints >= item.points ? "Redeem" : "Not Enough Points"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Card className="bg-gradient-to-br from-quaternary to-quinary border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-primary flex items-center gap-3">
            <TrendingUp className="h-8 w-8" />
            How to Earn More Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-tertiary">
            <li>Purchase a property: Earn 10 points for every ₹1 lakh spent</li>
            <li>Refer a friend: Get 500 bonus points for every successful referral</li>
            <li>Engage with our social media: Participate in campaigns for bonus points</li>
            <li>Complete your profile: Earn 50 points</li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          className="w-full sm:w-auto text-lg md:text-xl bg-primary hover:bg-primary/90 transition-colors duration-300"
        >
          View All Rewards
        </Button>
      </div>
    </div>
  )
}

