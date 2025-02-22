const round1Data = [
  // ... (paste the entire JSON array for Round 1 here)
]

const round2Data = [
  // ... (paste the entire JSON array for Round 2 here)
]

function processLeaderboardData(data) {
  return data
    .slice(1)
    .sort((a, b) => b["Unnamed: 6"] - a["Unnamed: 6"])
    .map((participant, index) => ({
      rank: index + 1,
      name: participant["Test Results"],
      email: participant["Unnamed: 1"],
      startTime: participant["Unnamed: 2"],
      duration: participant["Unnamed: 3"],
      level1Score: participant["Unnamed: 4"],
      level2Score: participant["Unnamed: 5"],
      totalScore: participant["Unnamed: 6"],
    }))
}

const round1Leaderboard = processLeaderboardData(round1Data)
const round2Leaderboard = processLeaderboardData(round2Data)

console.log(
  JSON.stringify(
    {
      round1: round1Leaderboard,
      round2: round2Leaderboard,
    },
    null,
    2,
  ),
)

