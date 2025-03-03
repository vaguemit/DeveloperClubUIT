"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            There are no upcoming events at the moment. Please check back later or visit our past events page.
          </p>
          <Link
            href="/events"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
          >
            View Past Events
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

