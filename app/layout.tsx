import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Developer Club",
  description: "A student-run tech club passionate about coding and innovation",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-01-01_at_22.12.25_a5af34b0-removebg-preview-yjmoQzI26aZjsu00vNdFlLpflwUyU4.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-01-01_at_22.12.25_a5af34b0-removebg-preview-yjmoQzI26aZjsu00vNdFlLpflwUyU4.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-01-01_at_22.12.25_a5af34b0-removebg-preview-yjmoQzI26aZjsu00vNdFlLpflwUyU4.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2025-01-01_at_22.12.25_a5af34b0-removebg-preview-yjmoQzI26aZjsu00vNdFlLpflwUyU4.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-36">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

