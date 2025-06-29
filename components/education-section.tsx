import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function EducationSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription>Bahria University • CGPA: 3.45</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>September 2021 - June 2025</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
