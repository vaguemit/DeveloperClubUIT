"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Events", href: "/events" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 py-2 lg:py-4">
      <div className="flex items-center justify-between py-2 px-4">
        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-zinc-800 rounded-full">
            <Menu className="h-6 w-6 text-white" />
          </button>
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <div className="relative h-56 w-56 -ml-2">
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
            className="relative h-32 w-64"
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

        {/* Center Navigation (Desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="rounded-full bg-zinc-900/50 border border-zinc-800 px-4">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2 text-white">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex h-12 w-max items-center justify-center rounded-full px-4 text-sm font-medium text-white transition-colors hover:text-white hover:bg-zinc-800"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Join Club Button */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAkTifsfsV3VHkuXyOSJ2E9G0aCB-kwxdzLy0sKhoq3Fl2Eg/viewform?usp=header"
          className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium text-white transition-colors hover:text-white hover:bg-zinc-800 border border-zinc-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Club
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-800">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

