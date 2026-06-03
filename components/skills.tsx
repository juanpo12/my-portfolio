/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Brain, Database, Layout, Server, Smartphone, Terminal } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const deviconMap: Record<string, { path: string; invert?: boolean }> = {
  "HTML5":        { path: "html5/html5-original" },
  "CSS3":         { path: "css3/css3-original" },
  "JavaScript":   { path: "javascript/javascript-original" },
  "TypeScript":   { path: "typescript/typescript-original" },
  "React":        { path: "react/react-original" },
  "Next.js":      { path: "nextjs/nextjs-original", invert: true },
  "Tailwind CSS": { path: "tailwindcss/tailwindcss-original" },
  "Node.js":      { path: "nodejs/nodejs-original" },
  "Express":      { path: "express/express-original", invert: true },
  "Fastify":      { path: "fastify/fastify-original", invert: true },
  "Python":       { path: "python/python-original" },
  "FastAPI":      { path: "fastapi/fastapi-original" },
  "GraphQL":      { path: "graphql/graphql-plain" },
  "Swift":        { path: "swift/swift-original" },
  "SwiftUI":      { path: "swift/swift-original" },
  "Kotlin":       { path: "kotlin/kotlin-original" },
  "MySQL":        { path: "mysql/mysql-original" },
  "PostgreSQL":   { path: "postgresql/postgresql-original" },
  "Redis":        { path: "redis/redis-original" },
  "Firebase":     { path: "firebase/firebase-plain" },
  "Supabase":     { path: "supabase/supabase-original" },
  "MongoDB":      { path: "mongodb/mongodb-original" },
  "Prisma":       { path: "prisma/prisma-original", invert: true },
  "Git":          { path: "git/git-original" },
  "GitHub":       { path: "github/github-original", invert: true },
  "Docker":       { path: "docker/docker-original" },
  "AWS":          { path: "amazonwebservices/amazonwebservices-original-wordmark" },
  "Figma":        { path: "figma/figma-original" },
  "Postman":      { path: "postman/postman-original" },
}

function SkillBadge({ skill }: { skill: string }) {
  const icon = deviconMap[skill]
  return (
    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-background/80 border border-border rounded-full text-sm hover:border-primary/40 transition-colors">
      {icon && (
        <img
          src={`${DEVICON_BASE}/${icon.path}.svg`}
          alt={skill}
          width={16}
          height={16}
          className={icon.invert ? "dark:invert" : ""}
        />
      )}
      {skill}
    </span>
  )
}

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      category: t("frontend"),
      icon: <Layout className="h-6 w-6" />,
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Radix UI", "Framer Motion"],
    },
    {
      category: t("backend"),
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Fastify", "Express", "REST APIs", "Webhooks", "WebSockets", "Drizzle ORM"],
    },
    {
      category: t("mobile"),
      icon: <Smartphone className="h-6 w-6" />,
      items: ["Swift", "SwiftUI", "Kotlin", "React Native", "StoreKit", "MVVM + Coordinator"],
    },
    {
      category: t("ai_agents"),
      icon: <Brain className="h-6 w-6" />,
      items: ["OpenAI", "Anthropic", "Google AI", "Azure AI", "LangChain", "AI SDK", "RAG", "Embeddings", "Prompt Engineering"],
    },
    {
      category: t("database"),
      icon: <Database className="h-6 w-6" />,
      items: ["PostgreSQL", "Supabase", "Redis", "Firestore", "MongoDB", "Prisma"],
    },
    {
      category: t("tools"),
      icon: <Terminal className="h-6 w-6" />,
      items: ["Git", "GitHub", "Docker", "Inngest", "Sentry", "Winston", "k6", "Cloudflare R2", "Jira"],
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
                <SkillBadge key={skill} skill={skill} />
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
