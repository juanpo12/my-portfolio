"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Download, Mail, MapPin, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import CalendarModal from "./calendar-modal"

export function Contact() {
  const { t } = useLanguage()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    fetch('/api', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
  })
  .catch(error => console.log(error))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("get_in_touch")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact_desc")}</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t("your_name")}</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("message")}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formState.message}
                onChange={handleChange}
                required
                className="min-h-32"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  {t("sending")} <Send className="ml-2 h-4 w-4 animate-pulse" />
                </>
              ) : (
                <>
                  {t("send")} <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
            <div className="text-center">
              <p className="text-sm text-muted-foreground my-4">o</p>
              <Button variant="outline" className="w-full" onClick={() => setIsCalendarOpen(true)}>
                <Calendar className="mr-2 h-4 w-4" />
                {t("schedule_meeting")}
              </Button>
            </div>
            {isSubmitted && <p className="text-green-500 text-center">{t("thank_you")}</p>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{t("email")}</h3>
                <p className="text-muted-foreground">juanjosediazarmada@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{t("location")}</h3>
                <p className="text-muted-foreground">Buenos aires, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">{t("phone")}</h3>
                <p className="text-muted-foreground">+54 9 11 2660 6410</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative w-48 h-48">
                {/* <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Resume download"
                  width={200}
                  height={200}
                  className="object-contain"
                /> */}
              </div>
              <div className="absolute top-0 right-0 bg-background/80 backdrop-blur-sm p-4 rounded-full shadow-lg">
              {/* descarga archivo Resume.pdf que esta en public */}
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <a href="/Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("download_resume")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  )
}

