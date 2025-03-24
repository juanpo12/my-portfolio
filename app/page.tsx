import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

