"use client"

import { motion } from "framer-motion"
import { Users, Code, Trophy, Calendar } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Members", value: "500+" },
  { icon: Code, label: "Projects Completed", value: "100+" },
  { icon: Trophy, label: "Hackathons Won", value: "25+" },
  { icon: Calendar, label: "Events Organized", value: "50+" },
]

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-400/10 to-blue-600/10 mb-4">
                <stat.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

