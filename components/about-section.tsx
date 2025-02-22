"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Target, Brain } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Unleash Your Inner Tech Titan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 mb-12 text-center max-w-2xl mx-auto"
        >
          Ready to solve problems that make LeetCode hards look easy? Join the squad that's pushing the boundaries of
          competitive programming. No cap, just pure algorithmic excellence!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Energy</h3>
            <p className="text-gray-400">
              From grinding contest problems to celebrating those sweet, sweet AC's together - we're all about that
              competitive programming life. Whether you're trying to crack your first binary search or already farming
              div1 problems, we've got your back.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Exciting Offerings</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>Weekly problem-solving sessions to level up your algorithm game</span>
              </li>
              <li className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>In-house contests with real prizes and clout on the line</span>
              </li>
              <li className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-400" />
                <span>Mock interviews to help you nail those FAANG coding rounds</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Team up for ICPC and other major competitive programming contests</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

