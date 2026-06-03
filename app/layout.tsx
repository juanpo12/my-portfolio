import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

const BASE_URL = "https://juanjosediazarmada.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Juan José Díaz | Full Stack Developer",
    template: "%s | Juan José Díaz",
  },
  description:
    "Full Stack Developer especializado en Next.js, TypeScript, React, AI y SaaS. Basado en Buenos Aires, Argentina. Disponible para proyectos freelance y trabajo remoto.",
  keywords: [
    "Juan José Díaz",
    "Juan Díaz desarrollador",
    "Full Stack Developer Argentina",
    "Next.js developer",
    "TypeScript developer",
    "React developer Buenos Aires",
    "desarrollador web Argentina",
    "SaaS developer",
    "AI developer",
    "portfolio desarrollador",
    "freelance developer Argentina",
    "juanpo12",
  ],
  authors: [{ name: "Juan José Díaz", url: BASE_URL }],
  creator: "Juan José Díaz",
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: BASE_URL,
    siteName: "Juan José Díaz | Portfolio",
    title: "Juan José Díaz | Full Stack Developer",
    description:
      "Full Stack Developer especializado en Next.js, TypeScript, AI y SaaS. Buenos Aires, Argentina.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Juan José Díaz - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan José Díaz | Full Stack Developer",
    description:
      "Full Stack Developer especializado en Next.js, TypeScript, AI y SaaS. Buenos Aires, Argentina.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Script
          src="https://ai-saas-fast-production.up.railway.app/widget.js"
          data-agent-id="861a49a6-1714-4953-b4d3-7f960d2c0e3c"
          data-api-url="https://ai-saas-fast-production.up.railway.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
