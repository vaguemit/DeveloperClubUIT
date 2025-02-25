"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Phone, ExternalLink, Trophy } from "lucide-react"

const themes = ["AI/ML/DS", "Web/App/Game Development", "IoT/Robotics", "Cybersecurity/Blockchain", "Open Innovation"]

const contacts = [
  { name: "Vihaan Malani", phone: "7228997760" },
  { name: "Shaurya Jain", phone: "9512092571" },
  { name: "Vihir Shah", phone: "9727486797" },
]

const collaborators = ["SSIP", "Karnavati Innovation & Incubation Foundation", "Institution's Innovation Council"]

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Left Column - Poster */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pitch-a-thon_page-0001%20(1).jpg-AHqHztrugeVCqlnLTjHIPc7YwwytOc.jpeg"
              alt="Pitch-a-thon Poster"
              fill
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>

          {/* Right Column - Event Details */}
          <div className="space-y-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text"
              >
                PITCH-A-THON
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-cyan-400 font-semibold mb-6"
              >
                From Concept to Creation
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300"
              >
                Get ready for an exciting Pitch-A-Thon event where you can showcase your innovative ideas and turn your
                ideas into impact! Win amazing goodies! 🎉
              </motion.p>
            </div>

            {/* Funding Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 p-6 rounded-lg border border-cyan-800/50"
            >
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Chance to Win Big!</h3>
                  <p className="text-cyan-400">Win funding up to ₹2.5 Lakhs for your innovative idea</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>February 28th, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>9:00 AM onwards</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>D Block (UIT)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">Themes</h2>
              <div className="flex flex-wrap gap-3">
                {themes.map((theme) => (
                  <span
                    key={theme}
                    className="px-4 py-2 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-800 text-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">In Collaboration With</h2>
              <div className="flex flex-wrap gap-2">
                {collaborators.map((collaborator) => (
                  <span key={collaborator} className="px-3 py-1 rounded-md bg-white/10 text-gray-300 text-sm">
                    {collaborator}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">Contact Coordinators</h2>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.phone} className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>
                      {contact.name}: {contact.phone}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <Link
                href="https://linktr.ee/PITCH_A_THON"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </Link>
              <p className="text-gray-400 text-sm">
                * Registration open till 26th Feb 2025. Scan the QR code from the poster to register.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

