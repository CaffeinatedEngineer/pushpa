"use client"

export default function BirthdayMessage() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] uppercase mb-16 text-pink-300">
          HAPPY BIRTHDAY
        </h2>

        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-20 max-w-3xl mx-auto italic">
          "May your special day be filled with love, laughter, and all the beautiful things life has to offer. Here's to
          another year of wonderful memories and endless possibilities."
        </p>

        <div className="border-t border-pink-300/20 pt-16">
          <p className="text-lg text-pink-300 font-light tracking-[0.2em] uppercase mb-2">WITH ALL MY LOVE — ALWAYS</p>
          <p className="text-2xl">💕</p>
        </div>
      </div>
    </section>
  )
}
