"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 6,
      title: "Fablelingo",
      description: t("fablelingo_desc"),
      image: "/fablelingo.png?height=400&width=600",
      tags: ["SwiftUI", "Kotlin", "Fastify", "Drizzle ORM", "PostgreSQL", "Redis", "Inngest"],
      repoUrl: "#",
      demoUrl: "#",
      isPublic: false,
      isPublicDeploy: false
    },
    {
      id: 4,
      title: "SHADDAI",
      description: t("saas_desc"),
      image: "/shaddai.png?height=400&width=600",
      tags: ["Next.js", "React 19", "Fastify", "LangChain", "Drizzle ORM", "Supabase", "Redis"],
      repoUrl: "#",
      demoUrl: "https://ai-saas-front-mu.vercel.app/",
      isPublic: false,
      isPublicDeploy: true
    },
    {
      id: 5,
      title: "TU PLAZA Aprendizaje",
      description: t("tuplaza_desc"),
      image: "/tu-plaza.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Google Gemini", "Supabase", "Clerk", "Stripe"],
      repoUrl: "#",
      demoUrl: "https://tu-plaza.vercel.app/",
      isPublic: false,
      isPublicDeploy: true
    },
  ]

  return (
    <section id="works" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("some_works")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects_desc")}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative h-48 overflow-hidden group/img">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.isPublic ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/25 text-white rounded-full text-sm border border-white/30 transition-colors backdrop-blur-sm"
                    >
                      <Github className="h-4 w-4" />
                      Repo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/40 rounded-full text-sm border border-white/15 cursor-not-allowed">
                      <Github className="h-4 w-4" />
                      Privado
                    </span>
                  )}
                  {project.isPublicDeploy ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-full text-sm border border-primary/50 transition-colors backdrop-blur-sm"
                    >
                      <Globe className="h-4 w-4" />
                      Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white/40 rounded-full text-sm border border-white/15 cursor-not-allowed">
                      <Globe className="h-4 w-4" />
                      Privado
                    </span>
                  )}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="relative group">
                  <Button disabled={!project.isPublic} variant="outline" size="sm">
                    <a href={project.repoUrl} className="flex flex-row" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("repository")}
                    </a>
                  </Button>
                  {!project.isPublic && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {t("private_repo")}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  )}
                </div>
                <div className="relative group">
                  <Button disabled={!project.isPublicDeploy} variant="outline" size="sm">
                    <a href={project.demoUrl} target="_blank" className="flex flex-row" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      {t("deploy")}
                    </a>
                  </Button>
                  {!project.isPublicDeploy && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      {t("private_deploy")}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
