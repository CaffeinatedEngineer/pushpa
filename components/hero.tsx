"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-in flex justify-center items-center w-full">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.1em] uppercase mb-8 leading-none text-center">
            PUSHPANJALI
          </h1>
        </div>

        <div className="fade-in fade-in-delay-1">
          <p className="text-2xl md:text-3xl text-pink-300 font-bold tracking-[0.3em] uppercase mb-16">
            AUGUST 9, 2025
          </p>
        </div>

        <div className="fade-in fade-in-delay-2">
          <p className="text-xl md:text-2xl text-white/80 font-light italic leading-relaxed max-w-3xl mx-auto">
            "I love you in every universe."
          </p>
        </div>
      </div>
    </section>
  )
}
