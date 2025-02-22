"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Tech Club
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white hover:text-gray-300 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-800 py-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}

