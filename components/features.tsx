"use client"

import { motion } from "framer-motion"

export default function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose your path and excel with our specialized tracks</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">For Competitive Programmers</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Tackle algorithmic challenges on CodeForces, LeetCode, and more</li>
              <li>• Participate in coding contests and climb the leaderboard</li>
              <li>• Improve your problem-solving skills with expert mentorship</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">For Web Developers</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Build real-world projects using the latest web technologies</li>
              <li>• Learn full-stack development with hands-on workshops</li>
              <li>• Collaborate on open-source projects and expand your portfolio</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

