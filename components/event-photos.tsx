import type React from "react"
import Image from "next/image"
import { Expand } from "lucide-react"

interface EventPhotosProps {
  eventId: number
  eventName: string
  onExpand: () => void
  isExpanded: boolean
}

const EventPhotos: React.FC<EventPhotosProps> = ({ eventId, eventName, onExpand, isExpanded }) => {
  // Photos for Code-A-Thon Round 1 (eventId: 1)
  const round1Photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8130.jpg-rBPGmIdbzbpcDVLToRYXpZh19Ehhib.jpeg", // IMG_8130.jpg (stage setup)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20241016114250.jpg-qmA8tHXkr5giXUctrpXDtw50gfzOIR.jpeg", // IMG20241016114250.jpg
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20241016114957.jpg-PNBbTd8oghoxYlLu8xktuaa09IwHi8.jpeg", // IMG20241016114957.jpg
  ]

  // Photos for Code-A-Thon Round 2 (eventId: 2)
  const round2Photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8173.jpg-Ex43rwXAjsjeqKOiZtRpgIU5C7TCEF.jpeg", // IMG_8173.jpg (faculty monitoring)
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG20241016115904.jpg-xZsjlguUjgwSsvqxK1K1tDItJ4Bqba.jpeg", // IMG20241016115904.jpg
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8178.jpg-jsQl4cICTrlGtquD8EoQ45oU74iI87.jpeg", // IMG_8178.jpg
  ]

  // Photos for Code-A-Thon Week 1 (eventId: 3)
  const week1Photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0008.jpg-4EQQ2sAR9jjnTKKItE5vyroN1ProEQ.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0004.jpg-uQM9SqFyU2pUsrK1MCn9ddccoyffeB.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0005.jpg-TWsE3XtydJ0K2OjLktBLJGQ6XDut41.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0006.jpg-zkXpPq7qmNYqj8CPDiJ3tX09EoRpzv.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0010.jpg-bLFTFlCnE5hEacqqISwRiMgNqqzHY1.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0011.jpg-VT25DLlk0t1vxUUhR8tvUGAqr28UEJ.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250107-WA0007.jpg-WfBdZd2SAfEjHfh47qce7tRHs8GTKs.jpeg",
  ]

  // Photos for Code-A-Thon Week 2 (eventId: 4)
  const week2Photos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0008.jpg-zaMTmCIXnX42TfW6pWg75FJpBb29aY.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0007.jpg-s83WS1uJ1rmctQbCcxNWQPXN8h6W2L.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0012.jpg-ckNP9diRiKbsV25jlYYyw8NgaMRNuD.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0011.jpg-aJW1NnvGWevxR4WABIZODZ0aJbgCV6.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0004.jpg-028V5WkZ5fgGoJFV3vL0k2nSpM4yWo.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0006.jpg-CycSmomJmzwN5cF3jlqHbO3SXbKgK6.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0005.jpg-19CJ4lMeJ0OQdBkpvvAZ3Ojz0bUt3O.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0010.jpg-UFIw4qM13BvKPJ967eKk4nzvt6cv3k.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250129-WA0013.jpg-FuqkiQW35mT3CotAZuxu8C2iGypnxH.jpeg",
  ]

  // Add the DSA & CP Session photos
  const dsaSessionPhotos = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_ac827d4e.jpg-02P2OGB9qXbetWj7DhaJ537ACXvYxZ.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.35_08ca052b.jpg-B2rKTToIsQeNrw8VfepZxAgoWHUNo5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_eb6848fd.jpg-3NJJ5S7eBu8kTworGBTAbA0eZCgq5o.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_afd5d3a7.jpg-SXIPW1ZRZTQZAPm4Z2QafRiuNPXy6k.jpeg",
  ]

  // Select photos based on event ID
  const getEventPhotos = () => {
    switch (eventId) {
      case 1:
        return round1Photos
      case 2:
        return round2Photos
      case 3:
        return week1Photos
      case 4:
        return week2Photos
      case 8: // DSA & CP Session
        return [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_ac827d4e.jpg-02P2OGB9qXbetWj7DhaJ537ACXvYxZ.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.35_08ca052b.jpg-B2rKTToIsQeNrw8VfepZxAgoWHUNo5.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_eb6848fd.jpg-3NJJ5S7eBu8kTworGBTAbA0eZCgq5o.jpeg",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2019.43.36_afd5d3a7.jpg-SXIPW1ZRZTQZAPm4Z2QafRiuNPXy6k.jpeg",
        ]
      default:
        return [
          `/placeholder.svg?height=150&width=150&text=Photo 1`,
          `/placeholder.svg?height=150&width=150&text=Photo 2`,
          `/placeholder.svg?height=150&width=150&text=Photo 3`,
          `/placeholder.svg?height=150&width=150&text=Photo 4`,
        ]
    }
  }

  const photos = getEventPhotos()
  const displayedPhotos = isExpanded ? photos : photos.slice(0, 4)

  // Function to determine if expand button should be shown
  const shouldShowExpandButton = () => {
    if (!isExpanded) {
      // Always show expand button for Round 1, Round 2, and DSA & CP Session
      if (eventId === 1 || eventId === 2 || eventId === 8) {
        return true
      }
      // For other events, show only if there are more than 4 photos
      return photos.length > 4
    }
    return false
  }

  return (
    <div className="bg-black border border-gray-900 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-300">{eventName} Photos</h2>
        {shouldShowExpandButton() && (
          <button
            onClick={onExpand}
            className="text-gray-400 hover:text-white transition-colors"
            title="View in full screen"
          >
            <Expand size={20} />
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {displayedPhotos.map((photo, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg border border-gray-900">
            <Image
              src={photo || "/placeholder.svg"}
              alt={`${eventName} photo ${index + 1}`}
              fill
              className="object-cover hover:opacity-75 transition-opacity duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      {shouldShowExpandButton() && (
        <button onClick={onExpand} className="w-full mt-2 text-sm text-blue-500 hover:text-blue-400 transition-colors">
          {photos.length > 4 ? `Show all ${photos.length} photos` : "View in full screen"}
        </button>
      )}
    </div>
  )
}

export default EventPhotos

