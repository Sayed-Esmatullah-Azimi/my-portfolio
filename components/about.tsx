"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { GraduationCap, Languages, Code2, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const aboutData = {
  bio: `I'm a passionate Full Stack Web Developer with over 3 years of experience building modern web applications. I specialize in React, Next.js, Laravel, and various modern web technologies. I love turning complex problems into simple, beautiful, and intuitive solutions that create real impact.`,
  education: {
    degree: "Bachelor's in Computer Science",
    school: "Kabul Polytechnic University",
    period: "2020 - 2024",
  },
  languages: [
    { name: "Dari", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "Pashto", level: "Advanced" },
  ],
  interests: ["Open Source", "Full Stack Development", "Database Design", "Problem Solving", "Learning New Tech"],
}

export function About() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
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
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-purple-500/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card className="glass gradient-border h-full hover:glow-sm transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Who I Am</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{aboutData.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {aboutData.interests.map((interest) => (
                      <Badge key={interest} variant="secondary" className="px-3 py-1 gradient-border">
                        <Heart className="h-3 w-3 mr-1.5 text-primary" />
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education & Languages */}
            <div className="space-y-6">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="glass gradient-border hover:glow-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold">Education</h3>
                    </div>
                    <div>
                      <p className="font-medium">{aboutData.education.degree}</p>
                      <p className="text-sm text-muted-foreground">{aboutData.education.school}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{aboutData.education.period}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Languages Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="glass gradient-border hover:glow-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20">
                        <Languages className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">Languages</h3>
                    </div>
                    <div className="space-y-2">
                      {aboutData.languages.map((lang) => (
                        <div key={lang.name} className="flex items-center justify-between">
                          <span className="text-sm">{lang.name}</span>
                          <Badge variant="outline" className="text-xs gradient-border">
                            {lang.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
