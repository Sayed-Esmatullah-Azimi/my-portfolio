import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Sayed Esmatullah Azimi | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in React, Next.js, Laravel, and modern web technologies. Building scalable, user-friendly applications with 3+ years of experience.",
  keywords: ["Full Stack Web Developer", "React", "Next.js", "Laravel", "TypeScript", "Web Development", "Afghanistan"],
  authors: [{ name: "Sayed Esmatullah Azimi" }],
  creator: "Sayed Esmatullah Azimi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://esmatullahazimi.dev",
    title: "Sayed Esmatullah Azimi | Full Stack Web Developer",
    description: "Full Stack Web Developer building scalable, modern web applications",
    siteName: "Sayed Esmatullah Azimi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Esmatullah Azimi | Full Stack Web Developer",
    description: "Full Stack Web Developer building scalable, modern web applications",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0a1e" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
