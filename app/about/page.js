"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Globe,
  Users,
  Target,
  Zap,
  Heart,
  Rocket,
  Award,
  MapPin,
  TrendingUp,
  Phone,
  Play,
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

// 3D Moving Icon Component
function Moving3DIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main floating cube */}
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl animate-float transform rotate-12 hover:rotate-6 transition-transform duration-1000">
          <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl opacity-80"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="h-12 w-12 text-white animate-pulse" />
          </div>
        </div>

        {/* Orbiting elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full animate-pulse shadow-lg"></div>
        <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full animate-ping shadow-lg"></div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  )
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Vision Engineer",
      image: "/memoji1.png",
      quote: "I design for clarity.",
      bio: "Former Tesla engineer who believes software should be as elegant as it is powerful.",
    },
    {
      name: "Marcus Rivera",
      role: "Chief Technology Officer",
      image: "/memoji2.png",
      quote: "I automate chaos.",
      bio: "Ex-Google architect obsessed with building systems that scale effortlessly.",
    },
    {
      name: "Elena Kowalski",
      role: "Head of Design",
      image: "/memoji3.png",
      quote: "Beauty drives behavior.",
      bio: "Apple design alum who crafts interfaces that users fall in love with.",
    },
    {
      name: "David Kim",
      role: "AI & Machine Learning Lead",
      image: "/memoji4.png",
      quote: "Intelligence amplifies intention.",
      bio: "Stanford PhD turning cutting-edge research into practical business solutions.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Growth",
      image: "/memoji5.png",
      quote: "Growth is an art, not an accident.",
      bio: "Former Stripe growth lead who turns products into movements.",
    },
    {
      name: "James Thompson",
      role: "Senior Full-Stack Engineer",
      image: "/memoji6.png",
      quote: "Code is poetry in motion.",
      bio: "Netflix veteran who writes code that's as beautiful as it is functional.",
    },
  ]

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-hidden">
      {/* Subtle Background Effects - No Grid Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            VoxScale
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Portfolio
          </Link>
          <Link href="/about" className="text-gray-900 font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors font-medium">
            Contact
          </Link>
        </div>

        <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center whitespace-nowrap">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
        </Button>
      </nav>

      {/* Hero Section - Text Left, 3D Icon Right */}
      <div className="relative z-10 px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                We Engineer{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                VoxScale transforms ambitious ideas into powerful digital realities. We're not just developers—we're
                digital architects who build systems that think, scale, and succeed.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Founded by ex-Google, Tesla, and Apple engineers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">200+ successful deployments across 3 continents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">98% client satisfaction with 60% faster delivery</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap">
                  Our Story
                  <Target className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-blue-300 px-8 py-3 rounded-full font-semibold bg-transparent shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap"
                >
                  Meet Our Team
                  <Users className="ml-2 h-5 w-5 flex-shrink-0" />
                </Button>
              </div>
            </div>

            {/* Right Side - 3D Moving Icon */}
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="h-96 relative">
                <Moving3DIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 px-6 lg:px-12 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Rocket className="h-8 w-8 text-blue-500" />
                <div className="text-4xl font-bold text-gray-900">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
              </div>
              <p className="text-gray-600 font-medium">Deployments Launched</p>
              <p className="text-sm text-gray-500">Systems that scale globally</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div className="text-4xl font-bold text-gray-900">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
              </div>
              <p className="text-gray-600 font-medium">Client Return Rate</p>
              <p className="text-sm text-gray-500">They come back for more</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
                <div className="text-lg font-bold text-gray-900">NY • London • Singapore</div>
              </div>
              <p className="text-gray-600 font-medium">Global Presence</p>
              <p className="text-sm text-gray-500">Building across time zones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">Our Philosophy</h2>
            <div className="text-2xl lg:text-3xl text-gray-600 space-y-4 max-w-4xl mx-auto">
              <p>
                <span className="text-blue-400">Speed</span> meets <span className="text-blue-400">design</span>.
              </p>
              <p>
                <span className="text-blue-400">AI</span> meets <span className="text-blue-400">intuition</span>.
              </p>
              <p>
                <span className="text-blue-400">Code</span> meets <span className="text-blue-400">business</span>.
              </p>
            </div>
            <p className="text-xl text-gray-500 mt-8 max-w-3xl mx-auto leading-relaxed">
              We build beautiful, functional systems that do the hard work — so your ideas move faster.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Speed meets Design</h3>
              <p className="text-gray-600">
                Lightning-fast development without compromising on beautiful, intuitive design.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">AI meets Intuition</h3>
              <p className="text-gray-600">
                Cutting-edge AI technology guided by human insight and business understanding.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Code meets Business</h3>
              <p className="text-gray-600">
                Technical excellence aligned with real business outcomes and measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - No Skill Capsules */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">Brains Behind VoxScale</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              The minds that turn impossible ideas into inevitable realities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-lg hover:shadow-blue-500/20"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-blue-400 font-bold text-lg italic">"{member.quote}"</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Matching White Theme */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core values that shape everything we build and every relationship we forge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Obsessive Craft</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't ship good enough. We ship extraordinary. Every pixel, every line of code, every interaction
                matters.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Speed Without Compromise</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast doesn't mean broken. We've mastered the art of building quickly while maintaining the highest
                standards.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Client Success Obsession</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We don't just deliver projects — we deliver outcomes that transform
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Beautiful</span>{" "}
            Together.
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether you're launching a product, automating a workflow, or scaling a startup — we're your secret weapon.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap">
              Book Free Strategy Call
              <Phone className="ml-3 h-5 w-5 flex-shrink-0" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-blue-300 text-lg px-8 py-4 rounded-full font-bold bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap"
            >
              Explore VoxBot Demo
              <Play className="ml-3 h-5 w-5 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Brand Line */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-400 italic">
              VoxScale isn't a team — it's a movement for smarter, simpler software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                VoxScale
              </span>
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
                  <Target className="h-4 w-4" />
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
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full mb-4 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center whitespace-nowrap">
                Start Project
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
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
