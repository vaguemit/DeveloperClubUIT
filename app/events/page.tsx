"use client"

import { useState, useEffect } from "react"
import EventsMenu from "@/components/events-menu"
import CodeAThonLeaderboard from "@/components/code-a-thon-leaderboard"
import CodeAThonWeekStandings from "@/components/code-a-thon-week-standings"
import EventPhotos from "@/components/event-photos"
import { motion, AnimatePresence } from "framer-motion"

const events = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024" },
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025" },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025" },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025" },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025" },
]

const week1Data = [
  { rank: 1, name: "Justarookie12" },
  { rank: 2, name: "Manthan14" },
  { rank: 3, name: "MeetSavlani" },
  { rank: 4, name: "RAZV3ER" },
  { rank: 5, name: "anujgoyalaman" },
  { rank: 6, name: "jax_afk" },
  { rank: 7, name: "parthrajsinh_gohil" },
  { rank: 8, name: "kushsaraf" },
  { rank: 9, name: "202307020118" },
  { rank: 10, name: "Akash_robo" },
  { rank: 11, name: "abhii14" },
  { rank: 12, name: "AGENT_77" },
  { rank: 13, name: "vansh_494" },
  { rank: 14, name: "Harsh2020" },
  { rank: 15, name: "2005_23" },
  { rank: 16, name: "Vedant81" },
  { rank: 17, name: "Riaan_2108" },
  { rank: 18, name: "tanisha_majmundar" },
  { rank: 19, name: "smit3005" },
  { rank: 20, name: "RitikaRamwani" },
  { rank: 21, name: "NirajMatai" },
  { rank: 22, name: "Utk_1954" },
  { rank: 23, name: "Palak_Anand" },
  { rank: 24, name: "anonymous4140p" },
  { rank: 25, name: "yug_1921" },
  { rank: 26, name: "202307020030" },
  { rank: 27, name: "Dipika_18" },
  { rank: 28, name: "Fancytech" },
  { rank: 29, name: "Dhyey24" },
  { rank: 30, name: "Csnister" },
  { rank: 31, name: "lavina83" },
  { rank: 32, name: "priti_151106" },
  { rank: 33, name: "cutesurfer" },
  { rank: 34, name: "Gag25" },
  { rank: 35, name: "parul12" },
  { rank: 36, name: "Aditi_2912" },
  { rank: 37, name: "naunidhbambah" },
  { rank: 37, name: "demv07" },
  { rank: 37, name: "eq7" },
  { rank: 37, name: "Hirva_Desai" },
  { rank: 37, name: "adityasinh" },
  { rank: 37, name: "Sonu_patel02" },
  { rank: 37, name: "Tirth_Patel_1632" },
  { rank: 37, name: "Priyansh9898" },
]

