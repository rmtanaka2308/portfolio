"use client"

import type React from "react"

import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
    {
        title: "Home",
        url: "#hero",
        icon: Home,
    },
    {
        title: "About",
        url: "#about",
        icon: User,
    },
    {
        title: "Experience",
        url: "#experience",
        icon: Briefcase,
    },
    {
        title: "Projects",
        url: "#projects",
        icon: FolderOpen,
    },
    {
        title: "Contact",
        url: "#contact",
        icon: Mail,
    },
]

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}

export function AppSidebar() {
    return (
        <div className="fixed left-0 top-0 h-screen w-16 z-50 border-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">


            {/* Navigation Menu */}
            <div className="flex-1 px-3 py-2">
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.title} className="flex justify-center">
                            <a
                                href={item.url}
                                onClick={(e) => handleSmoothScroll(e, item.url)}
                                className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg group"
                                title={item.title}
                            >
                                <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100" />
                            </a>
                        </div>
                    ))}
                </nav>
            </div>

            {/* Footer with Theme Toggle and Status */}
            <div className="p-3 space-y-3">
                <div className="flex justify-center">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}
