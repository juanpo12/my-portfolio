"use client"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ArrowUpRight, Github, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  appStoreUrl?: string
  playStoreUrl?: string
  video?: string
}

const pill =
  "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.78.74 2.99.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66zM14.1 5.84c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z" />
    </svg>
  )
}

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.6 1.8 13.3 11.5 3.6 21.2c-.35-.2-.6-.6-.6-1.1V2.9c0-.5.25-.9.6-1.1zm10.8 10.8 2.6 2.6-11.3 6.5 8.7-9.1zm0-2.2L5.7 1.3 17 7.8l-2.6 2.6zm3.9-1.8 3 1.7c.9.5.9 1.8 0 2.3l-3 1.7-2.8-2.8 2.8-2.9z" />
    </svg>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const [openVideo, setOpenVideo] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 6,
      title: "Fablelingo",
      description: t("fablelingo_desc"),
      image: "/fablelingo.jpg",
      video: "/fablelingo-promo.mp4",
      tags: ["SwiftUI", "Kotlin", "Fastify", "Drizzle ORM", "PostgreSQL", "Redis", "Inngest"],
      appStoreUrl: "https://apps.apple.com/cl/app/fablelingo-aprende-ingl%C3%A9s/id6761012496",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.fablestep.fablelingoapp",
    },
    {
      id: 4,
      title: "SHADDAI",
      description: t("saas_desc"),
      image: "/shaddai-dashboard.jpg",
      video: "/shaddai-promo.mp4",
      tags: ["Next.js", "React 19", "Fastify", "LangChain", "Drizzle ORM", "Supabase", "Redis"],
      demoUrl: "https://shaddaior.com/",
    },
    {
      id: 5,
      title: "TU PLAZA Aprendizaje",
      description: t("tuplaza_desc"),
      image: "/tu-plaza.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Google Gemini", "Supabase", "Clerk", "Stripe"],
      demoUrl: "https://tu-plaza.vercel.app/",
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
              <ProjectMedia project={project} onOpen={() => setOpenVideo(project)} watchLabel={t("watch_video")} />
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
              <ProjectLinks project={project} visitLabel={t("visit_site")} codeLabel={t("repository")} />
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!openVideo} onOpenChange={(o) => !o && setOpenVideo(null)}>
        <DialogContent className="max-w-5xl w-[calc(100%-2rem)] p-0 overflow-hidden border-0 bg-black sm:rounded-xl [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-black/60 [&>button]:p-1.5 [&>button]:text-white [&>button]:opacity-100">
          <DialogTitle className="sr-only">{openVideo?.title}</DialogTitle>
          {openVideo?.video && (
            <video
              key={openVideo.video}
              src={openVideo.video}
              poster={openVideo.image}
              controls
              autoPlay
              playsInline
              className="w-full aspect-video bg-black"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProjectMedia({ project, onOpen, watchLabel }: { project: Project; onOpen: () => void; watchLabel: string }) {
  const media = (
    <>
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
      />
      {project.video && (
        <>
          <video
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/20 transition-colors">
            <span className="flex items-center gap-2 rounded-full bg-white/90 text-black px-4 py-2 text-sm font-medium shadow-lg transition-transform group-hover/img:scale-105">
              <Play className="h-4 w-4 fill-current" />
              {watchLabel}
            </span>
          </span>
        </>
      )}
    </>
  )

  if (!project.video) {
    return <div className="relative h-48 overflow-hidden group/img">{media}</div>
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${watchLabel}: ${project.title}`}
      className="relative h-48 w-full overflow-hidden group/img cursor-pointer text-left"
      onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play().catch(() => {})}
      onMouseLeave={(e) => {
        const v = e.currentTarget.querySelector("video")
        if (v) {
          v.pause()
          v.currentTime = 0
        }
      }}
    >
      {media}
    </button>
  )
}

function ProjectLinks({ project, visitLabel, codeLabel }: { project: Project; visitLabel: string; codeLabel: string }) {
  const hasLinks = project.demoUrl || project.repoUrl || project.appStoreUrl || project.playStoreUrl
  if (!hasLinks) return null
  return (
    <CardFooter className="flex flex-wrap gap-2">
      {project.appStoreUrl && (
        <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={`${pill} bg-foreground text-background hover:opacity-85`}>
          <AppleIcon className="h-4 w-4" />
          App Store
        </a>
      )}
      {project.playStoreUrl && (
        <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={`${pill} bg-foreground text-background hover:opacity-85`}>
          <PlayStoreIcon className="h-4 w-4" />
          Google Play
        </a>
      )}
      {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`${pill} bg-primary text-primary-foreground hover:bg-primary/90`}>
          {visitLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`${pill} border border-border hover:bg-accent`}>
          <Github className="h-4 w-4" />
          {codeLabel}
        </a>
      )}
    </CardFooter>
  )
}
