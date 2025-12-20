"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react"

const projects = [
  {
    id: "bamyan-entertainment",
    title: "Bamyan Entertainment – Online Ticketing Platform",
    description:
      "Developed a full-stack entertainment platform for managing cultural, music, and sports events.Implemented dynamic event and blog management, community & sponsor modules, gallery andnewsletter systems with queued email notifications, role-based authentication, and integrated external ticket payments via Volek. Ensured responsive UI/UX with Next.js, Radix UI, and Tailwind CSS.",
    image: "/bamyanentertianment.png",
    technologies: ["Laravel 12", "Next.js 15", "Radix UI", "Tailwind CSS","MySQL"],
    liveUrl: "https://bamyanentertainment.de/",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: "job-portal",
    title: "Job Portal System",
    description:
      "Developed a full-stack job portal system featuring user roles, job applications, job seeker insights, and employer tools. Implemented a ranking system, voting on insights, dynamic forms, and an admin dashboard for managing companies, jobs, and advertisements.",
    image: "/insightdeed.png",
    technologies: ["Laravel 11", "React.js", "MySQL", "Ant Design","Bootstrap 5"],
    liveUrl: "https://www.insightdeed.com/",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: "gold-kingdom-forex",
    title: "Gold Kingdom Forex Academy – LMS Platform",
    description: "Laravel (Backend), React.js & Ant Design (Frontend)Built a Learning Management System(LMS) named Gold Kingdom Forex Academy with features like user role management (Admin,Instructor, Student), course and session scheduling, student/instructor profiles, integrated payments, and attendance tracking. Used Laravel for a robust backend with soft deletes and audit trails, and React.js with Ant Design for a responsive and modern frontend.",
    image: "/goldkingdom.png",
    technologies: ["Laravel 11", "React.js", "Ant Design","HTML 5","CSS 3", "MySQL"],
    liveUrl: "https://www.goldkingdom.trade/",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: "gulbarg-cleaning",
    title: "Bab Cleaning Material Management System",
    description:
      "A comprehensive cleaning material management system developed for Sun Shine Group Company, based in Kabul. The backend is built with Laravel, and the frontend is implemented using React.js and Ant Design. Key features include raw material tracking, packaging tools management, imported product handling, machinery records, sales, debt management, and transaction history logging.",
    image: "/babcleaning.png",
    technologies: ["React.js", "Laravel 9", "MySQL", "Ant Design"],
    featured: false,
    category: "Full-Stack",
  },
  {
    id: "stock-sales",
    title: "Stock Sales Management System",
    description: "Developed for Shahr-e-Qashang Company, this system manages categories, products, sales, and finances. • Built with Laravel (backend), HTML, Bootstrap, CSS, JavaScript • MySQL database for efficient data management • Handles product categories, sales transactions, and financial records • Optimized for performance and scalability",
    image: "/inventory-management-dashboard-analytics.jpg",
    technologies: ["Laravel 8", "Livewire", "MySQL", "Bootsrap 5"],
    featured: false,
    category: "Backend",
  },
  {
    id: "qr-generator",
    title: "QR Code Generator System",
    description: "A web-based application developed for Ahmadzai and Mohammad Ilyas Ahmadzai Trading Company. It manages personnel, users, and product data while generating custom QR codes for social media. • Built with Laravel (backend) and React.js + Ant Design (frontend) • Role & permission management for user access • Employee management (roles, card numbers, blood types, status) • Product and category management (agricultural, pharmaceutical) • QR code generation with custom URLs for social media • User status tracking (ACTIVE, INACTIVE, EXPIRED) • Includes audit fields and soft delete functionality",
    image: "/qrcode.png",
    technologies: ["Laravel 12", "React", "Ant Design", "Canvas API","MySQL"],
    featured: false,
    category: "Frontend",
  },
  {
    id: "home-af",
    title: "Home.af",
    description: "Developed for Home.af, a leading real estate platform, this website provides a seamless experience for users to browse, buy, and sell properties. • Property Listings with detailed descriptions and images • Search Filters to help users find properties based on location, price, and type • User Dashboard for managing listings and transactions • Contact and Inquiry Forms for easy communication between buyers and sellers • Built with a user-friendly interface and optimized for a smooth property search experience",
    image: "/home.png",
    technologies: ["Inetia.js", "Laravel 12", "MySQL", "React.js"],
    liveUrl: "https://home.af",
    featured: false,
    category: "Backend",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Backend"]

export function Projects() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = React.useState("All")

  const filteredProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = filteredProjects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass overflow-hidden group">
                  <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    {/* Image */}
                    <div
                      className={`relative aspect-video md:aspect-auto overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                    </div>

                    {/* Content */}
                    <CardContent
                      className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}
                    >
                      <Badge variant="outline" className="w-fit mb-4">
                        Featured
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" asChild className="rounded-full bg-transparent">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild className="rounded-full">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild className="rounded-full ml-auto">
                          <Link href={`/projects/${project.id}`}>
                            Case Study
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold">Other Projects</h3>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source code"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
