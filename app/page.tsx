import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"
import FloatingHearts from "@/components/floating-hearts"
import Hero from "@/components/hero"
import QuoteSection from "@/components/quote-section"
import Countdown from "@/components/countdown"
import Gallery from "@/components/gallery"
import VideoSection from "@/components/video-section"
import BirthdayMessage from "@/components/birthday-message"

export default function PushpanjaliBirthday() {
  return (
    <div className="bg-black text-white">
      <ParticlesBackground />
      <FloatingHearts />

      <div className="content-layer">
        <Navigation />

        <Hero />

        <QuoteSection quote="Your smile lights up the darkest corners of my heart" alignment="center" />

        <Countdown />

        <QuoteSection quote="In a garden full of flowers, you're the most beautiful bloom" alignment="left" />

        <Gallery />

        <VideoSection />

        <QuoteSection quote="Every moment with you feels like a dream wrapped in love" alignment="center" />

        <BirthdayMessage />

        <footer className="py-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-pink-300/60 text-sm font-light tracking-[0.2em] uppercase">
              Made with love for Pushpanjali's special day -- by Shashank
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
