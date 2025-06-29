"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export default function FYPSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Final Year Project</h2>
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">AI-Powered Lung Cancer Detection System</CardTitle>
              <CardDescription>
                Advanced Medical Image Classification using Hybrid CNN-Transformer Architecture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Details */}
                <div className="space-y-4">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Designed an AI-powered system training on 7-8 different models, including a custom hybrid model
                      combining CNN (ResNet50) and Vision Transformer (ViT)
                    </li>
                    <li>• Achieved 92% accuracy, outperforming the source dataset's original 87% accuracy</li>
                    <li>
                      • Conducted comprehensive research study comparing pretrained models vs. hybrid architectures
                    </li>
                    <li>
                      • Developed a separate LLM-based chatbot for lung disease awareness and built API using FastAPI
                    </li>
                    <li>
                      • Currently writing a research paper focused on enhancing performance using CNN +
                      Transformer-based models for medical image classification
                    </li>
                  </ul>
                  <div className="flex gap-4 pt-4">
                    <Button className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      Research Paper
                    </Button>
                  </div>
                </div>

                {/* Project Video */}
                <div className="relative">
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333454808810524672?compact=1"
                      height="100%"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title="Lung Cancer Detection System Demo"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Alternative: If LinkedIn embed doesn't work, use a placeholder with demo button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() =>
                        window.open("https://www.linkedin.com/feed/update/urn:li:ugcPost:7333454808810524672", "_blank")
                      }
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* Technical Stack */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Technical Stack & Achievements</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Models Used</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ResNet50 + ViT Hybrid</li>
                      <li>• CNN Sequential Models</li>
                      <li>• Transfer Learning Models</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Technologies</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• TensorFlow/Keras</li>
                      <li>• FastAPI</li>
                      <li>• LLM Integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Results</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 92% Accuracy Achieved</li>
                      <li>• 5% Improvement over baseline</li>
                      <li>• Research Paper in Progress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
