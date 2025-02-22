import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Medal, Expand, ChevronDown } from "lucide-react"

interface Participant {
  rank: number
  name: string
}

interface CodeAThonWeekStandingsProps {
  participants: Participant[]
  eventName: string
  onExpand: () => void
  isExpanded: boolean
}

const CodeAThonWeekStandings: React.FC<CodeAThonWeekStandingsProps> = ({
  participants,
  eventName,
  onExpand,
  isExpanded,
}) => {
  const displayedParticipants = isExpanded ? participants : participants.slice(0, 6)

  return (
    <div className="bg-black border border-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-300">{eventName} Standings</h2>
        {!isExpanded && (
          <button
            onClick={onExpand}
            className="text-gray-400 hover:text-white transition-colors"
            title="Expand standings"
          >
            <Expand size={20} />
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-900">
              <TableHead className="text-gray-400">Rank</TableHead>
              <TableHead className="text-gray-400">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedParticipants.map((participant, index) => (
              <TableRow key={index} className="hover:bg-gray-900 transition-colors border-b border-gray-900">
                <TableCell className="font-medium text-gray-300">
                  <div className="flex items-center gap-2">
                    {index + 1 <= 3 ? (
                      <>
                        <Medal
                          className={`w-5 h-5 ${
                            index === 0 ? "text-yellow-400" : index === 1 ? "text-gray-400" : "text-amber-600"
                          }`}
                        />
                        <span>{index + 1}</span>
                      </>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-gray-400">{participant.name}</TableCell>
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

export default CodeAThonWeekStandings

