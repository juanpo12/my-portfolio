"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-primary">{t("hello")}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("im")} Juan José Díaz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">{t("fullstack")}</p>
          </div>

          <p className="text-lg text-muted-foreground">{t("hero_desc")}</p>

          <p className="text-primary/80">{t("tech_desc")}</p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">
                {t("contact_me")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden">
              <Image
                src="/yo.jpg?height=320&width=320"
                alt="Juan José Díaz"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

