"use client"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/25 via-cyan-500/20 to-teal-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 max-w-2xl">
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <Badge variant="outline" className="glass gradient-border px-4 py-2 gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for hire
              </Badge>
            </motion.div>

            {/* Main Content */}
            <div className="text-center lg:text-left">
              <motion.p variants={itemVariants} className="text-primary font-mono text-sm lg:text-base mb-4">
                Hi, my name is
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="text-foreground">Sayed Esmatullah</span>
                <br />
                <span className="gradient-text-animated">Azimi</span>
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
              >
                Full Stack Web Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
              >
                I build scalable, user-friendly web applications with modern technologies. Passionate about creating
                exceptional digital experiences that make a difference.
              </motion.p>

              {/* Info badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <Badge variant="secondary" className="gap-2 px-3 py-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Kabul, Afghanistan
                </Badge>
                <Badge variant="secondary" className="gap-2 px-3 py-1.5">
                  <Briefcase className="h-3.5 w-3.5" />
                  3+ Years Experience
                </Badge>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-10 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  asChild
                  className="rounded-full px-8 group btn-gradient text-primary-foreground border-0 w-full sm:w-auto"
                >
                  <a href="mailto:sayedesmatullahazimi43@gmail.com">
                    <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Get in Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full px-8 group glass gradient-border bg-transparent w-full sm:w-auto"
                >
                  <a href="#resume">
                    <Download className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                    Download CV
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild className="rounded-full px-8 w-full sm:w-auto">
                  <a href="https://github.com/Sayed-Esmatullah-Azimi" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            {/* Gradient glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-blue-500/40 rounded-full blur-3xl scale-110" />

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Gradient ring around photo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-full opacity-70 blur-sm" />
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-full animate-pulse opacity-50" />

              {/* Glassmorphism photo container */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass gradient-border p-1"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-background/80 to-background/40">
                  <Image
                    src="/photo.jpg"
                    alt="Sayed Esmatullah Azimi"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-60 blur-sm"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-60 blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
