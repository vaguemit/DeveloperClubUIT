import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Developer Club",
  description: "A student-run tech club passionate about coding and innovation",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-36 min-h-screen">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'