import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Medal } from "lucide-react"

interface Participant {
  rank: number
  name: string
}

interface CodeAThonWeekStandingsProps {
  participants: Participant[]
  eventName: string
}

const CodeAThonWeekStandings: React.FC<CodeAThonWeekStandingsProps> = ({ participants, eventName }) => {
  return (
    <div className="bg-black border border-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-300 mb-6">{eventName} Standings</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-900">
              <TableHead className="text-gray-400">Rank</TableHead>
              <TableHead className="text-gray-400">Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((participant, index) => (
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
    </div>
  )
}

export default CodeAThonWeekStandings

