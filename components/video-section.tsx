"use client"

import { Play } from "lucide-react"

export default function VideoSection() {
  const handlePlayVideo = () => {
    const videoElement = document.getElementById('birthday-video') as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <section className="py-32 px-6 lg:px-8" id="video">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] uppercase mb-6">
            SPECIAL MOMENTS
          </h2>
          <p className="text-lg text-pink-300 font-light italic">
            "Every moment with you feels like a dream wrapped in love."
          </p>
        </div>

        <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl shadow-pink-500/20 border border-pink-400/30">
          {/* Replace the src with your actual video file path */}
          <video 
            id="birthday-video"
            className="w-full h-full object-cover"
            poster="/pushpa6.mp4"
            controls
          >
            {/* Add your video source here */}
            <source src="pushpa6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors duration-300 cursor-pointer"
            onClick={handlePlayVideo}
            style={{ display: 'none' }} /* This will be shown/hidden via JavaScript when video plays/pauses */
          >
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
