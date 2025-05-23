"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

type Translations = {
  [key: string]: {
    [key in Language]: string
  }
}

// Definimos todas las traducciones aquí
const translations: Translations = {
  // Navbar
  about: { en: "About me", es: "Sobre mí" },
  works: { en: "Works", es: "Proyectos" },
  skills: { en: "Skills", es: "Habilidades" },
  contact: { en: "Contact me", es: "Contáctame" },

  // Hero
  hello: { en: "Hello there 👋", es: "Hola 👋" },
  im: { en: "I'm", es: "Soy" },
  fullstack: { en: "FullStack Developer", es: "Desarrollador FullStack" },
  hero_desc: {
    en: "I create exceptional web experiences, design attractive interfaces and develop web applications with passion. Specialized in optimizing the user experience.",
    es: "Creo experiencias web excepcionales, diseño interfaces atractivas y desarrollo aplicaciones web con pasión. Especializado en optimizar la experiencia del usuario.",
  },
  tech_desc: {
    en: "I use technologies like Firebase, TypeScript, Next.js, and Redux Toolkit. Your next web project begins here.",
    es: "Utilizo tecnologías como Firebase, TypeScript, Next.js y Redux Toolkit. Tu próximo proyecto web comienza aquí.",
  },
  contact_me: { en: "Contact Me", es: "Contáctame" },

  // Projects
  some_works: { en: "Some of my works", es: "Algunos de mis proyectos" },
  projects_desc: {
    en: "A selection of projects I've worked on, showcasing my skills and experience in web development.",
    es: "Una selección de proyectos en los que he trabajado, mostrando mis habilidades y experiencia en desarrollo web.",
  },
  repository: { en: "Repository", es: "Repositorio" },
  deploy: { en: "Deploy", es: "Desplegar" },

  // Skills
  skills_tech: { en: "Skills & Technologies", es: "Habilidades y Tecnologías" },
  skills_desc: {
    en: "A comprehensive list of my technical skills and the technologies I work with.",
    es: "Una lista completa de mis habilidades técnicas y las tecnologías con las que trabajo.",
  },
  frontend: { en: "Frontend", es: "Frontend" },
  backend: { en: "Backend", es: "Backend" },
  database: { en: "Database", es: "Base de datos" },
  tools: { en: "Tools & Others", es: "Herramientas y Otros" },
  always_learning: {
    en: "Always learning and exploring new technologies to stay at the cutting edge of web development.",
    es: "Siempre aprendiendo y explorando nuevas tecnologías para mantenerme a la vanguardia del desarrollo web.",
  },

  // Contact
  get_in_touch: { en: "Get in Touch", es: "Ponte en Contacto" },
  contact_desc: {
    en: "Have a project in mind or want to collaborate? Feel free to reach out!",
    es: "¿Tienes un proyecto en mente o quieres colaborar? ¡No dudes en contactarme!",
  },
  your_name: { en: "Your Name", es: "Tu Nombre" },
  email: { en: "Email", es: "Correo electrónico" },
  message: { en: "Message", es: "Mensaje" },
  send: { en: "Send", es: "Enviar" },
  sending: { en: "Sending...", es: "Enviando..." },
  thank_you: {
    en: "Thank you for your message! I'll get back to you soon.",
    es: "¡Gracias por tu mensaje! Te responderé pronto.",
  },
  location: { en: "Location", es: "Ubicación" },
  phone: { en: "Phone", es: "Teléfono" },
  download_resume: { en: "Download my resume", es: "Descargar mi CV" },

  // Footer
  creating: {
    en: "FullStack Developer creating exceptional web experiences",
    es: "Desarrollador FullStack creando experiencias web excepcionales",
  },
  rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },

  // Project descriptions
  velorio_desc: {
    en: '"Velorio Cancelado" is a website to promote an event by the church Cristo la Solución; it is an invitation to their Holy Week event.',
    es: '"Velorio Cancelado" es un sitio web para promocionar un evento de la iglesia Cristo la Solución; es una invitación a su evento de Semana Santa.',
  },
  ong_desc: {
    en: "This project represents an inspiring vision of a cryptocurrency dedicated to fostering prosperity and collective sovereignty.",
    es: "Este proyecto representa una visión inspiradora de una criptomoneda dedicada a fomentar la prosperidad y la soberanía colectiva.",
  },
  quickcode_desc: {
    en: "Discount Dash is an application that sells products nearing their expiration dates at reduced prices, helping to minimize food waste and save money.",
    es: "Discount Dash es una aplicación que vende productos cerca de su fecha de caducidad a precios reducidos, ayudando a minimizar el desperdicio de alimentos y ahorrar dinero.",
  },

  schedule_meeting: { en: "Schedule a Meeting", es: "Agendar una Reunión" },
  select_date: { en: "Select a date", es: "Selecciona una fecha" },
  complete_details: { en: "Complete your details", es: "Completa tus datos" },
  meeting_scheduled: { en: "Meeting scheduled!", es: "¡Reunión agendada!" },
  available_times: { en: "Available times for", es: "Horarios disponibles para" },
  meeting_summary: { en: "Meeting summary", es: "Resumen de la reunión" },
  full_name: { en: "Full name", es: "Nombre completo" },
  optional_message: { en: "Message (optional)", es: "Mensaje (opcional)" },
  project_discussion: {
    en: "Tell me about your project or what you'd like to discuss...",
    es: "Cuéntame sobre tu proyecto o lo que te gustaría discutir...",
  },
  back: { en: "Back", es: "Volver" },
  schedule_meeting_btn: { en: "Schedule meeting", es: "Agendar reunión" },
  scheduling: { en: "Scheduling...", es: "Agendando..." },
  meeting_success: { en: "Meeting scheduled successfully!", es: "¡Reunión agendada exitosamente!" },
  confirmation_email: {
    en: "I've sent you a confirmation email with the meeting details.",
    es: "Te he enviado un correo de confirmación con los detalles de la reunión.",
  },
  close: { en: "Close", es: "Cerrar" },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  // Intentar cargar el idioma guardado en localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Función para obtener la traducción
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
