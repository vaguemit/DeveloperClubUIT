"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Image Generator",
    description: "Create stunning artwork using artificial intelligence",
    tech: ["Python", "TensorFlow", "React"],
    stars: 128,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Blockchain Voting",
    description: "Secure and transparent voting system using blockchain",
    tech: ["Solidity", "Ethereum", "Web3.js"],
    stars: 95,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "AR Campus Tour",
    description: "Interactive campus tour with augmented reality",
    tech: ["Unity", "ARKit", "C#"],
    stars: 84,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ProjectsSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Discover innovative projects built by our community members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

