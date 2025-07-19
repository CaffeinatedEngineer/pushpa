"use client"

import Image from "next/image"
import { Heart } from "lucide-react"

const images = [
  { id: 1, caption: "BEAUTIFUL MOMENTS", query: "elegant portrait photography romantic" },
  { id: 2, caption: "PURE JOY", query: "candid happiness photography aesthetic" },
  { id: 3, caption: "PRECIOUS MEMORIES", query: "artistic lifestyle photography romantic" },
  { id: 4, caption: "CELEBRATING LIFE", query: "celebration photography aesthetic flowers" },
  { id: 5, caption: "FOREVER CHERISHED", query: "timeless portrait photography love" },
  { id: 6, caption: "HEART FULL OF LOVE", query: "romantic photography aesthetic couple" },
]

export default function Gallery() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] uppercase text-center mb-6">
            MEMORIES
          </h2>
          <p className="text-lg text-pink-300 text-center font-light italic">
            "In your smile, I see something more beautiful than stars."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {images.map((image) => (
            <div key={image.id} className="group relative">
              <div className="aspect-[4/5] relative overflow-hidden bg-white/5 hover-zoom">
                <Image
                  src={`/placeholder.svg?height=600&width=480&query=${image.query}`}
                  alt={image.caption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-300 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </div>
              <p className="text-sm text-pink-300 mt-4 font-bold tracking-[0.2em] uppercase">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
