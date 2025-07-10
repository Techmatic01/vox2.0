import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Linkedin, Twitter, Github, Mail, Award, Users, Coffee, Zap, Globe } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Sterling",
      role: "Vision Engineer & CEO",
      title: "The Architect",
      bio: "Former Google engineer with 12+ years building scalable systems. Believes code is poetry and every line should tell a story.",
      image: "AS",
      gradient: "from-blue-500 to-blue-600",
      skills: ["React", "Node.js", "AI/ML", "Leadership", "System Design"],
      achievements: [
        "Led engineering teams at Google and Meta",
        "Built systems serving 100M+ users",
        "Published 15+ technical papers",
        "TEDx speaker on AI and software architecture",
      ],
      quote: "Great software isn't just functional—it's transformational.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "alex@devcraft.com",
      },
      stats: {
        projects: "50+",
        experience: "12 years",
        teamSize: "100+",
      },
    },
    {
      name: "Maya Chen",
      role: "Design Whisperer & CPO",
      title: "The Visionary",
      bio: "Award-winning designer who transforms complex problems into beautiful, intuitive experiences. Former design lead at Airbnb.",
      image: "MC",
      gradient: "from-blue-600 to-blue-700",
      skills: ["UI/UX", "Design Systems", "Figma", "Branding", "User Research"],
      achievements: [
        "Design lead at Airbnb for 5 years",
        "Winner of 8 international design awards",
        "Designed products used by 50M+ people",
        "Mentor at top design bootcamps",
      ],
      quote: "Design is not just how it looks—it's how it works and feels.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "maya@devcraft.com",
      },
      stats: {
        projects: "200+",
        experience: "10 years",
        awards: "8",
      },
    },
    {
      name: "Raj Kumar",
      role: "Tech Whisperer & CTO",
      title: "The Optimizer",
      bio: "Infrastructure wizard who makes impossible scalability challenges look easy. Ex-Netflix engineer who handled global streaming architecture.",
      image: "RK",
      gradient: "from-blue-700 to-blue-800",
      skills: ["Node.js", "Python", "AWS", "DevOps", "Microservices"],
      achievements: [
        "Senior engineer at Netflix for 6 years",
        "Built infrastructure serving 200M+ users",
        "Expert in cloud architecture and DevOps",
        "Open source contributor with 10K+ GitHub stars",
      ],
      quote: "Scalability isn't just code—it's architectural thinking.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "raj@devcraft.com",
      },
      stats: {
        projects: "75+",
        experience: "11 years",
        uptime: "99.9%",
      },
    },
    {
      name: "Sophie Martinez",
      role: "AI Architect & Head of Innovation",
      title: "The Futurist",
      bio: "PhD in Machine Learning from Stanford. Transforms cutting-edge AI research into practical business solutions that drive real value.",
      image: "SM",
      gradient: "from-blue-500 to-blue-700",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      achievements: [
        "PhD in ML from Stanford University",
        "Published 25+ research papers",
        "Former AI researcher at OpenAI",
        "Built AI systems processing 1B+ data points",
      ],
      quote: "AI isn't magic—it's mathematics applied with purpose.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sophie@devcraft.com",
      },
      stats: {
        projects: "30+",
        experience: "8 years",
        papers: "25+",
      },
    },
    {
      name: "David Kim",
      role: "Mobile Maestro & Lead Developer",
      title: "The Craftsman",
      bio: "Mobile development expert who creates apps that users love. Former lead at Uber, built features used by millions of riders daily.",
      image: "DK",
      gradient: "from-blue-600 to-blue-800",
      skills: ["React Native", "Swift", "Kotlin", "Flutter", "Mobile UX"],
      achievements: [
        "Lead mobile developer at Uber for 4 years",
        "Built features used by 100M+ riders",
        "Expert in cross-platform development",
        "Speaker at major mobile conferences",
      ],
      quote: "Great mobile apps feel like natural extensions of human capability.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "david@devcraft.com",
      },
      stats: {
        projects: "60+",
        experience: "9 years",
        downloads: "100M+",
      },
    },
    {
      name: "Emma Thompson",
      role: "Growth Hacker & Head of Strategy",
      title: "The Catalyst",
      bio: "Data-driven growth expert who turns products into phenomena. Former growth lead at Stripe, scaled revenue from $10M to $100M.",
      image: "ET",
      gradient: "from-blue-500 to-blue-800",
      skills: ["Growth Hacking", "Analytics", "A/B Testing", "Marketing", "Strategy"],
      achievements: [
        "Growth lead at Stripe for 3 years",
        "Scaled revenue from $10M to $100M",
        "Expert in product-led growth",
        "Advisor to 20+ startups",
      ],
      quote: "Growth isn't about tricks—it's about creating genuine value.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "emma@devcraft.com",
      },
      stats: {
        projects: "40+",
        experience: "7 years",
        growth: "1000%",
      },
    },
  ]

  const companyStats = [
    { label: "Team Members", value: "25+", icon: Users },
    { label: "Years Combined Experience", value: "150+", icon: Award },
    { label: "Coffee Consumed (Gallons)", value: "2,847", icon: Coffee },
    { label: "Lines of Code Written", value: "5M+", icon: Code },
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
          <Link href="/team" className="text-gray-900 font-medium">
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Dream Team</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Visionary engineers, design wizards, and tech whisperers who make magic happen. We're not just
            developers—we're digital architects building the future.
          </p>
        </div>
      </div>

      {/* Company Stats */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-2xl font-bold text-white">{member.image}</span>
                    </div>

                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                        <Badge className="bg-gray-100 text-gray-700 text-xs">{member.title}</Badge>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>

                      {/* Quote */}
                      <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
                        <p className="text-blue-600 italic">"{member.quote}"</p>
                      </blockquote>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(member.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {member.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 p-2 rounded-full">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 p-2 rounded-full">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 p-2 rounded-full">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 p-2 rounded-full">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe great software comes from great teams. Here's what makes DevCraft special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation First</h3>
                <p className="text-gray-600">
                  We're always exploring new technologies and methodologies to stay ahead of the curve.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Collaborative Spirit</h3>
                <p className="text-gray-600">
                  We believe the best solutions come from diverse perspectives working together.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 text-center shadow-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence Driven</h3>
                <p className="text-gray-600">
                  We're not satisfied with good enough. We strive for exceptional in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Want to Work With Us?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for exceptional talent to join our team. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full font-semibold bg-transparent whitespace-nowrap"
            >
              Start a Project
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
