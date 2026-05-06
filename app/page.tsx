import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan José Díaz",
  url: "https://juanjosediazarmada.vercel.app",
  image: "https://juanjosediazarmada.vercel.app/yo.jpg",
  sameAs: [
    "https://github.com/juanpo12",
    "https://www.linkedin.com/in/juan-diaz-dev1/",
    "https://www.instagram.com/juan.po0/",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "juanjosediazarmada@gmail.com",
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Supabase",
    "AI Development",
    "SaaS Development",
    "Full Stack Development",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-grid-primary">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
