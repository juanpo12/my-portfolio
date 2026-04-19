import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import Script from 'next/script'

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
<Script
  src="https://votive-profligately-jerri.ngrok-free.dev/widget.js?ngrok-skip-browser-warning=true"
  data-agent-id="13f99761-fda6-49c7-ac59-49325cf39007"
  data-api-url="https://votive-profligately-jerri.ngrok-free.dev"
  strategy="afterInteractive"
/>
      </div>
    </main>
  )
}