const week2Data = [
  { rank: 1, name: "kushsaraf" },
  { rank: 2, name: "Justarookie12" },
  { rank: 3, name: "MeetSavlani" },
  { rank: 4, name: "RAZV3ER" },
  { rank: 5, name: "Manthan14" },
  { rank: 6, name: "Bhavishya_Sharma_007" },
  { rank: 7, name: "ved_soni" },
  { rank: 8, name: "Manandevani" },
  { rank: 9, name: "shreenath_1696" },
  { rank: 10, name: "JayswalRiya13" },
  { rank: 11, name: "jiya_pal" },
  { rank: 11, name: "Vihaan_ma11" },
  { rank: 13, name: "priti_151106" },
  { rank: 14, name: "AnjaliBhalala" },
  { rank: 15, name: "hetarth2006" },
  { rank: 16, name: "Mahii_Shah" },
  { rank: 17, name: "India Keval_1" },
  { rank: 18, name: "Rudra_Borda" },
  { rank: 19, name: "kriyanshi24" },
  { rank: 20, name: "Aditi_2912" },
  { rank: 21, name: "Agastya_Borana" },
  { rank: 22, name: "AGENT_77" },
  { rank: 23, name: "Rish164" },
  { rank: 24, name: "Rudra1528" },
  { rank: 25, name: "akshay_chauhan" },
  { rank: 26, name: "Furi_ous007" },
  { rank: 27, name: "kviin_20" },
  { rank: 28, name: "dharmik2007" },
  { rank: 29, name: "Preyas_Thaker" },
  { rank: 30, name: "RitikaRamwani" },
  { rank: 31, name: "KU2407U655" },
  { rank: 32, name: "ronaldo_is_goat" },
  { rank: 33, name: "Videh" },
  { rank: 34, name: "anujgoyalaman" },
  { rank: 35, name: "tanisha_majmundar" },
  { rank: 36, name: "Palak_Anand" },
  { rank: 37, name: "Akash_robo" },
  { rank: 38, name: "Vanshbhatt25" },
  { rank: 39, name: "Abhijay301" },
  { rank: 40, name: "tusharsharma9372" },
  { rank: 41, name: "satyam200403" },
  { rank: 42, name: "vrajsavani" },
  { rank: 42, name: "dharmik00" },
  { rank: 44, name: "demv07" },
  { rank: 45, name: "kummmkummm" },
  { rank: 46, name: "sakinanana" },
  { rank: 47, name: "NirajMatai" },
  { rank: 48, name: "Hetansh7722" },
  { rank: 49, name: "sidhu-siddhesh" },
  { rank: 50, name: "saachi_yadav" },
  { rank: 51, name: "Avani_20" },
  { rank: 52, name: "Nilesh_1014" },
  { rank: 53, name: "anupam26" },
  { rank: 54, name: "ku2407u313" },
  { rank: 55, name: "saumyaadhyaru" },
  { rank: 56, name: "vansh_494" },
  { rank: 56, name: "nigam1234" },
  { rank: 58, name: "anonymous4140p" },
  { rank: 59, name: "simplytoxik" },
  { rank: 60, name: "TejasThacker" },
  { rank: 61, name: "Sonu_patel02" },
  { rank: 62, name: "UnnatiThakur" },
  { rank: 62, name: "PrimisOnStage" },
  { rank: 62, name: "mihir_kalra" },
  { rank: 62, name: "Dhruv_Soni_11" },
  { rank: 62, name: "Hirva_Desai" },
  { rank: 62, name: "lavina83" },
  { rank: 62, name: "Fancytech" },
  { rank: 62, name: "Kritika98" },
  { rank: 62, name: "India ku2407u596" },
  { rank: 62, name: "ku2407u670" },
  { rank: 62, name: "Dipika_18" },
]

const week3Data = [
  { rank: 1, name: "Manthan14" },
  { rank: 2, name: "MeetSavlani" },
  { rank: 3, name: "RitikaRamwani" },
  { rank: 4, name: "RAZV3ER" },
  { rank: 5, name: "Rudra1528" },
  { rank: 6, name: "kushsaraf" },
  { rank: 7, name: "AGENT_77" },
  { rank: 8, name: "Aditi_2912" },
  { rank: 9, name: "omi_patel" },
  { rank: 9, name: "Vanshbhatt25" },
  { rank: 9, name: "Hetansh7722" },
  { rank: 12, name: "anujgoyalaman" },
  { rank: 13, name: "dharmik00" },
  { rank: 14, name: "satyam200403" },
  { rank: 15, name: "parthrajsinh_gohil" },
  { rank: 16, name: "nid_hiiii" },
  { rank: 17, name: "Niyatiii" },
  { rank: 18, name: "Dhyey24" },
  { rank: 19, name: "rehan_khan575" },
  { rank: 20, name: "yashchavda1601" },
  { rank: 21, name: "NirajMatai" },
  { rank: 22, name: "sidhu-siddhesh" },
  { rank: 23, name: "_Nisarg__" },
  { rank: 24, name: "phx7597" },
  { rank: 25, name: "CLASH-CODE12" },
  { rank: 26, name: "lavina83" },
  { rank: 27, name: "Sonu_patel02" },
  { rank: 28, name: "Akash_robo" },
  { rank: 29, name: "anonymous4140p" },
  { rank: 30, name: "ku2407u313" },
  { rank: 31, name: "Dipika_18" },
  { rank: 31, name: "yashasvi2603" },
  { rank: 31, name: "TejasThacker" },
  { rank: 31, name: "eq7" },
  { rank: 31, name: "vrajsavani" },
  { rank: 31, name: "cutesurfer" },
]

