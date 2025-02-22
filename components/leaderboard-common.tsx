import { Trophy, Star } from "lucide-react"

export interface LeaderboardEntry {
  handle: string
  name: string | null
  rating: number
  rank: string | null
}

export const getRatingColor = (rating: number): string => {
  if (rating >= 2400) return "text-red-500"
  if (rating >= 2100) return "text-orange-500"
  if (rating >= 1900) return "text-purple-500"
  if (rating >= 1600) return "text-blue-500"
  if (rating >= 1400) return "text-cyan-500"
  if (rating >= 1200) return "text-green-500"
  return "text-gray-400"
}

export const TopThree = ({ entries }: { entries: LeaderboardEntry[] }) => (
  <div className="grid gap-4 md:grid-cols-3 mb-8">
    {entries.map((entry, index) => (
      <div key={entry.handle} className="bg-zinc-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {index === 0 && <Trophy className="w-8 h-8 text-yellow-400 mr-2" />}
            {index === 1 && <Star className="w-8 h-8 text-gray-400 mr-2" />}
            {index === 2 && <Star className="w-8 h-8 text-amber-600 mr-2" />}
            <span className="text-2xl font-bold">{index + 1}</span>
          </div>
          <div className={`text-lg font-semibold ${getRatingColor(entry.rating)}`}>{entry.rating.toFixed(2)}</div>
        </div>
        <div className={`text-xl font-medium mb-2 truncate ${getRatingColor(entry.rating)}`}>{entry.handle}</div>
        {entry.rank && <div className="text-sm text-gray-400">{entry.rank}</div>}
      </div>
    ))}
  </div>
)

export const LeaderboardTable = ({
  entries,
  showRank = true,
  startRank = 4,
}: {
  entries: LeaderboardEntry[]
  showRank?: boolean
  startRank?: number
}) => (
  <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
    <table className="w-full">
      <thead className="bg-zinc-700">
        <tr>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
          <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
          <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Rating</th>
          {showRank && (
            <th className="py-3 px-4 text-right text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">
              Rank
            </th>
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-600">
        {entries.map((entry, index) => (
          <tr key={entry.handle} className="hover:bg-zinc-700/50 transition-colors">
            <td className="py-3 px-4 whitespace-nowrap">{startRank + index}</td>
            <td className={`py-3 px-4 whitespace-nowrap font-medium ${getRatingColor(entry.rating)}`}>
              {entry.handle}
            </td>
            <td className="py-3 px-4 whitespace-nowrap text-right">{entry.rating}</td>
            {showRank && <td className="py-3 px-4 whitespace-nowrap text-right hidden md:table-cell">{entry.rank}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

