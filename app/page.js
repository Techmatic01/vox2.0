"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Zap,
  Star,
  Users,
  ChevronDown,
  ChevronUp,
  Play,
  Award,
  TrendingUp,
  Shield,
  Rocket,
  Phone,
} from "lucide-react"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How fast can you deliver a complete product?",
      answer:
        "We deliver MVPs in 2-4 weeks and full products in 6-12 weeks, depending on complexity. Our streamlined development process cuts traditional timelines by 60%.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! We offer 24/7 monitoring, regular updates, and dedicated support. Think of us as your extended tech team.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "React, Next.js, Node.js, Python, AI/ML integration, cloud infrastructure (AWS, Vercel), and modern design systems.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We integrate seamlessly with your team or work independently. We adapt to your workflow and communication preferences.",
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Clean Background with Blue Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Subtle gradient lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            VoxScale
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Portfolio
          </Link>
          <Link href="#team" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Team
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            About
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Reviews
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900 font-medium rounded-full">
            LOGIN
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-4 py-2 flex items-center whitespace-nowrap text-sm">
            START BUILD
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto pt-16 pb-20">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight text-gray-900">
              Launch Beautiful,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Smart Software
              </span>
              <br />
              Faster Than Ever.
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We blend design, engineering, and AI to bring your idea to life in{" "}
              <span className="text-blue-600 font-semibold">days, not months</span>. Transform your vision into a
              digital asset that sells itself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center whitespace-nowrap">
                START YOUR BUILD
                <Rocket className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold bg-transparent flex items-center justify-center whitespace-nowrap"
              >
                SEE OUR WORK
                <Play className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Top Rated Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">60% Faster Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
              alt="VoxScale Dashboard Preview"
              className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="max-w-6xl mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <p className="text-gray-700 font-medium mb-2">Projects Launched</p>
                <p className="text-sm text-gray-500">From startups to enterprise</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={99} suffix=".9%" />
                </div>
                <p className="text-gray-700 font-medium mb-2">Uptime Guarantee</p>
                <p className="text-sm text-gray-500">Rock-solid infrastructure</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-gray-700 font-medium mb-2">Happy Clients</p>
                <p className="text-sm text-gray-500">Backed by 5-star reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Specialize In */}
        <div id="services" className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">What We Specialize In</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and proven methodologies to build software that scales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
                  <p className="text-sm text-blue-600">Modern & Scalable</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                React, Next.js, and cutting-edge frameworks to build lightning-fast web applications that convert.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  TypeScript
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mobile Apps</h3>
                  <p className="text-sm text-blue-600">Native & Cross-Platform</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                iOS, Android, and React Native apps that deliver exceptional user experiences across all devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  React Native
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Swift
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Kotlin
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Integration</h3>
                  <p className="text-sm text-blue-600">Smart & Automated</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Custom AI solutions, OpenAI integration, and machine learning features that give you a competitive edge.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  OpenAI
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Python
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  TensorFlow
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Backend Systems</h3>
                  <p className="text-sm text-blue-600">Robust & Scalable</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Node.js, Python APIs, and cloud infrastructure that handles millions of requests with ease.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Python
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  AWS
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">UI/UX Design</h3>
                  <p className="text-sm text-blue-600">Beautiful & Intuitive</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                User-centered design that converts visitors into customers with stunning interfaces and seamless
                experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Figma
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Design Systems
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  User Research
                </Badge>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Cloud & DevOps</h3>
                  <p className="text-sm text-blue-600">Secure & Reliable</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                AWS, Docker, and CI/CD pipelines that ensure your applications are secure, fast, and always available.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  AWS
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  Docker
                </Badge>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  CI/CD
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Preview */}
        <div id="portfolio" className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Recent Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we've transformed ideas into thriving digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
                    alt="FashionForward Marketplace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">E-commerce</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    FashionForward Marketplace
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    AI-powered fashion marketplace with 300% increase in user engagement and $2M+ in sales.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        AI
                      </Badge>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
                    alt="WealthTracker Pro"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">FinTech</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    WealthTracker Pro
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Personal finance app with 50K+ downloads and 4.8-star rating on app stores.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        React Native
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        Python
                      </Badge>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                    alt="TeamSync Platform"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 text-white backdrop-blur-sm">SaaS</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    TeamSync Platform
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Enterprise collaboration tool serving 10K+ teams with 99.9% uptime guarantee.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        AWS
                      </Badge>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-semibold bg-transparent flex items-center whitespace-nowrap"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </Button>
          </div>
        </div>

        {/* Meet Our Team */}
        <div id="team" className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Meet Our Dream Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary engineers, design wizards, and tech whisperers who make magic happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group">
                  <img
                    src="/memoji1.png"
                    alt="Alex Sterling"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Alex Sterling</h3>
                <p className="text-blue-600 font-semibold mb-3">Vision Engineer</p>
                <p className="text-gray-600 text-sm mb-4">"Code is poetry, and every line should tell a story."</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    AI
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    Leadership
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group">
                  <img
                    src="/memoji2.png"
                    alt="Maya Chen"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Maya Chen</h3>
                <p className="text-blue-600 font-semibold mb-3">Design Whisperer</p>
                <p className="text-gray-600 text-sm mb-4">"Great design is invisible until it's not there."</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    UI/UX
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    Figma
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    Branding
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group">
                  <img
                    src="/memoji3.png"
                    alt="Raj Kumar"
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Raj Kumar</h3>
                <p className="text-blue-600 font-semibold mb-3">Tech Whisperer</p>
                <p className="text-gray-600 text-sm mb-4">"Scalability isn't just code, it's architecture thinking."</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    AWS
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    DevOps
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What Clients Say */}
        <div id="testimonials" className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">What Clients Say</h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-blue-600 fill-current" />
              ))}
              <span className="text-xl font-semibold text-blue-600 ml-2">4.9/5</span>
            </div>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">Top Rated Client Feedback</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">CEO, TechStart Inc.</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-blue-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "VoxScale transformed our idea into a $2M business in just 6 months. Their AI integration was
                  game-changing."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face"
                      alt="Michael Park"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Park</h4>
                    <p className="text-sm text-gray-600">Founder, FinanceFlow</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-blue-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Fastest development team I've ever worked with. They delivered our MVP in 3 weeks, not 3 months."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=48&h=48&fit=crop&crop=face"
                      alt="Lisa Rodriguez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lisa Rodriguez</h4>
                    <p className="text-sm text-gray-600">CTO, EcoTech Solutions</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-blue-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Not just developers, but true partners. They understood our vision and made it better than we
                  imagined."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA with FAQ */}
        <div id="contact" className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
              Ready to Launch Bold,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Beautiful Software
              </span>{" "}
              That Sells Itself?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Let us help you turn your product idea into a digital asset that generates revenue from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap">
                LET'S ENGINEER SUCCESS
                <Rocket className="ml-3 h-5 w-5 flex-shrink-0" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-bold bg-transparent flex items-center justify-center whitespace-nowrap"
              >
                SEE PRICING
                <ArrowRight className="ml-3 h-5 w-5 flex-shrink-0" />
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h3>
            <FAQ />
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Book a Strategy Call</h3>
                <p className="text-gray-700 mb-6">
                  45-minute deep dive into your project with our technical co-founder
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-2 flex items-center justify-center">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quick Project Estimate</h3>
                <p className="text-gray-700 mb-6">Get instant pricing and timeline for your project idea</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full py-2 flex items-center justify-center">
                  Get Estimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pre-Footer CTA Section */}
        <div className="max-w-6xl mx-auto py-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join 150+ successful companies who chose VoxScale to bring their vision to life. Let's build something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold flex items-center justify-center whitespace-nowrap">
                Start Your Project Today
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold bg-transparent flex items-center justify-center whitespace-nowrap"
              >
                Schedule Free Consultation
                <Phone className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  VoxScale
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
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
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
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full py-2 flex items-center justify-center text-sm">
                Start Project
              </Button>
              <p className="text-sm text-gray-500">hello@voxscale.com</p>
              <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 VoxScale. All rights reserved.</p>
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
