"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Afghan Turk Maarif Schools",
    location: "Kabul, Afghanistan",
    period: "Feb 2026 – Present",
    type: "Full-time",
    description:
      "I am working as a Full Stack Developer at Afghan-Turk Maarif Schools, where I design and develop scalable web-based management systems for educational institutions.",
    achievements: [
      "I handle end-to-end development processes, including system architecture design, backend development, database management, and modern frontend implementation.I focus on building secure, efficient, and user-friendly applications that streamline academic and administrative workflows while ensuring performance, scalability, and maintainability.",
    ],
    technologies: ["Laravel+Inertia.js(React.js)", "CI/CD pipelines", "GitHub Actions", "MySQL","Tailwind CSS"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Webify Company",
    location: "Kabul, Afghanistan",
    period: "Apr 2025 – Dec 2025",
    type: "Full-time",
    description:
      "Leading the development of scalable, production-ready web applications leveraging React, Next.js, Node.js, and Laravel. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built and maintained 5+ production-grade web applications",
      "Reduced page load time by 40% through optimization techniques",
      "Implemented CI/CD pipelines for automated deployments",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Next.js", "Laravel", "TypeScript", "MySQL","PostgreSQL","Nest.js"],
  },
  {
    title: "Full Stack Web Developer",
    company: "Naikbeen Control Panel Company",
    location: "Kabul, Afghanistan",
    period: "Oct 2024 – Mar 2025",
    type: "Full-time",
    description:
  "Developed and maintained multiple client web projects focused on e-commerce and business management solutions using modern technologies, delivering scalable, secure, and high-performance applications.",
achievements: [
  "Developed a complete e-commerce platform from scratch",
  "Integrated secure payment gateways and third-party APIs",
  "Improved application security and performance through optimization techniques",
],

    technologies: ["Laravel", "React.js", "MySQL", "Ant Design", "WordPress"],
  },
  {
    title: "Web Developer",
    company: "Tara Solutions",
    location: "Kabul, Afghanistan",
    period: "DEC 2023 – SEP 2024",
    type: "Full-time",
    description:
      "Started my professional journey building responsive websites and web applications for various clients.",
    achievements: [
      "Built 10+ responsive websites for local businesses",
      "Learned and applied modern web development practices",
      "Collaborated with designers to implement pixel-perfect designs",
    ],
    technologies: ["Laravel", "React.js", "Next.js", "MySQL", "Shadcn.ui" ,"Tailwind CSS"],
  },
  {
    title: "Volunteer Developer",
    company: "Light Code Org",
    location: "Remote",
    period: "FEB 2022 – AUG 2023",
    type: "Volunteer",
    description: "Contributed to open-source projects and helped build tools for educational purposes.",
    achievements: [
      "Contributed to open-source educational platforms",
      "Helped build learning management systems",
      "Gained hands-on experience with real-world projects",
    ],
    technologies: ["PHP", "Laravel", "C++", "Java", "MySQL", "bootstrap" ,"HTML","CSS"],
  },
] 

export function Experience() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                  <Card className="glass hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-primary font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1">
                          <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>{exp.type}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">▹</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