const week4Data = [
  { rank: 1, name: "MeetSavlani" },
  { rank: 2, name: "Justarookie12" },
  { rank: 3, name: "Rudra1528" },
  { rank: 4, name: "Manthan14" },
  { rank: 5, name: "anonymous4140p" },
  { rank: 6, name: "kushsaraf" },
  { rank: 7, name: "AGENT_77" },
  { rank: 8, name: "tanisha_majmundar" },
  { rank: 9, name: "Akash_robo" },
  { rank: 10, name: "Rish164" },
  { rank: 11, name: "TejasThacker" },
  { rank: 11, name: "parthrajsinh_gohil" },
  { rank: 13, name: "cutesurfer" },
  { rank: 14, name: "Kavy_25" },
  { rank: 15, name: "RAZV3ER" },
  { rank: 16, name: "RitikaRamwani" },
  { rank: 17, name: "yashchavda1601" },
  { rank: 18, name: "Aditi_2912" },
  { rank: 19, name: "Sonu_patel02" },
  { rank: 20, name: "vrajsavani" },
  { rank: 21, name: "Vedant_81" },
  { rank: 22, name: "abhii14" },
  { rank: 23, name: "ku2407u313" },
  { rank: 24, name: "parul12" },
  { rank: 25, name: "UnnatiThakur" },
  { rank: 26, name: "_Nisarg__" },
  { rank: 27, name: "Fancytech" },
  { rank: 28, name: "aryanthummar" },
  { rank: 29, name: "Hirva_Desai" },
  { rank: 30, name: "anujgoyalaman" },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(events[0])
  const [leaderboardData, setLeaderboardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
            console.log(`Round ${selectedEvent.id} data:`, data)
            const processedData = processLeaderboardData(data)
            setLeaderboardData(processedData)
            console.log(`Processed Round ${selectedEvent.id} data:`, processedData)
          })
          .catch((error) => {
            console.error(`Error fetching Round ${selectedEvent.id} data:`, error)
            setError(`Failed to load Round ${selectedEvent.id} data`)
          })
          .finally(() => setIsLoading(false))
      } else if (selectedEvent.id === 3) {
        setLeaderboardData(week1Data)
        setIsLoading(false)
      } else if (selectedEvent.id === 4) {
        setLeaderboardData(week2Data)
        setIsLoading(false)
      } else if (selectedEvent.id === 5) {
        setLeaderboardData(week3Data)
        setIsLoading(false)
      } else if (selectedEvent.id === 6) {
        setLeaderboardData(week4Data)
        setIsLoading(false)
      } else {
        setLeaderboardData([])
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

  const renderLeaderboard = () => {
    if (selectedEvent?.id === 1 || selectedEvent?.id === 2) {
      return <CodeAThonLeaderboard participants={leaderboardData} eventName={selectedEvent.name} />
    } else if (
      selectedEvent?.id === 3 ||
      selectedEvent?.id === 4 ||
      selectedEvent?.id === 5 ||
      selectedEvent?.id === 6
    ) {
      return <CodeAThonWeekStandings participants={leaderboardData} eventName={selectedEvent.name} />
    } else {
      return <p className="text-center text-gray-300">No data available for this event yet.</p>
    }
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
                className="w-full lg:w-3/4 space-y-8"
              >
                {isLoading ? (
                  <p className="text-center text-gray-300">Loading leaderboard data...</p>
                ) : error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : (
                  renderLeaderboard()
                )}
                <EventPhotos eventId={selectedEvent.id} eventName={selectedEvent.name} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

