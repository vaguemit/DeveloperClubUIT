"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

const events2024 = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024", location: "Main Auditorium" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024", location: "Main Auditorium" },
]

const events2025 = [
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025", location: "Innovation Center" },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025", location: "Innovation Center" },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025", location: "Innovation Center" },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025", location: "Innovation Center" },
]

const EventSection = ({ events, year }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Code-A-Thon {year}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="text-xl font-semibold mb-4">{event.name}</h3>
          <div className="flex items-center mb-2 text-gray-300">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="mt-6 flex justify-between">
            <Link
              href={`/events/${event.id}/photos`}
              className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Photos
            </Link>
            <Link
              href={`/events/${event.id}/leaderboard`}
              className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Leaderboard
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

export default function FeaturedEvents() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Upcoming Events</h2>
        <EventSection events={events2024} year="2024" />
        <EventSection events={events2025} year="2025" />
      </div>
    </section>
  )
}

