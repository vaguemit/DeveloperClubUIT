"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { TopThree, getRatingColor } from "@/components/leaderboard-common"

interface WeeklyLeaderboardEntry {
  handle: string
  count: number
  rating: number
}

const weeklyLeaderboardData: WeeklyLeaderboardEntry[] = [
  { handle: "Justarookie12", count: 3, rating: 197.74 },
  { handle: "Manthan14", count: 4, rating: 193.22 },
  { handle: "MeetSavlani", count: 4, rating: 183.36 },
  { handle: "kushsaraf", count: 4, rating: 167.75 },
  { handle: "Rudra1528", count: 3, rating: 152.96 },
  { handle: "RAZV3ER", count: 4, rating: 151.77 },
  { handle: "AGENT_77", count: 3, rating: 115.73 },
  { handle: "Rish164", count: 2, rating: 104.76 },
  { handle: "parthrajsinh_gohil", count: 3, rating: 102.67 },
  { handle: "RitikaRamwani", count: 4, rating: 92.72 },
  { handle: "abhii14", count: 2, rating: 91.6 },
  { handle: "tanisha_majmundar", count: 3, rating: 83.67 },
  { handle: "Akash_robo", count: 4, rating: 81.95 },
  { handle: "priti_151106", count: 3, rating: 81.87 },
  { handle: "vansh_494", count: 2, rating: 80.72 },
  { handle: "anujgoyalaman", count: 4, rating: 76.2 },
  { handle: "anonymous4140p", count: 4, rating: 70.58 },
  { handle: "Palak_Anand", count: 2, rating: 65.36 },
  { handle: "cutesurfer", count: 3, rating: 61.87 },
  { handle: "Aditi_2912", count: 4, rating: 56.39 },
  { handle: "NirajMatai", count: 3, rating: 51.63 },
  { handle: "yashchavda1601", count: 2, rating: 42.7 },
  { handle: "Vanshbhatt25", count: 2, rating: 40.44 },
  { handle: "satyam200403", count: 2, rating: 36.28 },
  { handle: "dharmik00", count: 2, rating: 36.22 },
  { handle: "Hetansh7722", count: 2, rating: 34.89 },
  { handle: "TejasThacker", count: 3, rating: 34.41 },
  { handle: "Dhyey24", count: 2, rating: 34.1 },
  { handle: "vrajsavani", count: 3, rating: 28.01 },
  { handle: "Dipika_18", count: 3, rating: 25.87 },
  { handle: "_Nisarg__", count: 2, rating: 24.0 },
  { handle: "sidhu-siddhesh", count: 2, rating: 21.17 },
  { handle: "Sonu_patel02", count: 4, rating: 20.47 },
  { handle: "Fancytech", count: 4, rating: 19.0 },
  { handle: "lavina83", count: 3, rating: 19.0 },
  { handle: "ku2407u313", count: 3, rating: 17.99 },
  { handle: "parul12", count: 2, rating: 17.2 },
  { handle: "demv07", count: 2, rating: 16.11 },
  { handle: "UnnatiThakur", count: 2, rating: 10.4 },
  { handle: "Hirva_Desai", count: 3, rating: 5.87 },
  { handle: "eq7", count: 2, rating: 0.0 },
]

export default function WeeklyLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<WeeklyLeaderboardEntry[]>([])

  useEffect(() => {
    const sortedData = [...weeklyLeaderboardData].sort((a, b) => b.rating - a.rating)
    setLeaderboardData(sortedData)
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Weekly College Leaderboard</h1>
      <Link href="/leaderboard" className="mb-8 inline-block text-blue-500 hover:underline">
        &larr; Back to Leaderboards
      </Link>
      {leaderboardData.length > 0 && (
        <>
          <TopThree entries={leaderboardData.slice(0, 3)} />
          <WeeklyLeaderboardTable entries={leaderboardData.slice(3)} />
        </>
      )}
      {leaderboardData.length === 0 && <p className="text-center text-gray-400">Loading leaderboard data...</p>}
    </div>
  )
}

function WeeklyLeaderboardTable({ entries }: { entries: WeeklyLeaderboardEntry[] }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
      <table className="w-full">
        <thead className="bg-zinc-700">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
            <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Rating</th>
            <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
              Contests
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-600">
          {entries.map((entry, index) => (
            <tr key={entry.handle} className="hover:bg-zinc-700/50 transition-colors">
              <td className="py-3 px-4 whitespace-nowrap">{index + 4}</td>
              <td className={`py-3 px-4 whitespace-nowrap font-medium ${getRatingColor(entry.rating)}`}>
                {entry.handle}
              </td>
              <td className="py-3 px-4 whitespace-nowrap text-right">{entry.rating.toFixed(2)}</td>
              <td className="py-3 px-4 whitespace-nowrap text-right">{entry.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

