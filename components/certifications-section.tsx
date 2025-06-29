import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  { name: "IBM AI Engineering Professional Certificate", provider: "IBM" },
  { name: "IBM Data Science Professional Certificate", provider: "IBM" },
  { name: "Machine Learning Specialization", provider: "Stanford University" },
  { name: "Google Advanced Data Analytics Professional Certificate", provider: "Google" },
  { name: "Google Business Intelligence Professional Certificate", provider: "Google" },
  { name: "AWS Cloud Developing", provider: "Amazon Web Services (AWS)" },
]

export default function CertificationsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.provider}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
