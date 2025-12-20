"use client"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/Sayed-Esmatullah-Azimi", label: "GitHub" },
  { icon: Mail, href: "mailto:sayedesmatullahazimi43@gmail.com", label: "Email" },
]

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              AM
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Full Stack Web Developer building modern, scalable web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Back to Top */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-2 mb-6">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary/10"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={scrollToTop} className="rounded-full bg-transparent">
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sayed Esmatullah Azimi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500" /> using Next.js Shadcn UI & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
