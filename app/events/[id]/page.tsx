"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import CodeAThonLeaderboard from "@/components/code-a-thon-leaderboard"
import EventPhotos from "@/components/event-photos"

const events = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024" },
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025" },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025" },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025" },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025" },
]

export default function EventPage() {
  const params = useParams()
  const [event, setEvent] = useState<(typeof events)[0] | null>(null)
  const [leaderboardData, setLeaderboardData] = useState([])

  useEffect(() => {
    const eventId = Number(params.id)
    const foundEvent = events.find((e) => e.id === eventId)
    setEvent(foundEvent || null)

    // Fetch leaderboard data
    // In a real application, you would fetch this from an API based on the event ID
    const mockData = [
      { rank: 1, name: "John Doe", level1Score: 75, level2Score: 120, totalScore: 195 },
      { rank: 2, name: "Jane Smith", level1Score: 70, level2Score: 110, totalScore: 180 },
      { rank: 3, name: "Bob Johnson", level1Score: 65, level2Score: 100, totalScore: 165 },
      // Add more mock data as needed
    ]
    setLeaderboardData(mockData)
  }, [params.id])

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">{event.name}</h2>
        <p className="text-gray-300">Date: {event.date}</p>
      </div>
      <CodeAThonLeaderboard participants={leaderboardData} eventName={event.name} />
      <EventPhotos eventId={event.id} eventName={event.name} />
    </div>
  )
}

