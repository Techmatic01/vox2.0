import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  TrendingUp,
  Users,
  Star,
  ExternalLink,
} from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: "fashionforward",
      title: "FashionForward Marketplace",
      category: "E-commerce",
      description: "AI-powered fashion marketplace connecting designers with customers worldwide",
      image: "from-blue-600 to-blue-600",
      icon: Globe,
      metrics: {
        revenue: "$2.5M+",
        users: "50K+",
        growth: "300%",
        rating: "4.8",
      },
      technologies: ["React", "Node.js", "AI/ML", "Stripe", "AWS"],
      features: [
        "AI-powered product recommendations",
        "Real-time inventory management",
        "Multi-vendor marketplace",
        "Advanced search and filtering",
        "Mobile-responsive design",
      ],
      results: [
        "300% increase in user engagement",
        "$2.5M+ in total sales within 6 months",
        "50K+ registered users",
        "4.8/5 average customer rating",
      ],
      testimonial: {
        text: "DevCraft transformed our vision into a thriving marketplace. The AI recommendations alone increased our conversion rate by 40%.",
        author: "Sarah Johnson",
        role: "CEO, FashionForward",
      },
    },
    {
      id: "wealthtracker",
      title: "WealthTracker Pro",
      category: "FinTech",
      description: "Personal finance management app with AI-driven insights and investment tracking",
      image: "from-blue-600 to-blue-600",
      icon: Smartphone,
      metrics: {
        revenue: "$1.2M+",
        users: "75K+",
        growth: "250%",
        rating: "4.9",
      },
      technologies: ["React Native", "Python", "TensorFlow", "Plaid API", "Firebase"],
      features: [
        "Automated expense categorization",
        "Investment portfolio tracking",
        "AI-powered financial insights",
        "Goal setting and tracking",
        "Bank account integration",
      ],
      results: [
        "75K+ app downloads in first year",
        "250% month-over-month growth",
        "$1.2M+ in managed assets",
        "4.9/5 app store rating",
      ],
      testimonial: {
        text: "The AI insights have completely changed how I manage my finances. It's like having a personal financial advisor in my pocket.",
        author: "Michael Park",
        role: "Founder, WealthTracker",
      },
    },
    {
      id: "teamsync",
      title: "TeamSync Platform",
      category: "SaaS",
      description: "Enterprise collaboration platform with advanced project management and team communication",
      image: "from-blue-600 to-blue-600",
      icon: Users,
      metrics: {
        revenue: "$5M+",
        users: "100K+",
        growth: "400%",
        rating: "4.7",
      },
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
      features: [
        "Real-time collaboration tools",
        "Advanced project management",
        "Video conferencing integration",
        "Custom workflow automation",
        "Enterprise security features",
      ],
      results: [
        "100K+ active users across 500+ companies",
        "400% revenue growth year-over-year",
        "99.9% uptime guarantee maintained",
        "Enterprise clients include Fortune 500 companies",
      ],
      testimonial: {
        text: "TeamSync has revolutionized how our distributed team collaborates. Productivity is up 60% since implementation.",
        author: "Lisa Rodriguez",
        role: "CTO, TechCorp",
      },
    },
    {
      id: "healthai",
      title: "HealthAI Diagnostics",
      category: "HealthTech",
      description: "AI-powered medical diagnostic platform for early disease detection",
      image: "from-blue-600 to-blue-600",
      icon: Database,
      metrics: {
        revenue: "$3M+",
        users: "25K+",
        growth: "500%",
        rating: "4.9",
      },
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
      features: [
        "Medical image analysis",
        "Predictive health analytics",
        "HIPAA-compliant infrastructure",
        "Integration with EMR systems",
        "Real-time diagnostic reports",
      ],
      results: [
        "95% diagnostic accuracy rate",
        "25K+ patients diagnosed",
        "500% growth in healthcare partnerships",
        "FDA approval for key diagnostic features",
      ],
      testimonial: {
        text: "HealthAI has transformed our diagnostic capabilities. We're detecting conditions 3x faster with 95% accuracy.",
        author: "Dr. James Wilson",
        role: "Chief Medical Officer",
      },
    },
    {
      id: "ecotrack",
      title: "EcoTrack Sustainability",
      category: "GreenTech",
      description: "Carbon footprint tracking and sustainability management platform for enterprises",
      image: "from-blue-600 to-blue-600",
      icon: Cloud,
      metrics: {
        revenue: "$1.8M+",
        users: "30K+",
        growth: "350%",
        rating: "4.6",
      },
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS", "D3.js"],
      features: [
        "Carbon footprint calculation",
        "Sustainability reporting",
        "Supply chain tracking",
        "ESG compliance monitoring",
        "Interactive data visualization",
      ],
      results: [
        "30K+ users tracking sustainability metrics",
        "350% increase in enterprise adoption",
        "1M+ tons of CO2 tracked and reduced",
        "Partnership with major sustainability organizations",
      ],
      testimonial: {
        text: "EcoTrack helped us achieve our net-zero goals 2 years ahead of schedule. The insights are invaluable.",
        author: "Emma Thompson",
        role: "Sustainability Director",
      },
    },
    {
      id: "smartlearn",
      title: "SmartLearn AI",
      category: "EdTech",
      description: "Personalized learning platform with AI-driven curriculum adaptation",
      image: "from-blue-600 to-blue-600",
      icon: TrendingUp,
      metrics: {
        revenue: "$2.2M+",
        users: "80K+",
        growth: "450%",
        rating: "4.8",
      },
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "WebRTC"],
      features: [
        "Adaptive learning algorithms",
        "Personalized curriculum paths",
        "Real-time progress tracking",
        "Interactive video lessons",
        "Gamification elements",
      ],
      results: [
        "80K+ students using the platform",
        "450% improvement in learning outcomes",
        "95% student satisfaction rate",
        "Partnerships with 200+ educational institutions",
      ],
      testimonial: {
        text: "SmartLearn has revolutionized how our students learn. Test scores improved by 45% in the first semester.",
        author: "Robert Chen",
        role: "Principal, Innovation Academy",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="px-6 py-4 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                DevCraft
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-900 font-medium">
                Portfolio
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Team
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">
                Contact
              </Link>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-6 py-2">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <hr className="border-gray-200" />
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 lg:px-12 pt-16 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Real projects, real results. See how we've transformed ideas into thriving digital products that generate
            millions in revenue.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-0">
                    {/* Project Header */}
                    <div
                      className={`aspect-video bg-gradient-to-br ${project.image} rounded-t-lg flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center">
                        <Icon className="h-20 w-20 text-white mb-4 mx-auto" />
                        <Badge className="bg-blue-100 text-blue-600 text-sm px-3 py-1">{project.category}</Badge>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Project Title & Description */}
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400 mb-1">{project.metrics.revenue}</div>
                          <div className="text-xs text-gray-400">Revenue</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">{project.metrics.users}</div>
                          <div className="text-xs text-gray-400">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400 mb-1">{project.metrics.growth}</div>
                          <div className="text-xs text-gray-400">Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-2xl font-bold text-yellow-400">{project.metrics.rating}</span>
                          </div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {project.results.slice(0, 3).map((result, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-100 rounded-lg p-4 mb-6">
                        <p className="text-gray-600 italic mb-3">"{project.testimonial.text}"</p>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {project.testimonial.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{project.testimonial.author}</div>
                            <div className="text-xs text-gray-400">{project.testimonial.role}</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex space-x-3">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-900 hover:bg-gray-100 bg-transparent"
                        >
                          Live Demo
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

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create the next breakthrough product that transforms your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold bg-transparent whitespace-nowrap"
            >
              Schedule Consultation
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
