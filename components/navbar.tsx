"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Construction, Calendar } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Events", href: "/events" },
  { name: "Upcoming Events", href: "/upcoming-events", icon: Calendar },
  { name: "FAQ", href: "/faq" },
  { name: "Resources", href: "/resources", wip: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between py-4">
          {/* Logo section */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <div className="relative h-24 w-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled_design__1_-removebg-preview%20(1)-8wX2A63M2kzdGdI7xCWnUvsBPFZG5F.png"
                  alt="Developer Club Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <Link
              href="https://karnavatiuniversity.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-16 w-32"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-onlinepngtools%20(1)-AjkkjOnZ97dMb237CC8GX8GQJTdSAR.png"
                alt="Karnavati University Logo"
                fill
                className="object-contain hover:opacity-80 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-zinc-800 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation menu */}
        {isOpen && (
          <div className="py-4 border-t border-zinc-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center py-2 px-4 text-white hover:bg-zinc-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.name}
                {item.wip && <Construction className="inline-block ml-2 text-yellow-500" size={16} />}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfAkTifsfsV3VHkuXyOSJ2E9G0aCB-kwxdzLy0sKhoq3Fl2Eg/viewform?usp=header"
              className="block py-2 px-4 text-white hover:bg-zinc-800 rounded transition-colors mt-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Join Club
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

