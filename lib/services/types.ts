import type { TeamMember, Event, LeaderboardEntry, User } from "@/types"

export interface TeamService {
  getTeamMembers(): Promise<TeamMember[]>
  getTeamMember(id: string): Promise<TeamMember | null>
  updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember>
}

export interface EventService {
  getEvents(filter?: { type?: string; status?: string }): Promise<Event[]>
  getEvent(id: string): Promise<Event | null>
  createEvent(data: Omit<Event, "id">): Promise<Event>
  updateEvent(id: string, data: Partial<Event>): Promise<Event>
}

export interface LeaderboardService {
  getLeaderboard(limit?: number): Promise<LeaderboardEntry[]>
  getUserRank(userId: string): Promise<LeaderboardEntry | null>
  updateScore(userId: string, newScore: number): Promise<void>
}

export interface UserService {
  getCurrentUser(): Promise<User | null>
  updateUser(id: string, data: Partial<User>): Promise<User>
  getUserAchievements(userId: string): Promise<Achievement[]>
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
}

