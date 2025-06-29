import { Linkedin, Github, Award } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Muzammal Bilal</h1>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#achievements" className="text-gray-600 hover:text-gray-900 transition-colors">
              Achievements
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-200">
              <a
                href="https://www.linkedin.com/in/muzammal-bilal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/muzammalbilal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.credly.com/users/muzammal-bilal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors"
                title="Credly Profile"
              >
                <Award className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
