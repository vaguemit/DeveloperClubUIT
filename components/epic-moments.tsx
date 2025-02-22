"use client"

import { useEffect, useState } from "react"

const epicMoments = ["Moment 1", "Moment 2", "Moment 3", "Moment 4", "Moment 5"]

export default function EpicMoments() {
  const [currentMoment, setCurrentMoment] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoment((prev) => (prev + 1) % epicMoments.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return <></>
}

