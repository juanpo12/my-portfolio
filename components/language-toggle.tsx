"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="flex items-center gap-1"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "es" ? "EN" : "ES"}</span>
    </Button>
  )
}

