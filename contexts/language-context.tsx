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
  experience: { en: "Experience", es: "Experiencia" },
  works: { en: "Works", es: "Proyectos" },
  skills: { en: "Skills", es: "Habilidades" },
  contact: { en: "Contact me", es: "Contáctame" },

  // Hero
  hello: { en: "Hello there 👋", es: "Hola 👋" },
  im: { en: "I'm", es: "Soy" },
  fullstack: { en: "FullStack Developer", es: "Desarrollador FullStack" },
  role_techlead: { en: "Tech Lead", es: "Tech Lead" },
  role_ai: { en: "AI & Conversational Agents Specialist", es: "Especialista en IA y Agentes Conversacionales" },
  hero_desc: {
    en: "Full Stack Developer with 3+ years building intelligent, scalable systems that blend web and native mobile with AI-driven automation. Currently Tech Lead, leading end-to-end product on iOS, Android and backend.",
    es: "Desarrollador Full Stack con más de 3 años construyendo sistemas inteligentes y escalables que combinan web y móvil nativo con automatización impulsada por IA. Actualmente Tech Lead, liderando el producto end-to-end en iOS, Android y backend.",
  },
  tech_desc: {
    en: "Specialized in multi-tenant SaaS platforms, conversational agents and event-driven architectures — integrating OpenAI, Anthropic, Google and Azure in production.",
    es: "Especializado en plataformas SaaS multi-tenant, agentes conversacionales y arquitecturas orientadas a eventos — integrando OpenAI, Anthropic, Google y Azure en producción.",
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
  private_repo: { en: "Private repository", es: "Repositorio privado" },
  private_deploy: { en: "Private deployment", es: "Despliegue privado" },

  // Experience
  experience_desc: {
    en: "Over 3 years building and leading production systems across web, mobile and AI, in international remote teams.",
    es: "Más de 3 años construyendo y liderando sistemas en producción entre web, móvil e IA, en equipos remotos internacionales.",
  },
  present: { en: "Present", es: "Actualidad" },
  exp_role_fullstack: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
  exp_remote_us: { en: "United States (Remote)", es: "Estados Unidos (Remoto)" },
  exp_remote_es: { en: "Spain (Remote)", es: "España (Remoto)" },
  exp_remote_co: { en: "Colombia (Remote)", es: "Colombia (Remoto)" },
  exp_remote_do: { en: "Dominican Republic (Remote)", es: "República Dominicana (Remoto)" },
  exp_fablestep_1: {
    en: "Lead end-to-end development of Fablelingo — an AI language-learning app — on native iOS (SwiftUI), Android and backend, owning architecture and technical decisions from day one.",
    es: "Lidero el desarrollo end-to-end de Fablelingo — app de aprendizaje de idiomas con IA — en iOS nativo (SwiftUI), Android y backend, a cargo de la arquitectura y las decisiones técnicas desde el día uno.",
  },
  exp_fablestep_2: {
    en: "Built the entire backend from scratch with Fastify, TypeScript and Drizzle ORM over PostgreSQL — 27 domain modules and 35+ versioned migrations powering lessons, gamification, AI roleplay and monetization.",
    es: "Construí todo el backend desde cero con Fastify, TypeScript y Drizzle ORM sobre PostgreSQL — 27 módulos de dominio y más de 35 migraciones versionadas que soportan lecciones, gamificación, roleplay con IA y monetización.",
  },
  exp_fablestep_3: {
    en: "Designed a token & subscription monetization system with a coach commission engine, and load-tested the backend with k6 to 2,000+ concurrent users.",
    es: "Diseñé un sistema de monetización por tokens y suscripciones con motor de comisiones para coaches, y probé el backend con k6 hasta más de 2.000 usuarios concurrentes.",
  },
  exp_cibernova_1: {
    en: "Designed a multi-tenant architecture with schema isolation in PostgreSQL, supporting 50+ organizations with full data separation under load.",
    es: "Diseñé una arquitectura multi-tenant con aislamiento por esquemas en PostgreSQL, dando soporte a más de 50 organizaciones con total separación de datos bajo carga.",
  },
  exp_cibernova_2: {
    en: "Built a unified AI orchestration layer integrating OpenAI, Anthropic, Google and Azure, enabling LLM provider switching without code changes; real-time omnichannel messaging cut response times ~40%.",
    es: "Construí una capa unificada de orquestación de IA integrando OpenAI, Anthropic, Google y Azure, permitiendo cambiar de proveedor LLM sin tocar código; la mensajería omnicanal en tiempo real redujo los tiempos de respuesta ~40%.",
  },
  exp_cibernova_3: {
    en: "Developed an event-driven trigger & webhook system with Inngest workers processing 10,000+ daily events with zero message loss.",
    es: "Desarrollé un sistema de triggers y webhooks orientado a eventos con workers de Inngest procesando más de 10.000 eventos diarios sin pérdida de mensajes.",
  },
  exp_vozy_1: {
    en: "Designed and deployed AI collections agents for 3 enterprise clients, recovering ~$120,000 USD in outstanding invoices in the first quarter.",
    es: "Diseñé y desplegué agentes de IA para cobranzas de 3 clientes enterprise, recuperando ~$120.000 USD en facturas pendientes en el primer trimestre.",
  },
  exp_vozy_2: {
    en: "Built conversational agents reaching an 85%+ containment rate (queries resolved without human escalation) in production.",
    es: "Construí agentes conversacionales con una tasa de contención del 85%+ (consultas resueltas sin escalado humano) en producción.",
  },
  exp_gpesports_1: {
    en: "Built a real-time Formula 1 tournament management system with Socket.io, supporting 200+ concurrent participants.",
    es: "Construí un sistema de gestión de torneos de Fórmula 1 en tiempo real con Socket.io, soportando más de 200 participantes simultáneos.",
  },
  exp_gpesports_2: {
    en: "Developed Discord and WhatsApp bots in Node.js, plus an Electron + React desktop app for OBS broadcast management used live at 30+ esports events.",
    es: "Desarrollé bots de Discord y WhatsApp en Node.js, más una app de escritorio con Electron + React para gestión de transmisiones OBS, usada en vivo en más de 30 eventos de esports.",
  },

  // Skills
  skills_tech: { en: "Skills & Technologies", es: "Habilidades y Tecnologías" },
  skills_desc: {
    en: "A comprehensive list of my technical skills and the technologies I work with.",
    es: "Una lista completa de mis habilidades técnicas y las tecnologías con las que trabajo.",
  },
  frontend: { en: "Frontend", es: "Frontend" },
  backend: { en: "Backend", es: "Backend" },
  mobile: { en: "Mobile", es: "Mobile" },
  ai_agents: { en: "AI & Agents", es: "IA y Agentes" },
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
  cristo_desc: {
    en: 'Official website for Cristo la Solución church. Includes a content management system, event listings, donation integration via Mercado Pago, and a digital library.',
    es: 'Sitio web oficial de la iglesia Cristo la Solución. Incluye un sistema de gestión de contenido, listado de eventos, integración de donaciones con Mercado Pago y una biblioteca digital.',
  },
  ong_desc: {
    en: "This project represents an inspiring vision of a cryptocurrency dedicated to fostering prosperity and collective sovereignty.",
    es: "Este proyecto representa una visión inspiradora de una criptomoneda dedicada a fomentar la prosperidad y la soberanía colectiva.",
  },
  quickcode_desc: {
    en: "Discount Dash is an application that sells products nearing their expiration dates at reduced prices, helping to minimize food waste and save money.",
    es: "Discount Dash es una aplicación que vende productos cerca de su fecha de caducidad a precios reducidos, ayudando a minimizar el desperdicio de alimentos y ahorrar dinero.",
  },
  fablelingo_desc: {
    en: "AI-powered language-learning app (iOS, Android & web) with conversational roleplay, gamified lessons and a coaching marketplace. As Tech Lead I built the native SwiftUI app and a Fastify backend with 27 domain modules, AI roleplay, token monetization and a coach commission engine — load-tested to 2,000+ concurrent users.",
    es: "App de aprendizaje de idiomas con IA (iOS, Android y web) con roleplay conversacional, lecciones gamificadas y un marketplace de coaching. Como Tech Lead construí la app nativa en SwiftUI y un backend con Fastify de 27 módulos de dominio, roleplay con IA, monetización por tokens y motor de comisiones — probado con carga de más de 2.000 usuarios concurrentes.",
  },
  saas_desc: {
    en: "An innovative SaaS platform that democratizes AI power for businesses of all sizes. Create and manage digital employees (AI agents) without technical knowledge to automate business tasks and customer service 24/7.",
    es: "Una plataforma SaaS innovadora que democratiza el poder de la IA para empresas de todos los tamaños. Crea y gestiona empleados digitales (agentes IA) sin conocimientos técnicos para automatizar tareas empresariales y atención al cliente 24/7.",
  },
  tuplaza_desc: {
    en: "An innovative educational platform inspired by Megaprofe, designed for teachers to optimize their time and improve pedagogical materials. Uses Google Gemini AI to automatically generate high-quality educational content aligned with the official curriculum.",
    es: "Una plataforma educativa innovadora inspirada en Megaprofe, diseñada para docentes que buscan optimizar su tiempo y mejorar sus materiales pedagógicos. Utiliza IA de Google Gemini para generar automáticamente contenido educativo de alta calidad alineado con el currículo oficial.",
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
