import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  Shield,
  Users,
  Clock,
  MessageCircle,
  Phone,
  Globe,
} from "lucide-react"

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Startup Sprint",
      subtitle: "Perfect for MVPs and early-stage startups",
      price: "$15,000",
      duration: "4-6 weeks",
      icon: Rocket,
      gradient: "from-blue-600 to-blue-700",
      popular: false,
      features: [
        "MVP Development",
        "Modern Tech Stack (React/Node.js)",
        "Responsive Design",
        "Basic SEO Setup",
        "2 Rounds of Revisions",
        "30 Days Post-Launch Support",
        "Source Code Ownership",
        "Documentation",
      ],
      includes: [
        "Web Application",
        "Admin Dashboard",
        "User Authentication",
        "Database Setup",
        "Deployment & Hosting Setup",
      ],
      ideal: "Startups, entrepreneurs, small businesses launching their first digital product",
    },
    {
      name: "Growth Accelerator",
      subtitle: "Scale your business with advanced features",
      price: "$35,000",
      duration: "8-12 weeks",
      icon: Zap,
      gradient: "from-blue-600 to-blue-700",
      popular: true,
      features: [
        "Full-Stack Application",
        "Advanced Features & Integrations",
        "AI/ML Integration",
        "Payment Processing",
        "Advanced Analytics",
        "Mobile-Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Security Implementation",
        "3 Rounds of Revisions",
        "60 Days Post-Launch Support",
        "Priority Support",
      ],
      includes: [
        "Web + Mobile App",
        "Admin Dashboard",
        "User Management System",
        "Payment Integration",
        "Analytics Dashboard",
        "API Development",
        "Third-party Integrations",
      ],
      ideal: "Growing businesses, established companies, complex applications with advanced features",
    },
    {
      name: "Enterprise Elite",
      subtitle: "Custom solutions for large-scale operations",
      price: "Custom",
      duration: "12+ weeks",
      icon: Crown,
      gradient: "from-blue-600 to-blue-700",
      popular: false,
      features: [
        "Custom Enterprise Solution",
        "Microservices Architecture",
        "Advanced AI/ML Features",
        "Enterprise Security",
        "Scalable Infrastructure",
        "Custom Integrations",
        "Advanced Analytics & BI",
        "Multi-platform Development",
        "DevOps & CI/CD Setup",
        "Unlimited Revisions",
        "6 Months Support",
        "Dedicated Project Manager",
        "24/7 Priority Support",
        "Training & Documentation",
      ],
      includes: [
        "Multi-platform Applications",
        "Enterprise Dashboard",
        "Advanced User Management",
        "Custom Integrations",
        "Advanced Analytics",
        "API Gateway",
        "Microservices Architecture",
        "Cloud Infrastructure",
      ],
      ideal: "Large enterprises, complex systems, mission-critical applications",
    },
  ]

  const addOns = [
    {
      name: "Mobile App Development",
      description: "Native iOS & Android apps",
      price: "+$12,000",
      icon: Users,
    },
    {
      name: "Advanced AI Features",
      description: "Custom ML models and AI integration",
      price: "+$8,000",
      icon: Zap,
    },
    {
      name: "Enterprise Security",
      description: "Advanced security and compliance",
      price: "+$5,000",
      icon: Shield,
    },
    {
      name: "Priority Support",
      description: "24/7 dedicated support channel",
      price: "+$2,000/month",
      icon: MessageCircle,
    },
  ]

  const faqs = [
    {
      question: "What's included in the base price?",
      answer:
        "Each package includes development, design, testing, deployment, documentation, and post-launch support. You own all source code and assets.",
    },
    {
      question: "How do you handle project changes?",
      answer:
        "Minor changes are included in revision rounds. Major scope changes are discussed and priced separately to ensure transparency.",
    },
    {
      question: "What if I need ongoing maintenance?",
      answer: "We offer maintenance packages starting at $2,000/month including updates, monitoring, and support.",
    },
    {
      question: "Do you work with existing teams?",
      answer: "Yes! We can integrate with your existing team or work independently based on your preferences.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer milestone-based payments. If you're not satisfied at any milestone, we'll work to resolve issues or provide a partial refund.",
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
          <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Portfolio
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Team
          </Link>
          <Link href="/pricing" className="text-gray-900 font-medium">
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
            Simple,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            No hidden fees, no surprises. Choose the package that fits your needs and budget. All packages include
            source code ownership and post-launch support.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon

              return (
                <Card
                  key={index}
                  className={`bg-white border-gray-200 transition-all duration-300 hover:scale-105 group relative shadow-sm hover:shadow-md ${
                    plan.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "hover:border-blue-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-gray-500 text-sm ml-2">one-time</span>}
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{plan.duration}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3 text-sm text-gray-600">
                            <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.includes.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                      <p className="text-sm text-gray-600">{plan.ideal}</p>
                    </div>

                    {/* CTA */}
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-full ${
                        plan.popular ? "shadow-lg shadow-blue-500/25" : ""
                      }`}
                    >
                      {plan.price === "Custom" ? "Get Custom Quote" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Popular Add-ons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your project with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const Icon = addon.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                    <div className="text-lg font-bold text-blue-600">{addon.price}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing and process</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and find the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Schedule a Call</h3>
                <p className="text-gray-700 mb-6">
                  45-minute strategy session to discuss your project requirements and get a custom quote
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Instant Quote</h3>
                <p className="text-gray-700 mb-6">
                  Fill out our project brief and get an estimated timeline and cost within 24 hours
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
                  Get Project Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 50+ successful companies who chose DevCraft to bring their vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              Start Your Project Today
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-semibold bg-transparent whitespace-nowrap"
            >
              View Our Work
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
