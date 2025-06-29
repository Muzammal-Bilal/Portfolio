import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Target, Award } from "lucide-react"

const projects = [
  {
    title: "Traffic Sign Detection",
    description: "CNN Sequential Model • 81% Accuracy",
    content:
      "Developed a Traffic Sign Detection system using deep learning and CNNs for enhanced image classification and traffic sign recognition.",
    icon: Code,
    color: "text-red-600",
    tags: ["CNN", "Deep Learning", "Image Classification"],
  },
  {
    title: "Plant Identification & Diagnosis",
    description: "ResNet-50 Model • 95% Accuracy",
    content:
      "Comprehensive plant identification, diagnosis, and treatment system utilizing data augmentation to balance classes and prevent overfitting.",
    icon: Brain,
    color: "text-green-600",
    tags: ["ResNet-50", "Data Augmentation", "Computer Vision"],
  },
  {
    title: "Wildlife Animal Classification",
    description: "CNN Sequential Model • 76% Accuracy",
    content:
      "Wildlife classification system focused on accurate identification of different animal species using advanced image classification techniques.",
    icon: Target,
    color: "text-orange-600",
    tags: ["CNN", "Wildlife Classification", "Species Recognition"],
  },
  {
    title: "Legal Assistant Chatbot",
    description: "NLP & LLM with RAG Architecture",
    content:
      "Intelligent legal assistant using NLP and LLM technologies with Retrieval-Augmented Generation for contextually relevant legal query responses.",
    icon: Award,
    color: "text-purple-600",
    tags: ["NLP", "LLM", "RAG"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconComponent className={`h-5 w-5 ${project.color}`} />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
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
