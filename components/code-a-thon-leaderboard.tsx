"use client"

import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Medal, Expand, ChevronDown } from "lucide-react"

interface Participant {
  rank: number
  name: string
  level1Score: number
  level2Score: number
  totalScore: number
}

interface CodeAThonLeaderboardProps {
  participants: Participant[]
  eventName: string
  onExpand: () => void
  isExpanded: boolean
}

const CodeAThonLeaderboard: React.FC<CodeAThonLeaderboardProps> = ({
  participants,
  eventName,
  onExpand,
  isExpanded,
}) => {
  if (!participants || participants.length === 0) {
    return <p className="text-center text-gray-300">No leaderboard data available for this event.</p>
  }

  const displayedParticipants = isExpanded ? participants : participants.slice(0, 6)

  return (
    <div className="bg-black border border-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-300">{eventName} Leaderboard</h2>
        {!isExpanded && (
          <button
            onClick={onExpand}
            className="text-gray-400 hover:text-white transition-colors"
            title="Expand leaderboard"
          >
            <Expand size={20} />
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-900">
              <TableHead className="w-[60px] text-gray-400">Rank</TableHead>
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="w-[80px] text-gray-400">Level 1</TableHead>
              <TableHead className="w-[80px] text-gray-400">Level 2</TableHead>
              <TableHead className="w-[80px] text-gray-400">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedParticipants.map((participant, index) => (
              <TableRow key={index} className="hover:bg-gray-900 transition-colors border-b border-gray-900">
                <TableCell className="font-medium text-gray-300">
                  {index + 1 <= 3 ? (
                    <Medal
                      className={`w-5 h-5 inline-block mr-2 ${
                        index === 0 ? "text-yellow-600" : index === 1 ? "text-gray-500" : "text-yellow-800"
                      }`}
                    />
                  ) : null}
                  {index + 1}
                </TableCell>
                <TableCell className="text-gray-400">{participant.name}</TableCell>
                <TableCell className="text-gray-400">{participant.level1Score.toFixed(2)}</TableCell>
                <TableCell className="text-gray-400">{participant.level2Score.toFixed(2)}</TableCell>
                <TableCell className="font-bold text-gray-300">{participant.totalScore.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {!isExpanded && participants.length > 6 && (
        <div className="mt-4 text-center">
          <button
            onClick={onExpand}
            className="text-blue-500 hover:text-blue-400 transition-colors flex items-center justify-center mx-auto"
          >
            Show more <ChevronDown className="ml-1" size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default CodeAThonLeaderboard

