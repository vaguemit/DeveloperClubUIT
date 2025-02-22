import type React from "react"

const events = [
  { id: 1, name: "Code-A-Thon Round 1", date: "October 15, 2024" },
  { id: 2, name: "Code-A-Thon Round 2", date: "October 17, 2024" },
  { id: 3, name: "Code-A-Thon Week 1", date: "January 7, 2025" },
  { id: 4, name: "Code-A-Thon Week 2", date: "January 29, 2025" },
  { id: 5, name: "Code-A-Thon Week 3", date: "February 5, 2025" },
  { id: 6, name: "Code-A-Thon Week 4", date: "February 19, 2025" },
]

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-4 py-16">{children}</div>
}

