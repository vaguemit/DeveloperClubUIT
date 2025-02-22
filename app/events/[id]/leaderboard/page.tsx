"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import CodeAThonLeaderboard from "@/components/code-a-thon-leaderboard"

const events = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024" },
  // ... other events
]

export default function EventLeaderboard() {
  const params = useParams()
  const [event, setEvent] = useState<(typeof events)[0] | null>(null)
  const [leaderboardData, setLeaderboardData] = useState({ round1: [], round2: [] })

  useEffect(() => {
    const eventId = Number(params.id)
    const foundEvent = events.find((e) => e.id === eventId)
    setEvent(foundEvent || null)

    // Fetch leaderboard data
    // In a real application, you would fetch this from an API
    Promise.all([
      fetch("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snippet-WrgSEQIRleqd7zwsXYEX958fEY4V2C.txt"),
      fetch("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/snippet-7yjcrYCeWZ3Pm0VC2eoTBmB4Rw76u2.txt"),
    ])
      .then(([round1Response, round2Response]) => Promise.all([round1Response.json(), round2Response.json()]))
      .then(([round1Data, round2Data]) => {
        const processData = (data) =>
          data
            .slice(1)
            .sort((a, b) => b["Unnamed: 6"] - a["Unnamed: 6"])
            .map((participant, index) => ({
              rank: index + 1,
              name: participant["Test Results"],
              email: participant["Unnamed: 1"],
              startTime: participant["Unnamed: 2"],
              duration: participant["Unnamed: 3"],
              level1Score: participant["Unnamed: 4"],
              level2Score: participant["Unnamed: 5"],
              totalScore: participant["Unnamed: 6"],
            }))

        setLeaderboardData({
          round1: processData(round1Data),
          round2: processData(round2Data),
        })
      })
      .catch((error) => console.error("Error fetching leaderboard data:", error))
  }, [params.id])

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{event.name} Leaderboard</h1>
      <p className="mb-8">Event Date: {event.date}</p>
      <CodeAThonLeaderboard round1Participants={leaderboardData.round1} round2Participants={leaderboardData.round2} />
      <Link href="/events" className="mt-8 inline-block text-blue-500 hover:underline">
        &larr; Back to Events
      </Link>
    </div>
  )
}

