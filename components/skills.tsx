"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Proficient",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "React/Next.js", level: 85 },
      { name: "TypeScript", level: 89 },
      { name: "Tailwind CSS", level: 95 },
      { name: "MySQL", level: 88 },
      { name: "Git", level: 90 },
      { name: "Git Hub", level: 90 },
    ],
  },
  {
    title: "Familiar",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "WordPress", level: 70 },
      { name: "Docker", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "Cpnel", level: 90 },
      { name: "VPS", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
]

const techStack = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "WordPress",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Java",
  "C++",
  "Git",
  "Git Hub",
  "Docker",
  "CI/CD",
  "VPS",
  "Cpanel",
  "REST APIs",
  "Zustand",
  "React Query",
  "Webpack",
  "Vite",
]

export function Skills() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent" />
          </div>

          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass gradient-border-animated h-full hover:glow-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${categoryIndex === 0 ? "bg-gradient-to-r from-primary to-purple-500" : "bg-gradient-to-r from-accent to-cyan-500"}`}
                      />
                      {category.title}
                    </h3>
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.05 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 0.8, delay: 0.3 + skillIndex * 0.05 }}
                              className={`h-full rounded-full ${categoryIndex === 0 ? "bg-gradient-to-r from-primary via-purple-500 to-accent" : "bg-gradient-to-r from-accent via-cyan-500 to-teal-500"}`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass gradient-border hover:glow-sm transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm cursor-default hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
