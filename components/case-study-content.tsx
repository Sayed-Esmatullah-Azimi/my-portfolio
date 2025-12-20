"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code2, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ProjectData {
  title: string
  subtitle: string
  description: string
  heroImage: string
  role: string
  timeline: string
  team: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  overview: string
  challenge: string
  solution: string
  features: { title: string; description: string }[]
  architecture: string
  results: { metric: string; label: string }[]
  testimonial: { quote: string; author: string; role: string }
  learnings: string
  screenshots: { src: string; alt: string }[]
}

export function CaseStudyContent({ project }: { project: ProjectData }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src={project.heroImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Button variant="ghost" asChild className="mb-8 -ml-4">
                <Link href="/#projects">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>

              <Badge variant="outline" className="mb-4">
                {project.role}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">{project.subtitle}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {project.timeline}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {project.team}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code2 className="h-4 w-4" />
                  {project.technologies.length} technologies
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
                <Button variant="outline" asChild className="rounded-full bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.heroImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Technologies */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {project.overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass h-full">
                  <CardContent className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">The Challenge</h3>
                    <div className="space-y-3">
                      {project.challenge.split("\n").map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="glass h-full">
                  <CardContent className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold mb-4 text-accent">The Solution</h3>
                    <div className="space-y-3">
                      {project.solution.split("\n").map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="glass h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Architecture */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Technical Architecture</h2>
              <Card className="glass">
                <CardContent className="p-6 lg:p-8">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {project.architecture.split("\n\n").map((para, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Results & Impact</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="glass text-center">
                    <CardContent className="p-6">
                      <p className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{result.metric}</p>
                      <p className="text-sm text-muted-foreground">{result.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Quote className="h-12 w-12 mx-auto mb-6 text-primary/30" />
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learnings */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Key Learnings</h2>
            <Card className="glass">
              <CardContent className="p-6 lg:p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {project.learnings.split("\n").map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Navigation */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto flex justify-center"
          >
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <Link href="/#projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
