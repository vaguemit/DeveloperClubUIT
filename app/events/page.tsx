"use client"

import { useState, useEffect } from "react"
import EventsMenu from "@/components/events-menu"
import CodeAThonLeaderboard from "@/components/code-a-thon-leaderboard"
import CodeAThonWeekStandings from "@/components/code-a-thon-week-standings"
import EventPhotos from "@/components/event-photos"
import FullScreenModal from "@/components/full-screen-modal"
import { motion, AnimatePresence } from "framer-motion"

const events = [
  {
    id: 7,
    name: "30 Days Code Challenge",
    date: "August 21, 2024 - September 26, 2024",
    startDate: new Date("2024-08-21"),
  },
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024", startDate: new Date("2024-10-15") },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024", startDate: new Date("2024-10-17") },
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025", startDate: new Date("2025-01-07") },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025", startDate: new Date("2025-01-29") },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025", startDate: new Date("2025-02-05") },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025", startDate: new Date("2025-02-19") },
].sort((a, b) => a.startDate.getTime() - b.startDate.getTime())

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(events[0])
  const [leaderboardData, setLeaderboardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLeaderboardExpanded, setIsLeaderboardExpanded] = useState(false)
  const [isPhotosExpanded, setIsPhotosExpanded] = useState(false)

  useEffect(() => {
    if (selectedEvent) {
      setIsLoading(true)
      setError(null)

      if (selectedEvent.id === 1 || selectedEvent.id === 2) {
        const fetchUrl =
          selectedEvent.id === 1
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Round_1-8B1VCOTHt9b89ejddfNa9M67dRduHk.json"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Round_2-dfvDmW4fROsHN463k008ciiZhyfSrZ.json"

        fetch(fetchUrl)
          .then((response) => response.json())
          .then((data) => {
            const processedData = processLeaderboardData(data)
            if (selectedEvent.id === 1) {
              setLeaderboardData(processedData.slice(0, 50))
            } else {
              setLeaderboardData(processedData)
            }
          })
          .catch((error) => {
            console.error(`Error fetching Round ${selectedEvent.id} data:`, error)
            setError(`Failed to load Round ${selectedEvent.id} data`)
          })
          .finally(() => setIsLoading(false))
      } else {
        // For other events, we're not loading data, so just set isLoading to false
        setIsLoading(false)
      }
    }
  }, [selectedEvent])

  const processLeaderboardData = (data) => {
    return data
      .slice(1)
      .map((participant, index) => ({
        rank: index + 1,
        name: participant["Test Results"],
        level1Score: Number.parseFloat(participant["Unnamed: 4"]),
        level2Score: Number.parseFloat(participant["Unnamed: 5"]),
        totalScore: Number.parseFloat(participant["Unnamed: 6"]),
      }))
      .sort((a, b) => b.totalScore - a.totalScore)
  }

  const handleEventSelect = (eventId: number) => {
    const event = events.find((e) => e.id === eventId)
    setSelectedEvent(event || null)
  }

  const renderCodeAThonDetails = () => (
    <div className="space-y-4 mt-6">
      <h3 className="text-xl font-semibold">Objective</h3>
      <p>
        This event promises to be a remarkable catalyst in nurturing a robust coding culture and to bring out the
        Passionate coders from each year within UIT.
      </p>
      <h3 className="text-xl font-semibold">About Code-A-Thon</h3>
      <p>
        Code-A-Thon is meticulously designed to empower students, allowing them to refine their coding prowess, nurture
        their problem-solving abilities, and unleash their boundless creativity. The Code-A-thon will challenge
        participants to tackle intricate coding problems within a limited timeframe, cultivating critical thinking and
        the effective application of coding knowledge. The Code-A-Thon will inspire students to compete with their
        peers, motivating them to strive for coding excellence. Participants will have the golden opportunity to connect
        with like-minded individuals, exchange innovative ideas, and forge lasting connections. Code-A-Thon welcomes
        students from all branches and years, fostering diversity and unity among students with varied backgrounds.
      </p>
      <h3 className="text-xl font-semibold">Outcome</h3>
      <p>
        The Code-A-Thon will sharpen students' coding and problem-solving skills while fostering creativity and
        collaboration. It offers a chance to compete, connect with peers, and build confidence, leaving participants
        better prepared for future academic and professional success.
      </p>
    </div>
  )

  const shouldShowPhotos = (eventId: number) => {
    return eventId === 1 || eventId === 2 || eventId === 3 || eventId === 4
  }

  return (
    <div className="min-h-screen bg-black text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-300">Developer Club Events</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <EventsMenu events={events} onEventSelect={handleEventSelect} selectedEventId={selectedEvent?.id || null} />
          </div>
          <AnimatePresence mode="wait">
            {selectedEvent && (
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-8"
              >
                <div className={`w-full ${shouldShowPhotos(selectedEvent.id) ? "lg:w-2/3" : ""}`}>
                  {isLoading ? (
                    <p className="text-center text-gray-300">Loading event data...</p>
                  ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                  ) : (
                    <>
                      {selectedEvent.id === 7 ? (
                        <div className="bg-black border border-gray-900 p-6 rounded-lg">
                          <h2 className="text-2xl font-bold text-gray-300 mb-4">{selectedEvent.name}</h2>
                          <div className="space-y-4">
                            <p>
                              <strong>Date:</strong> {selectedEvent.date}
                            </p>
                            <p>
                              <strong>Event Coordinator:</strong> Prof. Manender Dutt
                            </p>
                            <p>
                              <strong>Participants:</strong> 516 (Registered), 127 (Completed)
                            </p>
                            <p>
                              <strong>Mode:</strong> Online (Hackerrank Platform)
                            </p>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Program Description</h3>
                            <p>
                              The "30 Days Code Challenge" was designed as a month-long initiative to help students
                              enhance their coding skills by solving a variety of problems across multiple domains,
                              including algorithms, data structures, web development, and more. Students were required
                              to solve one coding problem each day, fostering consistent learning and improving their
                              technical problem-solving abilities. Interactive sessions were also conducted to discuss
                              common challenges and solutions.
                            </p>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Objective</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>To develop a habit of consistent problem-solving among students.</li>
                              <li>
                                To provide hands-on experience with various programming challenges, including basic to
                                advanced levels.
                              </li>
                              <li>To improve analytical and logical thinking skills.</li>
                              <li>
                                To enhance technical expertise in preparation for hackathons, placements, and technical
                                competitions.
                              </li>
                              <li>
                                To cultivate self-discipline and time management through a structured daily challenge.
                              </li>
                            </ul>
                            <h3 className="text-xl font-semibold mt-6 mb-2">Outcome</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                A total of 127 students successfully completed all 30 days of coding challenges,
                                demonstrating significant improvements in their programming skills.
                              </li>
                              <li>
                                Participants gained confidence in tackling real-world problems and preparing for coding
                                competitions.
                              </li>
                              <li>
                                Many students reported better understanding and application of data structures and
                                algorithms in practical scenarios.
                              </li>
                              <li>
                                The program received positive feedback for motivating consistency and fostering a
                                collaborative learning environment.
                              </li>
                              <li>
                                Students developed the ability to write clean and optimized code, contributing to their
                                professional growth.
                              </li>
                            </ul>
                          </div>
                        </div>
                      ) : selectedEvent.id === 1 || selectedEvent.id === 2 ? (
                        <div className="bg-black border border-gray-900 p-6 rounded-lg">
                          <CodeAThonLeaderboard
                            participants={leaderboardData}
                            eventName={selectedEvent.name}
                            onExpand={() => setIsLeaderboardExpanded(true)}
                            isExpanded={false}
                          />
                          {renderCodeAThonDetails()}
                        </div>
                      ) : selectedEvent.id >= 3 && selectedEvent.id <= 6 ? (
                        <div className="bg-black border border-gray-900 p-6 rounded-lg">
                          <CodeAThonWeekStandings
                            participants={leaderboardData}
                            eventName={selectedEvent.name}
                            onExpand={() => setIsLeaderboardExpanded(true)}
                            isExpanded={false}
                          />
                          {renderCodeAThonDetails()}
                        </div>
                      ) : (
                        <p className="text-center text-gray-300">No data available for this event yet.</p>
                      )}
                    </>
                  )}
                </div>
                {shouldShowPhotos(selectedEvent.id) && (
                  <div className="w-full lg:w-1/3">
                    <EventPhotos
                      eventId={selectedEvent.id}
                      eventName={selectedEvent.name}
                      onExpand={() => setIsPhotosExpanded(true)}
                      isExpanded={false}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <FullScreenModal
        isOpen={isLeaderboardExpanded}
        onClose={() => setIsLeaderboardExpanded(false)}
        title={`${selectedEvent?.name || "Event"} Leaderboard`}
      >
        <div className="max-w-4xl mx-auto">
          {selectedEvent?.id === 1 || selectedEvent?.id === 2 ? (
            <CodeAThonLeaderboard
              participants={leaderboardData}
              eventName={selectedEvent.name}
              onExpand={() => {}}
              isExpanded={true}
            />
          ) : selectedEvent?.id >= 3 && selectedEvent?.id <= 6 ? (
            <CodeAThonWeekStandings
              participants={leaderboardData}
              eventName={selectedEvent.name}
              onExpand={() => {}}
              isExpanded={true}
            />
          ) : null}
          {renderCodeAThonDetails()}
        </div>
      </FullScreenModal>

      <FullScreenModal
        isOpen={isPhotosExpanded}
        onClose={() => setIsPhotosExpanded(false)}
        title={`${selectedEvent?.name || "Event"} Photos`}
      >
        <div className="max-w-4xl mx-auto">
          <EventPhotos
            eventId={selectedEvent?.id || 0}
            eventName={selectedEvent?.name || "Event"}
            onExpand={() => {}}
            isExpanded={true}
          />
        </div>
      </FullScreenModal>
    </div>
  )
}

