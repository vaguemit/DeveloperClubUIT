"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"

const events = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024" },
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025" },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025" },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025" },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025" },
]

export default function EventPhotos() {
  const params = useParams()
  const [event, setEvent] = useState<(typeof events)[0] | null>(null)

  useEffect(() => {
    const eventId = Number(params.id)
    const foundEvent = events.find((e) => e.id === eventId)
    setEvent(foundEvent || null)
  }, [params.id])

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{event.name} Photos</h1>
      <p className="mb-8">Event Date: {event.date}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Replace with actual event photos */}
        {[1, 2, 3, 4, 5, 6].map((photoId) => (
          <div key={photoId} className="aspect-square bg-gray-800 rounded-lg"></div>
        ))}
      </div>
      <Link href="/events" className="mt-8 inline-block text-blue-500 hover:underline">
        &larr; Back to Events
      </Link>
    </div>
  )
}

