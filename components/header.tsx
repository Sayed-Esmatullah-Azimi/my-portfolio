"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const headerBg = useTransform(scrollY, [0, 100], [0, 1])
  const [bgOpacity, setBgOpacity] = React.useState(0)

  React.useEffect(() => {
    return headerBg.on("change", (latest) => {
      setBgOpacity(latest)
    })
  }, [headerBg])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: `oklch(var(--background) / ${bgOpacity * 0.8})`,
        backdropFilter: bgOpacity > 0.1 ? `blur(${bgOpacity * 12}px)` : "none",
        borderBottom: bgOpacity > 0.1 ? `1px solid oklch(var(--border) / ${bgOpacity * 0.5})` : "none",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="relative group">
            <motion.span
              className="text-xl lg:text-2xl font-bold gradient-text-animated"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Sayed Esmatullah Azimi
            </motion.span>
            <span className="sr-only">Sayed Esmatullah Azimi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-accent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a
                href="https://github.com/Sayed-Esmatullah-Azimi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
            <Button asChild className="ml-2 rounded-full btn-gradient text-primary-foreground border-0">
              <a href="mailto:sayedesmatullahazimi43@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-4 pt-4 border-t border-border">
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a href="https://github.com/Sayed-Esmatullah-Azimi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full">
                <a href="https://linkedin.com/in/esmatullahazimi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild className="ml-auto rounded-full btn-gradient text-primary-foreground border-0">
                <a href="mailto:sayedesmatullahazimi43@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
