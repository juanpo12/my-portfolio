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
      id: 1,
      title: "Velorio cancelado",
      description: t("velorio_desc"),
      image: "/veloriocancelado.jpg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      repoUrl: "https://github.com/juanpo12/velorio-cancelado",
      demoUrl: "https://www.veloriocancelado.com/",
      isPublic: true,
      isPublicDeploy: true
    },
    {
      id: 2,
      title: "ONG Colibríes",
      description: t("ong_desc"),
      image: "/ong.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/QuickCodeFusion/sumak-kawsay-web",
      demoUrl: "https://www.unifying.earth/",
      isPublic: false,
      isPublicDeploy: true
    },
    {
      id: 3,
      title: "Quick Code",
      description: t("quickcode_desc"),
      image: "/qcportfolio.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "#",
      demoUrl: "#",
      isPublic: false,
      isPublicDeploy: false
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
            <Card className="h-full flex flex-col overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
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
                <Button disabled={!project.isPublic} variant="outline" size="sm">
                  <a href={project.repoUrl} className="flex flex-row" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("repository")}
                  </a>
                </Button>
                <Button disabled={!project.isPublicDeploy} variant="outline" size="sm">
                  <a href={project.demoUrl} target="_blank" className="flex flex-row" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    {t("deploy")}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

