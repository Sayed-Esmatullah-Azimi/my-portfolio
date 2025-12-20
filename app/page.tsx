import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { ResumeDownload } from "@/components/resume-download"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"

export default function Home() {
  return (
    <>
      <CursorEffect />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
