"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { id: 1, caption: "Beautiful moments together", query: "romantic couple photo aesthetic" },
  { id: 2, caption: "Laughter and joy", query: "happy girl laughing flowers" },
  { id: 3, caption: "Adventures we've shared", query: "travel adventure couple aesthetic" },
  { id: 4, caption: "Precious memories", query: "precious moments photography aesthetic" },
  { id: 5, caption: "Celebrating life", query: "celebration birthday aesthetic flowers" },
  { id: 6, caption: "Forever in my heart", query: "romantic heart aesthetic photography" },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden border-2 border-pink-400/30 shadow-2xl shadow-pink-500/20">
        <Image
          src={`/placeholder.svg?height=500&width=800&query=${images[currentIndex].query}`}
          alt={images[currentIndex].caption}
          fill
          className="object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-pink-400/30"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-pink-400/30"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Caption */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white text-xl font-medium drop-shadow-lg">{images[currentIndex].caption}</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-pink-400 scale-125" : "bg-pink-400/40 hover:bg-pink-400/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
