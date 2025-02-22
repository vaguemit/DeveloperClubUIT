"use client"

import type React from "react"

import { Calendar } from "lucide-react"

interface Event {
  id: number
  name: string
  date: string
}

interface EventsMenuProps {
  events: Event[]
  onEventSelect: (eventId: number) => void
  selectedEventId: number | null
}

const EventsMenu: React.FC<EventsMenuProps> = ({ events, onEventSelect, selectedEventId }) => {
  return (
    <div className="bg-black border border-gray-900 rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-300 p-4 border-b border-gray-900">Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <button
              onClick={() => onEventSelect(event.id)}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
                selectedEventId === event.id
                  ? "bg-gray-900 text-gray-300"
                  : "text-gray-500 hover:bg-gray-900 hover:text-gray-300"
              }`}
            >
              <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
              <div>
                <span className="font-medium block">{event.name}</span>
                <span className="text-sm text-gray-600">{event.date}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventsMenu

