"use client"

import type React from "react"

import { Home, User, Briefcase, FolderOpen, Code, Mail } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar"

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
        title: "Skills",
        url: "#skills",
        icon: Code,
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
        <Sidebar
            collapsible="none"
            className="w-16 border-r border-slate-200 dark:border-slate-700 fixed left-0 top-0 h-screen z-50"
        >
            <SidebarHeader className="p-3">
                <div className="flex justify-center">

                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title} className="w-10 h-10 p-0 mx-auto">
                                        <a
                                            href={item.url}
                                            onClick={(e) => handleSmoothScroll(e, item.url)}
                                            className="flex items-center justify-center transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                                        >
                                            <item.icon className="w-5 h-5" />
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mx-auto" title="Online" />
            </SidebarFooter>
        </Sidebar>
    )
}
