"use client"

import { motion } from "framer-motion"
import { Trophy, Star } from "lucide-react"
import { useState, useEffect } from "react"

interface LeaderboardEntry {
  handle: string
  name: string | null
  rating: number | null
  rank: string | null
}

const getRatingColor = (rating: number | null): string => {
  if (rating === null) return "text-gray-400"
  if (rating >= 2900) return "text-red-600"
  if (rating >= 2600) return "text-red-500"
  if (rating >= 2400) return "text-red-400"
  if (rating >= 2300) return "text-orange-500"
  if (rating >= 2200) return "text-orange-400"
  if (rating >= 1900) return "text-purple-500"
  if (rating >= 1600) return "text-blue-500"
  if (rating >= 1400) return "text-cyan-500"
  if (rating >= 1200) return "text-green-500"
  return "text-gray-400"
}

const getRatingTitle = (rating: number | null): string => {
  if (rating === null) return "Unrated"
  if (rating >= 2900) return "Legendary Grandmaster"
  if (rating >= 2600) return "International Grandmaster"
  if (rating >= 2400) return "Grandmaster"
  if (rating >= 2300) return "International Master"
  if (rating >= 2200) return "Master"
  if (rating >= 1900) return "Candidate Master"
  if (rating >= 1600) return "Expert"
  if (rating >= 1400) return "Specialist"
  if (rating >= 1200) return "Pupil"
  return "Newbie"
}

export default function LeaderboardTable() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    fetch("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snippet-sYh16kpStxFPJcUfFpwz0RUmHSftft.txt")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data
          .filter((entry: LeaderboardEntry) => entry.rating !== null)
          .sort((a: LeaderboardEntry, b: LeaderboardEntry) => (b.rating || 0) - (a.rating || 0))
        setLeaderboardData(sortedData)
      })
      .catch((error) => console.error("Error fetching leaderboard data:", error))
  }, [])

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Codeforces Leaderboard
        </h2>
        <p className="text-gray-400">Witness the rise of our coding titans!</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {leaderboardData.slice(0, 3).map((entry, index) => (
          <motion.div
            key={entry.handle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {index === 0 && <Trophy className="w-8 h-8 text-yellow-400 mr-2" />}
                {index === 1 && <Star className="w-8 h-8 text-gray-400 mr-2" />}
                {index === 2 && <Star className="w-8 h-8 text-amber-600 mr-2" />}
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <div className={`text-lg font-semibold ${getRatingColor(entry.rating)}`}>{entry.rating}</div>
            </div>
            <div className={`text-xl font-medium mb-2 truncate ${getRatingColor(entry.rating)}`}>{entry.handle}</div>
            <div className="text-sm text-gray-400">{getRatingTitle(entry.rating)}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl"
      >
        <table className="w-full">
          <thead className="bg-zinc-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Username
              </th>
              <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                Rating
              </th>
              <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">
                Title
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-600">
            {leaderboardData.slice(3).map((entry, index) => (
              <tr key={entry.handle} className="hover:bg-zinc-700/50 transition-colors">
                <td className="py-3 px-4 whitespace-nowrap">{index + 4}</td>
                <td className={`py-3 px-4 whitespace-nowrap font-medium ${getRatingColor(entry.rating)}`}>
                  {entry.handle}
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-right">{entry.rating}</td>
                <td className="py-3 px-4 whitespace-nowrap text-right text-sm hidden md:table-cell">
                  {getRatingTitle(entry.rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

