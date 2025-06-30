import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Target, Award } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Lung Cancer Detection System with Chatbot for Disease Awareness",
    description: "Hybrid CNN-Transformer Architecture • 92% Accuracy • LLM-based Chatbot for Lung Disease Awareness",
    content:
      "Developed an AI-powered lung cancer detection system using a custom hybrid model combining CNN (ResNet50) and Vision Transformer (ViT), achieving 92% accuracy, surpassing the original dataset's accuracy of 87%. Conducted a research study comparing pretrained models and hybrid architectures for medical image classification. In addition to the detection system, I developed a dedicated LLM-based chatbot aimed at promoting lung disease awareness. The chatbot engages users with informative conversations and helpful guidance on lung health, and it’s integrated into the system through an API built with FastAPI.",
    icon: Code,
    color: "text-red-600",
    tags: ["CNN", "Vision Transformer", "Medical Image Classification", "AI", "Deep Learning", "Chatbot", "FastAPI"],
  },
  {
  "title": "AI-Powered Healthcare Recruitment Assistant with RAG Model",
  "description": "RAG Model with Sentence Transformer • Healthcare Recruitment Optimization",
  "content": "Developed an AI-powered chatbot using the Retrieval-Augmented Generation (RAG) model and Sentence Transformers to match healthcare candidates with suitable roles. The system integrates Whisper for real-time speech-to-text interaction, enabling seamless recruitment through AI-driven job matching algorithms and natural language processing.",
  "icon": Award,
  color: "text-purple-600",
  "tags": ["RAG Model", "Sentence Transformer", "NLP", "Speech Recognition", "Whisper", "Healthcare Recruitment"]
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
    title: "Legal Assistant Chatbot",
    description: "NLP & LLM with RAG Architecture",
    content:
      "Intelligent legal assistant using NLP and LLM technologies with Retrieval-Augmented Generation for contextually relevant legal query responses.",
    icon: Award,
    color: "text-purple-600",
    tags: ["NLP", "LLM", "RAG"],
  },
  {
  "title": "Face Recognition-based Attendance System",
  "description": "This project leverages facial recognition technology and machine learning algorithms to automate attendance tracking. The system uses K-nearest neighbors (KNN) classifier for facial identification and real-time attendance recording.",
  "content": "The system captures images using a webcam, processes the faces to extract key features, and stores face data along with associated labels for future predictions. It uses a KNN classifier to identify users and register their attendance, improving efficiency and security in attendance management. The project includes training the model with 2000 images from 20 people, implementing face detection using OpenCV, and storing results in CSV files for easy tracking.",
  "icon": Award,
  "color": "text-red-600",
  "tags": ["Python", "Machine Learning", "Face Recognition", "Attendance System", "KNN", "OpenCV", "AI"]
  },
  {
  title: "Grocer App with Admin and User Management System",
  description: "A console-based Grocer application built with C++ that implements user management, product catalog, purchasing system, and administrative functionalities. The app provides a text interface to interact with users and manage products.",
  content: 
    "This C++ console app simulates an e-commerce platform where users can sign up, log in, browse products, and make purchases. Admins can manage users, add, delete, and view products. The system supports categories like Drinks, Groceries, Vegetables, Bakery, and Fruits. It provides an easy-to-use text interface, offering real-time product and purchase management. The project demonstrates file handling, object-oriented programming, and user interaction through the console.",
  icon: Code,
  color: "text-red-600",
  tags: ["C++", "OOP","File Handling","Console Application", "Admin Panel", "E-commerce", "Product Management", "User Authentication"]
  },
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
    title: "Wildlife Animal Classification",
    description: "CNN Sequential Model • 76% Accuracy",
    content:
      "Wildlife classification system focused on accurate identification of different animal species using advanced image classification techniques.",
    icon: Target,
    color: "text-orange-600",
    tags: ["CNN", "Wildlife Classification", "Species Recognition"],
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
