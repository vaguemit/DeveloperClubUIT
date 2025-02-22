"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            {["Code", "Create", "Conquer"].map((word, index) => (
              <motion.span
                key={word}
                className="inline-block mr-2"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    },
                  },
                }}
              >
                <motion.span className="inline-block" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {word}
                </motion.span>
                {index < 2 && ","}
              </motion.span>
            ))}
            <motion.span
              className="block mt-2"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.3,
                  },
                },
              }}
            >
              <motion.span className="inline-block" whileHover={{ scale: 1.05 }}>
                By Coders, For Coders!
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Level up your skills across the tech spectrum! Join a community of passionate developers, from competitive
            programmers to full-stack wizards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/leaderboard"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Leaderboard
            </Link>
            <Link
              href="/events"
              className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Events
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

