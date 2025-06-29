import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Database, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "text-green-600",
    skills: ["Python", "C++", "SQL", "Django", "Flutter", "Dart"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    color: "text-purple-600",
    skills: ["Deep Learning", "Computer Vision", "TensorFlow", "Scikit-Learn", "RAG"],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    color: "text-orange-600",
    skills: ["Pandas", "NumPy", "Power BI", "MySQL", "MS SQL Server"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    color: "text-red-600",
    skills: ["AWS", "Hugging Face", "Google Colab", "FastAPI"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IconComponent className={`h-5 w-5 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
