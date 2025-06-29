import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI and
          Machine Learning.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="flex items-center gap-2" asChild>
            <a href="mailto:Muzammalbilal36@gmail.com">
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
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
        </div>
      </div>
    </section>
  )
}
