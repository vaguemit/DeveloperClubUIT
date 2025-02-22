"use client"

import type React from "react"

import { X } from "lucide-react"
import { motion } from "framer-motion"

interface FullScreenModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-zinc-900 shadow-xl rounded-2xl">
          <div className="flex justify-between items-center p-6 border-b border-zinc-700">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default FullScreenModal

