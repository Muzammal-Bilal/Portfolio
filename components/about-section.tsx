import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am a passionate Computer Science graduate specializing in Artificial Intelligence, Machine Learning,
                and Data Science. With hands-on experience in developing innovative solutions, I have successfully
                contributed to impactful projects including advanced healthcare systems and intelligent applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across Python, C++, database management, and cloud technologies. I am committed to
                delivering cutting-edge tech solutions and continuously learning new technologies to solve real-world
                problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
