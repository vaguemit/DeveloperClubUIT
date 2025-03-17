export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  categoryId: string
  social: {
    twitter?: string
    instagram?: string
    github?: string
    linkedin?: string
  }
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  type: "contest" | "workshop" | "meetup"
  status: "upcoming" | "ongoing" | "completed"
  registrationLink?: string
}

export interface LeaderboardEntry {
  id: string
  userId: string
  username: string
  score: number
  rank: number
  contests: number
  problemsSolved: number
  lastActive: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "member"
  joinedAt: string
  achievements: Achievement[]
}

export interface Achievement {
  id: string
  name: string
  description: string
  earnedAt: string
}

export interface TeamCategory {
  id: string
  name: string
  members: TeamMember[]
}

export interface Member {
  id: string
  created_at: string
  name: string
  role: string
  image: string
  categoryId: string
  social: {
    twitter?: string
    instagram?: string
    github?: string
    linkedin?: string
  }
}

