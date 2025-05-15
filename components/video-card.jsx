"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Video } from "lucide-react"

export default function VideoCard({ video }) {
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  const isMP4 = video.src?.toLowerCase().endsWith(".mp4")

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative aspect-[9/16] w-full">
        {isMP4 ? (
          <video
            src={video.src}
            controls // ✅ shows play/pause/volume UI
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={video.src || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover"
          />
        )}

        {/* Video badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
          <Video className="h-3 w-3 mr-1" />
          <span>Video</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-playfair font-bold text-lg mb-2">{video.title}</h3>
        <p className="font-poppins text-sm text-gray-600 italic">{video.caption}</p>
      </div>
    </div>
  )
}
