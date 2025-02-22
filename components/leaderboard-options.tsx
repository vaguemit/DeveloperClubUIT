import Link from "next/link"

export default function LeaderboardOptions() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Developer Club Leaderboards
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href="/leaderboard/codeforces"
          className="block p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Official Codeforces Leaderboard</h3>
          <p className="text-gray-400">View the rankings based on official Codeforces ratings</p>
        </Link>
        <Link
          href="/leaderboard/weekly"
          className="block p-6 bg-zinc-800 rounded-lg shadow-lg hover:bg-zinc-700 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-2">Weekly College Leaderboard</h3>
          <p className="text-gray-400">Check out the rankings for our weekly college contests</p>
        </Link>
      </div>
    </div>
  )
}

