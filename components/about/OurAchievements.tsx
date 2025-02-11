import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Award, TrendingUp } from "lucide-react"

export default function OurAchievements() {
  const achievements = [
    { icon: <Home className="w-12 h-12 text-primary" />, number: "500+", text: "Properties Sold" },
    { icon: <Users className="w-12 h-12 text-primary" />, number: "1000+", text: "Happy Customers" },
    { icon: <Award className="w-12 h-12 text-primary" />, number: "50+", text: "Awards Won" },
    { icon: <TrendingUp className="w-12 h-12 text-primary" />, number: "5+", text: "Years of Excellence" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {achievement.icon}
                <h3 className="text-4xl font-bold my-4">{achievement.number}</h3>
                <p className="text-lg">{achievement.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

