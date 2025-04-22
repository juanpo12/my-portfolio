/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Database, Layout, Server, Terminal } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      category: t("frontend"),
      icon: <Layout className="h-6 w-6" />,
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: t("backend"),
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express", "Python"],
    },
    {
      category: t("database"),
      icon: <Database className="h-6 w-6" />,
      items: ["MySQL", "PostgreSQL", "Firebase"],
    },
    {
      category: t("tools"),
      icon: <Terminal className="h-6 w-6" />,
      items: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("skills_tech")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("skills_desc")}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, groupIndex) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-background/80 border border-border rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-primary/80 italic">"{t("always_learning")}"</p>
      </motion.div>
    </section>
  )
}

