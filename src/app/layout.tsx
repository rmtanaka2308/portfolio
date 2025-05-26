import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/NewSidebar"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}
