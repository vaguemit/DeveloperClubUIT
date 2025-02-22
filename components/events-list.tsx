"use client"

import { motion } from "framer-motion"

const events = [
  { id: 1, name: "Hackathon 2023", date: "June 15-17, 2023", description: "Annual hackathon event" },
  { id: 2, name: "AI Workshop", date: "July 5, 2023", description: "Learn about artificial intelligence" },
  { id: 3, name: "Web Dev Bootcamp", date: "August 1-5, 2023", description: "Intensive web development course" },
  {
    id: 4,
    name: "Tech Talk: Blockchain",
    date: "September 10, 2023",
    description: "Introduction to blockchain technology",
  },
]

export default function EventsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
          <p className="text-gray-400 mb-2">{event.date}</p>
          <p className="text-gray-300">{event.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

