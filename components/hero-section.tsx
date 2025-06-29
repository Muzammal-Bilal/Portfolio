import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, Award } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Muzammal Bilal</h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">Machine Learning Engineer & AI Specialist</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Results-driven Computer Science graduate with a passion for Artificial Intelligence, Machine Learning,
                and Data Science. Successfully led impactful projects including Lung Cancer Detection Systems and
                AI-powered applications.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Lahore, Punjab</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+923120233422</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>Muzammalbilal36@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 bg-transparent hover:bg-blue-50 hover:border-blue-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/muzammal-bilal-51318b24a/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 bg-transparent hover:bg-gray-50 hover:border-gray-400"
                  asChild
                >
                  <a href="https://github.com/Muzammal-Bilal" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 bg-transparent hover:bg-orange-50 hover:border-orange-300"
                  asChild
                >
                  <a href="https://www.credly.com/users/muzammal-bilal.4200b977" target="_blank" rel="noopener noreferrer">
                    <Award className="h-4 w-4" />
                    Credly
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/muzammal.jpg?height=320&width=320"
                    alt="Muzammal Bilal - Machine Learning Engineer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
