"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { TeamCategory } from "@/types"
import { ServiceProvider } from "@/lib/services/service-provider"

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
<rect width="${w}" height="${h}" fill="#1f1f1f" />
<rect id="r" width="${w}" height="${h}" fill="#333" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str)

// Add a helper function to determine custom image positioning
const getImageStyle = (memberId: string) => {
  if (memberId === "6") {
    // Deepansh Raj's ID
    return {
      objectPosition: "center 20%", // Adjust this value to move the image up or down
    }
  }
  return {}
}

export default function TeamSection() {
  const [categories, setCategories] = useState<TeamCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTeamCategories = async () => {
      try {
        const teamService = ServiceProvider.getInstance().getTeamService()
        const data = await teamService.getTeamCategories()
        setCategories(data)
      } catch (err) {
        setError("Failed to load team members")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadTeamCategories()
  }, [])

  if (loading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-400">Loading team members...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="bg-zinc-800/50 rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-square bg-zinc-700/50" />
                <div className="p-4">
                  <div className="h-6 bg-zinc-700/50 rounded w-2/3 mb-2" />
                  <div className="h-4 bg-zinc-700/50 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) return <div className="text-center text-red-500 py-20">Error: {error}</div>

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-400">Meet the passionate individuals driving our club forward.</p>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {category.members.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800"
                >
                  <div className="aspect-square relative bg-zinc-800">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      style={{
                        objectFit: "cover",
                        ...getImageStyle(member.id),
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(8, 8))}`}
                      priority={index === 0 || (category.id === "dsa-cp" && member.name === "Mit Parikh")}
                      quality={90}
                    />
                  </div>
                  <div className="p-4 flex items-end justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{member.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {member.role === "DSA and CP Lead" && "DSA and CP Lead 🏆"}
                        {member.role === "Web Development Lead" && "Web Development Lead 🚀"}
                        {member.role === "Faculty Coordinator" && "Faculty Coordinator 👨‍🏫"}
                        {member.role !== "DSA and CP Lead" &&
                          member.role !== "Web Development Lead" &&
                          member.role !== "Faculty Coordinator" &&
                          member.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {member.social.github && (
                        <Link
                          href={member.social.github}
                          className="text-gray-400 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                        </Link>
                      )}
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-gray-400 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin size={20} />
                        </Link>
                      )}
                      {member.social.instagram && (
                        <Link
                          href={member.social.instagram}
                          className="text-gray-400 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

