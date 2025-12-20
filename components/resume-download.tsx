"use client"

import { motion } from "framer-motion"
import { Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function ResumeDownload() {
  return (
    <section id="resume" className="py-20 lg:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text-animated">Download Resume</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
          </motion.div>

          {/* Resume Card */}
          <motion.div variants={itemVariants} className="glass gradient-border-animated rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Resume Preview Icon */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-2xl blur-xl" />
                <div className="relative w-32 h-40 lg:w-40 lg:h-52 glass rounded-2xl flex items-center justify-center gradient-border">
                  <FileText className="w-16 h-16 lg:w-20 lg:h-20 text-primary" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Sayed Esmatullah Azimi</h3>
                <p className="text-muted-foreground mb-2">Full Stack Web Developer Resume</p>
                <p className="text-sm text-muted-foreground mb-6">PDF format • Last updated: November 2025</p>

                {/* Resume highlights */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {["3+ Years Experience", "10+ Projects", "5+ Technologies"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    size="lg"
                    asChild
                    className="rounded-full px-8 group btn-gradient text-primary-foreground border-0"
                  >
                    <a href="/resume.pdf" download="Sayed_Esmatullah_Azimi_Resume.pdf">
                      <Download className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                      Download PDF
                    </a>
                  </Button>
                  {/* <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="rounded-full px-8 group glass gradient-border bg-transparent"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      View Online
                    </a>
                  </Button> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.p variants={itemVariants} className="text-center text-sm text-muted-foreground mt-8">
            Need a different format?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contact me
            </a>{" "}
            for Word or custom versions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
