import type { TeamService, EventService, LeaderboardService, UserService } from "./types"
import { MockTeamService } from "./mock/team-service"

export class ServiceProvider {
  private static instance: ServiceProvider
  private teamService: TeamService
  private eventService: EventService
  private leaderboardService: LeaderboardService
  private userService: UserService

  private constructor() {
    // Initialize with mock services by default
    this.teamService = new MockTeamService()
    // Initialize other services...
  }

  public static getInstance(): ServiceProvider {
    if (!ServiceProvider.instance) {
      ServiceProvider.instance = new ServiceProvider()
    }
    return ServiceProvider.instance
  }

  public getTeamService(): TeamService {
    return this.teamService
  }

  // Add getters for other services...
}

