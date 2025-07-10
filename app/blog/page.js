import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Calendar,
  Clock,
  User,
  TrendingUp,
  Zap,
  Brain,
  Rocket,
  Shield,
  Globe,
  Users,
} from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Software Development: What 2024 Holds",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build software, from code generation to automated testing and beyond.",
    author: "Alex Sterling",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "from-blue-600 to-blue-700",
    icon: Brain,
  }

  const blogPosts = [
    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      excerpt:
        "Learn the latest patterns and techniques for building React applications that can handle millions of users.",
      author: "Maya Chen",
      date: "January 12, 2024",
      readTime: "6 min read",
      category: "Frontend Development",
      image: "from-blue-600 to-blue-700",
      icon: Code,
    },
    {
      title: "Microservices vs Monoliths: Making the Right Choice",
      excerpt:
        "A comprehensive guide to choosing the right architecture for your next project based on real-world experience.",
      author: "Raj Kumar",
      date: "January 10, 2024",
      readTime: "10 min read",
      category: "Architecture",
      image: "from-blue-600 to-blue-700",
      icon: Globe,
    },
    {
      title: "Security First: Protecting Your Applications in 2024",
      excerpt: "Essential security practices every developer should implement to protect against modern threats.",
      author: "Sophie Martinez",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "from-blue-600 to-blue-700",
      icon: Shield,
    },
    {
      title: "Mobile-First Design: Creating Apps Users Love",
      excerpt: "Design principles and UX strategies that make mobile applications intuitive and engaging.",
      author: "David Kim",
      date: "January 5, 2024",
      readTime: "5 min read",
      category: "Mobile Development",
      image: "from-blue-600 to-blue-700",
      icon: Rocket,
    },
    {
      title: "The Rise of No-Code/Low-Code: Friend or Foe?",
      excerpt:
        "Analyzing the impact of no-code platforms on traditional software development and when to use each approach.",
      author: "Emma Thompson",
      date: "January 3, 2024",
      readTime: "9 min read",
      category: "Industry Trends",
      image: "from-blue-600 to-blue-700",
      icon: TrendingUp,
    },
    {
      title: "Performance Optimization: Making Your App Lightning Fast",
      excerpt: "Proven techniques to optimize your application's performance and deliver exceptional user experiences.",
      author: "Alex Sterling",
      date: "December 28, 2023",
      readTime: "8 min read",
      category: "Performance",
      image: "from-blue-600 to-blue-700",
      icon: Zap,
    },
  ]

  const categories = [
    "All Posts",
    "AI & Technology",
    "Frontend Development",
    "Backend Development",
    "Mobile Development",
    "Security",
    "Performance",
    "Industry Trends",
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
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-900 font-medium">
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
            DevCraft{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Deep dives into software development, emerging technologies, and industry trends from our team of experts.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="relative z-10 px-6 lg:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full"
                    : "border-gray-300 text-gray-700 hover:text-gray-900 hover:bg-gray-50 bg-transparent rounded-full"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-4">Featured Article</Badge>
          </div>

          <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="bg-blue-100 text-blue-600 border-blue-200 mb-4">{featuredPost.category}</Badge>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Image */}
                <div
                  className={`bg-gradient-to-br ${featuredPost.image} rounded-r-lg flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <Brain className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="relative z-10 px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with the latest in software development and technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon

              return (
                <Card
                  key={index}
                  className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-md"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div
                      className={`aspect-video bg-gradient-to-br ${post.image} rounded-t-lg flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category */}
                      <Badge variant="secondary" className="mb-3 text-xs bg-gray-100 text-gray-700">
                        {post.category}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <span>{post.date}</span>
                      </div>

                      {/* CTA */}
                      <Button
                        variant="ghost"
                        className="w-full text-blue-600 hover:text-white hover:bg-blue-600 p-0 h-auto font-semibold rounded-full"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Stay in the Loop</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights, tutorials, and industry news delivered to your inbox weekly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 rounded-full whitespace-nowrap">
              Subscribe
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's turn your ideas into reality with cutting-edge technology and expert craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold whitespace-nowrap">
              Start Your Project
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
