import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Target } from "lucide-react"

const achievements = [
  {
    title: "NETSOL Technologies Hackathon",
    position: "Top 68 out of 250+ teams",
    description:
      "Successfully reached the top 68 teams out of 250+ participants in the prestigious NETSOL Technologies Hackathon.",
    icon: Target,
    color: "text-green-600",
    badge: "Top 68/250+",
  },
  {
    title: "Codex Programming Competition",
    position: "3rd Position",
    description:
      "Participated in Codex and secured third position, demonstrating strong problem-solving and technical programming skills.",
    icon: Medal,
    color: "text-orange-600",
    badge: "3rd Place",
  },
  {
    title: "Ripah Computing Challenge Cup",
    position: "5th Position",
    description:
      "Competed against top teams and secured fifth position, showcasing exceptional problem-solving skills and technical expertise.",
    icon: Trophy,
    color: "text-yellow-600",
    badge: "5th Place",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & Competitions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      <div>
                        <CardTitle>{achievement.title}</CardTitle>
                        <CardDescription>{achievement.position}</CardDescription>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800"
                    >
                      {achievement.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
