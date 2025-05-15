"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Video } from "lucide-react"

export default function VideoCard({ video }) {
  const [isHovering, setIsHovering] = useState(false)
  const [hasHydrated, setHasHydrated] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[9/16] w-full">
        <Image src={video.src || "/placeholder.svg"} alt={video.title} fill className="object-cover" />

        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
          <Video className="h-3 w-3 mr-1" />
          <span>Video</span>
        </div>

        {/* ✅ Safe Hover Overlay */}
        {hasHydrated && (
          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-16 w-16 rounded-full bg-gold/80 flex items-center justify-center">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-playfair font-bold text-lg mb-2">{video.title}</h3>
        <p className="font-poppins text-sm text-gray-600 italic">{video.caption}</p>
      </div>
    </div>
  )
}
