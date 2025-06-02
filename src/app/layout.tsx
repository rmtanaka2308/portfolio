import type React from "react"
import "./globals.css"
import { AppSidebar } from "@/components/NewSidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} suppressHydrationWarning>
      <head>
        <title>Ricardo Tanaka</title>
        <meta name="description" content="My personal website built with Next.js" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AppSidebar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

