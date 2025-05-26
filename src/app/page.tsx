/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

export default function Home() {
  const yearsSinceJune2024 = useMemo(() => {
    const startDate = new Date(2024, 1, 1)
    const now = new Date()

    let years = now.getFullYear() - startDate.getFullYear()

    if (
      now.getMonth() < startDate.getMonth() ||
      (now.getMonth() === startDate.getMonth() && now.getDate() < startDate.getDate())
    ) {
      years--
    }

    return years >= 0 ? years : 0
  }, [])

  return (
    <div className="pl-16">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section id="hero" className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-2">田中 リカルド</h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300">Ricardo Tanaka</h2>
            </div>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
              For building things that actually matter
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-8">
              <MapPin className="w-4 h-4" />
              <span>Rio de Janeiro, Brazil</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View my work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
              About Me
            </h2>

            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  I'm Ricardo Tanaka, a software engineer with{" "}
                  <strong>
                    {yearsSinceJune2024} {yearsSinceJune2024 === 1 ? "year" : "years"}
                  </strong>{" "}
                  of experience, started my engineering journey in June 2024, but eager and ready to learn more and take
                  on ever increasing challenges. I'm currently based in Rio de Janeiro, Brazil but open anytime to meet
                  new interesting people from all over the world.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Rio de Janeiro, Brazil</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    Open to remote opportunities and connecting with people worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>2023 - 2027 (Estimated Graduation)</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Universidade Federal Fluminense
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">B.Sc, Information Systems, Software Engineering</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
              Work Experience
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Software Engineering Intern</CardTitle>
                  <CardDescription>
                    <a
                      href="https://www.linkedin.com/company/calindra/posts/?feedView=all"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Calindra
                    </a>{" "}
                    • June 2024 - Present
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li>
                      • Developed an internal sales tool for a cloud-based digital commerce platform, leveraging AI
                      agents to automatically migrate and recreate website layouts from competitor sites.
                    </li>
                    <li>
                      • Co-developed a blockchain-based game console by validating user runs on-chain, displaying a
                      global leaderboard, and implementing a hot wallet for seamless day-to-day Ethereum transfers.
                    </li>
                    <li>
                      • Spearheaded front-end development of an e-commerce website under an accelerated timeline,
                      delivering a fully functional storefront that sold out within five hours of launch.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Undergraduate Student Researcher</CardTitle>
                  <CardDescription>Universidade Federal Fluminense • September 2023 - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Participated in the development and integration of a chatbot using the Rasa framework, connecting it
                    to Telegram and WhatsApp and integrating it with a network controller to facilitate network
                    management.
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Developed, in Python, a conversational chatbot integrated with WhatsApp</li>
                    <li>• Implemented logic adapters and pre-processors within the chatbot</li>
                    <li>• Collaborated on the production of a scientific paper</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Canere Karaoke
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href="https://github.com/rmtanaka2308/Canere-Karaoke" aria-label="View code">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>Automatically generate a karaoke version for any song that you want</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                    An AI-powered application that transforms any song into a karaoke version by separating vocals from
                    instrumentals and generating synchronized lyrics.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">API</Badge>
                    <Badge variant="outline">LLM's</Badge>
                    <Badge variant="outline">Database</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Portfolio
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href="#" aria-label="View code">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>Sleek minimalistic portfolio</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                    The project you are currently viewing! A responsive, modern portfolio built with Next.js and
                    Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">APIs</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">PostgresSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Linux</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-100">Let's Connect</h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="mailto:tanaka.ricardo23@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/in/tanakaricardo/" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/rmtanaka2308" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; 2025 Ricardo Tanaka. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  )
}
