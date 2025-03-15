"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TopThree, LeaderboardTable, type LeaderboardEntry } from "@/components/leaderboard-common"

export default function CodeforcesLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    fetch("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-dJoH5YhNv7YzpH9jsvpTnDtlkufBCV.json")
      .then((response) => response.json())
      .then((data) => {
        // Update darcasterr's and kushsaraf's ratings and ranks
        const updatedData = data.map((entry: LeaderboardEntry) => {
          if (entry.handle === "darcasterr") {
            return { ...entry, rating: 2005, rank: "candidate master" }
          } else if (entry.handle === "kushsaraf") {
            return { ...entry, rating: 898, rank: "newbie" }
          }
          return entry
        })

        const sortedData = updatedData
          .filter((entry: LeaderboardEntry) => entry.rating !== null)
          .sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.rating - a.rating)
        setLeaderboardData(sortedData)
      })
      .catch((error) => console.error("Error fetching leaderboard data:", error))
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Official Codeforces Leaderboard</h1>
      <Link href="/leaderboard" className="mb-8 inline-block text-blue-500 hover:underline">
        &larr; Back to Leaderboards
      </Link>
      {leaderboardData.length > 0 && (
        <>
          <TopThree entries={leaderboardData.slice(0, 3)} />
          <LeaderboardTable entries={leaderboardData.slice(3)} showRank={true} startRank={4} />
        </>
      )}
      {leaderboardData.length === 0 && <p className="text-center text-gray-400">Loading leaderboard data...</p>}
    </div>
  )
}

