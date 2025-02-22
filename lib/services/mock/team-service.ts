import type { TeamMember, TeamCategory } from "@/types"
import type { TeamService } from "../types"

export class MockTeamService implements TeamService {
  private categories: TeamCategory[] = [
    {
      id: "faculty-coordinators",
      name: "Faculty Coordinators",
      members: [
        {
          id: "6",
          name: "Deepansh Raj",
          role: "Faculty Coordinator",
          image: "/placeholder.svg",
          categoryId: "faculty-coordinators",
          social: { linkedin: "https://www.linkedin.com/in/deepansh-raj-66490514a/" },
        },
        {
          id: "7",
          name: "Manender Dutt",
          role: "Faculty Coordinator",
          image: "/placeholder.svg",
          categoryId: "faculty-coordinators",
          social: { linkedin: "https://www.linkedin.com/in/manender-dutt/" },
        },
      ],
    },
    {
      id: "web-development",
      name: "Web Development",
      members: [
        {
          id: "1",
          name: "Jay Bhuptani",
          role: "Web Development Lead",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2016.18.36_749af8a7.jpg-G2xDbryS9jydTXv9RtJBN1cFqS452h.jpeg",
          categoryId: "web-development",
          social: { github: "#", linkedin: "https://www.linkedin.com/in/jay-bhuptani-566343194/" },
        },
        {
          id: "2",
          name: "Varun Jethani",
          role: "Web Development Lead",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2017.23.37_771cc3f7.jpg-baUR4QzyAoGPsQQo44N1jjbHx2EScL.jpeg",
          categoryId: "web-development",
          social: { github: "#", linkedin: "https://www.linkedin.com/in/varun-jethani-477434247/" },
        },
        {
          id: "5",
          name: "Kirtan Chauhan",
          role: "Web Development Coordinator",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2018.07.00_401f3db7.jpg-NXq19s5SLltwYs9niX5HY13Ojlsqzl.jpeg",
          categoryId: "web-development",
          social: { github: "#", linkedin: "https://www.linkedin.com/in/kirtan-chauhan-773071254/" },
        },
      ],
    },
    {
      id: "dsa-cp",
      name: "DSA & Competitive Programming",
      members: [
        {
          id: "3",
          name: "Mit Parikh",
          role: "DSA and CP Lead",
          image: "/placeholder.svg",
          categoryId: "dsa-cp",
          social: {
            github: "https://github.com/vaguemit",
            linkedin: "https://www.linkedin.com/in/mit-parikh-6aaba0333/",
            instagram: "https://www.instagram.com/vaguemit",
          },
        },
        {
          id: "4",
          name: "Lithika Sarvanakumar",
          role: "DSA and CP Lead",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2016.25.24_fdec3b2e.jpg-QVce6gokJapurwiMm9BhZLspXhG1t8.jpeg",
          categoryId: "dsa-cp",
          social: {
            github: "https://github.com/Lithika07",
            linkedin: "https://www.linkedin.com/in/lithika-s-a8bb23294/",
          },
        },
      ],
    },
  ]

  async getTeamCategories(): Promise<TeamCategory[]> {
    return this.categories
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return this.categories.flatMap((category) => category.members)
  }

  async getTeamMember(id: string): Promise<TeamMember | null> {
    for (const category of this.categories) {
      const member = category.members.find((m) => m.id === id)
      if (member) return member
    }
    return null
  }

  async updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember> {
    for (const category of this.categories) {
      const index = category.members.findIndex((m) => m.id === id)
      if (index !== -1) {
        category.members[index] = { ...category.members[index], ...data }
        return category.members[index]
      }
    }
    throw new Error("Member not found")
  }
}

