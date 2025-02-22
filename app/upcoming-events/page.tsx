import { Calendar, Sparkles } from "lucide-react"

export default function UpcomingEventsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center max-w-2xl mx-auto px-4">
        <Calendar className="mx-auto h-24 w-24 text-blue-500 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-white">Exciting Events Coming Soon!</h1>
        <p className="text-xl text-gray-400 mb-8">
          We're working on some amazing new events that will blow your mind. Stay tuned for updates!
        </p>
        <div className="flex items-center justify-center space-x-2 text-yellow-500">
          <Sparkles className="h-6 w-6" />
          <span className="text-lg font-semibold">Get ready for something spectacular!</span>
          <Sparkles className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

