"use client"

import type React from "react"
import { motion } from "framer-motion"

interface PixelTextProps {
  text: string
  color: string
}

const PixelText: React.FC<PixelTextProps> = ({ text, color }) => {
  const pixelSize = 4
  const fontSize = 32
  const canvasSize = fontSize * 1.5

  const drawPixelText = (ctx: CanvasRenderingContext2D, text: string) => {
    ctx.font = `bold ${fontSize}px Arial`
    ctx.fillStyle = color
    ctx.fillText(text, 0, fontSize)

    const imageData = ctx.getImageData(0, 0, canvasSize, canvasSize)
    ctx.clearRect(0, 0, canvasSize, canvasSize)

    for (let y = 0; y < canvasSize; y += pixelSize) {
      for (let x = 0; x < canvasSize; x += pixelSize) {
        const i = (y * canvasSize + x) * 4
        if (imageData.data[i + 3] > 128) {
          ctx.fillRect(x, y, pixelSize, pixelSize)
        }
      }
    }
  }

  return (
    <motion.span
      initial={{ display: "inline-block" }}
      animate={{
        color: [color, "#ffffff", color],
        transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      }}
      style={{ position: "relative", display: "inline-block", marginRight: "0.25em" }}
    >
      <canvas
        width={canvasSize}
        height={canvasSize}
        style={{
          width: `${canvasSize}px`,
          height: `${canvasSize}px`,
          display: "inline-block",
          verticalAlign: "middle",
        }}
        ref={(canvas) => {
          if (canvas) {
            const ctx = canvas.getContext("2d")
            if (ctx) drawPixelText(ctx, text)
          }
        }}
      />
    </motion.span>
  )
}

export default PixelText

