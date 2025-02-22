import type React from "react"
import Image from "next/image"

interface EventPhotosProps {
  eventId: number
  eventName: string
}

const EventPhotos: React.FC<EventPhotosProps> = ({ eventId, eventName }) => {
  const mockPhotos = [
    `/placeholder.svg?height=150&width=150&text=Photo 1`,
    `/placeholder.svg?height=150&width=150&text=Photo 2`,
    `/placeholder.svg?height=150&width=150&text=Photo 3`,
    `/placeholder.svg?height=150&width=150&text=Photo 4`,
  ]

  return (
    <div className="bg-black border border-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-300">{eventName} Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockPhotos.map((photo, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-gray-900">
            <Image
              src={photo || "/placeholder.svg"}
              alt={`${eventName} photo ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:opacity-75 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventPhotos

