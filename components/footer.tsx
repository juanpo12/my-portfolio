"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Script from "next/script"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Juan José Díaz
            </Link>
            <p className="text-muted-foreground mt-2">{t("creating")}</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 border border-border hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 border border-border hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 border border-border hover:text-primary hover:border-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@juanjosediaz.com"
              className="p-2 rounded-full bg-background/80 border border-border hover:text-primary hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">

      <Script 
  src="https://adapted-perfectly-lemming.ngrok-free.app/api/organizations/4211cc25-c280-4e77-a403-53cd1ad74859/agents/273a15f5-6e63-485e-a2f1-5ca96239342a/web/widget.js" 
  data-agent-id="273a15f5-6e63-485e-a2f1-5ca96239342a"
  data-org-id="4211cc25-c280-4e77-a403-53cd1ad74859"
        async />
          

          <p>
            © {currentYear} Juan José Díaz. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}

