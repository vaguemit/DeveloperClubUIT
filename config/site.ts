export const siteConfig = {
  name: "Developer Club",
  description: "A competitive programming focused developer community",
  url: "https://devclub.com",
  ogImage: "https://devclub.com/og.jpg",
  links: {
    twitter: "https://twitter.com/devclub",
    github: "https://github.com/devclub",
    discord: "https://discord.com/invite/469kPB86xh",
    linkedin: "https://www.linkedin.com/company/developer-club-uit/",
  },
}

export const teamConfig = {
  roles: [
    "President",
    "Vice President",
    "Web Development Head",
    "DSA and CP Head",
    "Machine Learning Head",
    "Public Relations Head",
    "Creative Head",
    "Treasurer",
  ] as const,
}

export const eventConfig = {
  types: ["contest", "workshop", "meetup"] as const,
  status: ["upcoming", "ongoing", "completed"] as const,
}

