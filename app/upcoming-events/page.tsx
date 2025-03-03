"use client"
import { motion } from "framer-motion"
import Link from "next/link"

// Remove the events array and replace it with a message
export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950/30 to-black">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            There are no upcoming events at the moment. Please check back later or visit our past events page.
          </p>
          <Link
            href="/events"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            View Past Events
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

