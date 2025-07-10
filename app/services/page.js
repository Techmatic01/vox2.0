import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Cloud,
  Zap,
  Palette,
  Shield,
  Rocket,
  CheckCircle,
  Users,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Modern, scalable web applications built with cutting-edge technologies",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Custom CMS Development",
        "API Integration & Development",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      pricing: "Starting at $15,000",
      timeline: "4-8 weeks",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native Development",
        "Native iOS & Android Apps",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Redux", "Expo"],
      pricing: "Starting at $20,000",
      timeline: "6-12 weeks",
      color: "blue",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      features: [
        "AWS/Azure Cloud Setup",
        "CI/CD Pipeline Implementation",
        "Container Orchestration",
        "Monitoring & Analytics",
        "Security & Compliance",
        "Auto-scaling Solutions",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring"],
      pricing: "Starting at $10,000",
      timeline: "2-6 weeks",
      color: "blue",
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Intelligent features powered by artificial intelligence and machine learning",
      features: [
        "Custom AI Model Development",
        "OpenAI API Integration",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Chatbot Development",
      ],
      technologies: ["Python", "TensorFlow", "OpenAI", "Langchain", "FastAPI", "Jupyter"],
      pricing: "Starting at $25,000",
      timeline: "8-16 weeks",
      color: "blue",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered design that converts visitors into customers",
      features: [
        "User Experience Research",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Brand Identity Design",
        "Usability Testing",
        "Design System Creation",
      ],
      technologies: ["Figma", "Adobe Creative Suite", "Principle", "InVision", "Miro", "Sketch"],
      pricing: "Starting at $8,000",
      timeline: "3-6 weeks",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance solutions",
      features: [
        "Security Audits",
        "GDPR/CCPA Compliance",
        "Penetration Testing",
        "Data Encryption",
        "Authentication Systems",
        "Security Monitoring",
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "Vault", "OWASP", "Compliance Tools"],
      pricing: "Starting at $12,000",
      timeline: "4-8 weeks",
      color: "blue",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            DevCraft
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-900 font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Portfolio
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Team
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-6 py-2">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 lg:px-12 pt-16 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            From concept to launch, we provide end-to-end software development services that scale with your business
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.technologies.map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Starting Price:</span>
                                <span className="font-semibold text-blue-600">{service.pricing}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">Timeline:</span>
                                <span className="font-semibold text-blue-600">{service.timeline}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, speed, and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
              { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", description: "Building with modern technologies" },
              { step: "04", title: "Launch", description: "Deployment and ongoing support" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              Schedule Consultation
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-semibold bg-transparent whitespace-nowrap"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  DevCraft
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We blend design, engineering, and AI to bring your ideas to life faster than ever.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2 rounded-full">
                  <Globe className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2 rounded-full">
                  <Users className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2 rounded-full">
                  <Code className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-6">Get Started</h3>
              <p className="text-gray-400 mb-4">Ready to build something amazing?</p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full mb-4">
                Start Project
              </Button>
              <p className="text-sm text-gray-500">hello@devcraft.com</p>
              <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 DevCraft. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
