import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Brain, Code, Target, Award } from "lucide-react"

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "Recruitment Xperts Pakistan",
    location: "Lahore, Pakistan (Onsite)",
    period: "Jun 2025 - Present",
    icon: Briefcase,
    color: "text-green-600",
    badge: "secondary",
    responsibilities: [
      "Built an AI-powered healthcare recruitment chatbot using RAG architecture with Google Gemini, TF-IDF, FAISS, and Sentence Transformers",
      "Integrated Whisper AI and pyttsx3 for end-to-end voice-based interaction, enabling real-time candidate engagement",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Center of Excellence – Artificial Intelligence",
    location: "Islamabad, Pakistan (Onsite)",
    period: "Jul 2024 - Aug 2024",
    icon: Brain,
    color: "text-purple-600",
    badge: "outline",
    responsibilities: [
      "Built a plant disease diagnosis app using machine learning and image recognition",
      "Achieved 95% accuracy with real-time treatment suggestions during a 2-month internship",
    ],
  },
  {
    title: "Chatbot Developer",
    company: "UrduX",
    location: "Islamabad, Pakistan (Hybrid)",
    period: "Jul 2024 - Sep 2024",
    icon: Code,
    color: "text-orange-600",
    badge: "outline",
    responsibilities: [
      "Developed a Legal Assistant Chatbot using NLP, LLMs, and RAG for accurate, context-aware legal query responses",
      "Deployed on Hugging Face, enhancing skills in chatbot development and cloud-based AI deployment",
    ],
  },
  {
    title: "Generative AI Intern",
    company: "Insafdaar",
    location: "Islamabad, Pakistan (Remote)",
    period: "Mar 2024 - Jun 2024",
    icon: Target,
    color: "text-red-600",
    badge: "outline",
    responsibilities: [
      "Worked as a task-based intern on Generative AI projects, completing hands-on tasks in AI development",
      "Gained practical experience in generative models, data analysis, and real-world problem-solving",
    ],
  },
  {
    title: "Core Team Member, Tech Team Member",
    company: "AI CLUB",
    location: "",
    period: "Aug 2023 - Present",
    icon: Award,
    color: "text-teal-600",
    badge: "outline",
    responsibilities: [],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${exp.color}`} />
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>
                          {exp.company} {exp.location && `• ${exp.location}`}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={exp.badge as any}>{exp.period}</Badge>
                  </div>
                </CardHeader>
                {exp.responsibilities.length > 0 && (
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>• {resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
