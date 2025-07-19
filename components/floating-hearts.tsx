"use client"

import { Heart } from "lucide-react"

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {[...Array(8)].map((_, i) => (
        <Heart
          key={i}
          className="absolute floating-heart w-4 h-4 text-pink-300"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
            animationDelay: `${i * 0.8}s`,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  )
}
