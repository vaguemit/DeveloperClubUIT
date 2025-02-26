"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Trophy,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react"

const events = [
  {
    id: 1,
    title: "DSA & CP Session",
    subtitle: "Unlocking the Power of DSA",
    date: "February 27th, 2025",
    time: "11:30 AM - 1:30 PM",
    venue: "M-02, M-Block",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-26%20at%2011.39.46_cdee3e3c.jpg-dQn8CF1SWJ2bl5Lwqedd19Qidasi9K.jpeg",
    description:
      "Sharpen your problem-solving skills and level up your coding game! Join us for an exciting Competitive Programming (CP) & Data Structures & Algorithms (DSA) session.",
    features: [
      "Hands-on problem-solving",
      "Algorithm deep dives",
      "Contest prep & discussions",
      "Peer learning & networking",
    ],
    perks: ["Attendance will be provided", "Extended break timings"],
    contacts: [
      { name: "Lithika S", phone: "88666 53379" },
      { name: "Mit Parikh", phone: "78599 63613" },
    ],
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeTP4gSG75aiVJma1mtqEoS0C2skRyHsU8l9qxtaMYjT5pxPg/viewform?usp=header",
  },
  {
    id: 2,
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

export default function UpcomingEventsPage() {
  const [currentEvent, setCurrentEvent] = useState(0)

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
            <button onClick={prevEvent} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
            <button onClick={nextEvent} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Event Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8 items-start"
            >
              {/* Left Column - Poster */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={events[currentEvent].image || "/placeholder.svg"}
                  alt={events[currentEvent].title}
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
                    {events[currentEvent].title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-cyan-400 font-semibold mb-6"
                  >
                    {events[currentEvent].subtitle}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300"
                  >
                    {events[currentEvent].description}
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
                    <span>{events[currentEvent].date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>{events[currentEvent].time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>{events[currentEvent].venue}</span>
                  </div>
                </motion.div>

                {/* Event Specific Content */}
                {currentEvent === 1 ? (
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
                        {events[1].themes.map((theme) => (
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
                  <>
                    {/* DSA Session Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-4"
                    >
                      <h2 className="text-xl font-semibold text-white">What to Expect</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {events[0].features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4"
                    >
                      <h2 className="text-xl font-semibold text-white">Perks</h2>
                      <div className="space-y-2">
                        {events[0].perks.map((perk) => (
                          <div key={perk} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
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
                    {events[currentEvent].contacts.map((contact) => (
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
                    href={events[currentEvent].registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
                  >
                    Register Now <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Event Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentEvent === index ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

