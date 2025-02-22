"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  { id: 1, name: "John Doe", role: "President", image: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", role: "Vice President", image: "/placeholder.svg" },
  { id: 3, name: "Mike Johnson", role: "Tech Lead", image: "/placeholder.svg" },
  { id: 4, name: "Sarah Brown", role: "Event Coordinator", image: "/placeholder.svg" },
]

export default function TeamMembers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 p-6 rounded-lg text-center"
        >
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={150}
            height={150}
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-400">{member.role}</p>
        </motion.div>
      ))}
    </div>
  )
}

