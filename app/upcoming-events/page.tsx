"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Phone, ExternalLink, Trophy } from "lucide-react"

// Remove the DSA & CP Session event
const events = [
  {
    id: 1,
    title: "PITCH-A-THON",
    subtitle: "From Concept to Creation",
    date: "February 28th, 2025",
    time: "9:00 AM onwards",
    venue: "D Block (UIT)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pitch-a-thon_page-0001%20(1).jpg-AHqHztrugeVCqlnLTjHIPc7YwwytOc.jpeg",
    description:
      "Get ready for an exciting Pitch-A-Thon event where you can showcase your innovative ideas and turn your ideas into impact! Win amazing goodies! 🎉",
    themes: ["AI/ML/DS", "Web/App/Game Development", "IoT/Robotics", "Cybersecurity/Blockchain", "Open Innovation"],
    contacts: [
      { name: "Vihaan Malani", phone: "7228997760" },
      { name: "Shaurya Jain", phone: "9512092571" },
      { name: "Vihir Shah", phone: "9727486797" },
    ],
    registerLink: "https://linktr.ee/PITCH_A_THON",
    highlights: [{ icon: Trophy, text: "Win funding up to ₹2.5 Lakhs for your innovative idea" }],
    collaborators: ["SSIP", "Karnavati Innovation & Incubation Foundation", "Institution's Innovation Council"],
  },
]

// Update the rest of the component to handle only one event
// Remove the navigation buttons and dots since there's only one event now
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
              src={events[0].image || "/placeholder.svg"}
              alt={events[0].title}
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
                {events[0].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-cyan-400 font-semibold mb-6"
              >
                {events[0].subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300"
              >
                {events[0].description}
              </motion.p>
            </div>

            {/* Event Time and Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>{events[0].date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>{events[0].time}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{events[0].venue}</span>
              </div>
            </motion.div>

            {/* Event Specific Content */}
            {true ? (
              <>
                {/* Pitch-a-thon Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-semibold text-white">Themes</h2>
                  <div className="flex flex-wrap gap-3">
                    {events[0].themes.map((theme) => (
                      <span
                        key={theme}
                        className="px-4 py-2 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-800 text-sm"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <></>
            )}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <div className="space-y-3">
                {events[0].contacts.map((contact) => (
                  <div key={contact.phone} className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>
                      {contact.name}: {contact.phone}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Registration Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <Link
                href={events[0].registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Register Now <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

