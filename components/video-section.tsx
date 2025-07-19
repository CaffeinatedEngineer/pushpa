"use client"

import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] uppercase mb-6">
            SPECIAL MOMENTS
          </h2>
          <p className="text-lg text-pink-300 font-light italic">
            "Every moment with you feels like a dream wrapped in love."
          </p>
        </div>

        <div className="relative aspect-video bg-white/5 group cursor-pointer hover-zoom">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-pink-300/20 rounded-full flex items-center justify-center group-hover:bg-pink-300/30 transition-colors duration-300">
              <Play className="w-10 h-10 text-pink-300 ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="text-white/80 font-light tracking-wide uppercase text-sm">YOUR SPECIAL VIDEO</p>
          </div>
        </div>
      </div>
    </section>
  )
}
