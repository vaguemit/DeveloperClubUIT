import type React from "react"
interface Event {
  id: number
  name: string
  date: string
  description: string
}

interface EventDetailsProps {
  event: Event
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">{event.name}</h2>
      <p className="text-gray-300 mb-2">Date: {event.date}</p>
      <p className="text-gray-300">{event.description}</p>
    </div>
  )
}

export default EventDetails

