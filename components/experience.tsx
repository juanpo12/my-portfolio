"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      role: "Tech Lead",
      company: "Fablestep",
      location: t("exp_remote_us"),
      period: `Ene 2026 – ${t("present")}`,
      stack: ["Swift", "SwiftUI", "Kotlin", "Fastify", "PostgreSQL", "Drizzle ORM", "Redis", "Inngest"],
      bullets: [t("exp_fablestep_1"), t("exp_fablestep_2"), t("exp_fablestep_3")],
    },
    {
      role: t("exp_role_fullstack"),
      company: "Cibernova",
      location: t("exp_remote_es"),
      period: "May 2025 – Dic 2025",
      stack: ["Next.js 15", "TypeScript", "PostgreSQL", "LangChain", "AI SDK", "Inngest", "Sentry"],
      bullets: [t("exp_cibernova_1"), t("exp_cibernova_2"), t("exp_cibernova_3")],
    },
    {
      role: "Technical Agent Developer",
      company: "Vozy",
      location: t("exp_remote_co"),
      period: "Mar 2024 – May 2025",
      stack: ["JavaScript", "Node.js", "Make", "Zapier", "REST APIs"],
      bullets: [t("exp_vozy_1"), t("exp_vozy_2")],
    },
    {
      role: t("exp_role_fullstack"),
      company: "GPEsportsRD",
      location: t("exp_remote_do"),
      period: "Jun 2023 – Mar 2024",
      stack: ["Node.js", "React", "Socket.io", "Electron", "Discord API"],
      bullets: [t("exp_gpesports_1"), t("exp_gpesports_2")],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("experience")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("experience_desc")}</p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Línea vertical del timeline */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
            >
              {/* Punto del timeline */}
              <div className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:-translate-x-1/2" />

              {/* Columna alterna en desktop */}
              <div className={index % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-2 mb-1 md:justify-start">
                    <Briefcase className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">
                    {exp.company} · <span className="text-muted-foreground font-normal">{exp.location}</span>
                  </p>

                  <ul className="mt-4 space-y-2 text-left">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
