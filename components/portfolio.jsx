"use client"
import { useEffect, useState } from "react"
import VideoCard from "@/components/video-card"
import AnimatedSection from "@/components/animated-section"

export default function Portfolio() {
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  // Real Moments from Events
  const realMomentsVideos = [
    {
      id: 1,
      title: "NCS Hack",
      src: "/ncshack.mp4",
      caption: "Captured the energy and teamwork at NCS Hack — a fast-paced day of ideas, coding, and community.",
    },
    {
      id: 2,
      title: "Enigma Ideathon (Work & Networking)",
      src: "/momentsenigma.mp4",
      caption: "From brainstorms to deep work — a look into how students connect, collaborate, and create during Enigma.",
    },
    {
      id: 3,
      title: "Enigma Feedback",
      src: "/feedback.mp4",
      caption: "Post-event realness — I asked participants how they felt about Enigma, and their feedback says it all.",
    },
    {
      id: 4,
      title: "DevImpact Event Hangout",
      src: "/devimpact.mp4",
      caption: "Mini hangout during the DevImpact event — chill conversations, small laughs, and casual content.",
    },
    {
      id: 5,
      title: "Earth Day Snaps",
      src: "/earthday.mp4",
      caption: "Quick Earth Day memories — tiny moments of awareness, green action, and chill vibes.",
    },
  ]

  // Campus Life & Micro-Vlogs
  const campusLifeVideos = [
    {
      id: 6,
      title: "International Day of Rivers",
      src: "/international day of rivers.mp4",
      caption: "Went around campus asking students how they feel about the International Day of Rivers — raw, real answers.",
    },
    {
      id: 7,
      title: "Moana Movie Vlog",
      src: "/movie night.mp4",
      caption: "A tiny vlog of heading out to see Moana — just pure vibes, movement, and mood.",
    },
    {
      id: 8,
      title: "Living Alone in Dubai",
      src: "/dubai life.mp4",
      caption: "Life lately in Dubai — living solo, growing daily, and documenting the in-between moments.",
    },
    {
      id: 9,
      title: "Friends & Fun Moments Vlog",
      src: "/friends vlog.mp4",
      caption: "No script, just laughter — capturing the energy of real moments with friends.",
    },
  ]

  // Travel Snaps
  const travelVideos = [
    {
      id: 10,
      title: "Global Village Trip",
      src: "/global village.mp4",
      caption: "Exploring Global Village through my lens — food, lights, and joyful little moments.",
    },
    {
      id: 11,
      title: "Timgad Mini Vlog",
      src: "/timgad.mp4",
      caption: "A mini travel vlog from Timgad — history, ruins, and dusty roads that tell stories.",
    },
  ]

  // Creative Stuff
  const creativeVideos = [
    {
      id: 12,
      title: "ASMR Boxing / Packing",
      src: "/snapins-ai_3430323552362379179.mp4",
      caption: "Satisfying ASMR-style video of packing an order — sounds, flow, and calm visuals.",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">Visual Storytelling Gallery</h2>
          <p className="text-center text-gray-600 font-poppins mb-12 max-w-2xl mx-auto">
            A collection of short-form videos showcasing moments, stories, and creative content. Click on any video to
            watch.
          </p>
        </AnimatedSection>

        {/* Real Moments from Events */}
        <AnimatedSection className="mb-16" animation="fade-in-up" rootMargin="-50px">
          <h3 className="font-playfair text-2xl font-bold mb-8 border-l-4 border-gold pl-4">💡 Real Moments from Events</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {realMomentsVideos.map((video, index) => (
              <div
                key={video.id}
                className={`stagger-item stagger-delay-${(index % 5) + 1} ${hasHydrated && index < 5 ? "is-visible" : ""}`}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Campus Life & Micro-Vlogs */}
        <AnimatedSection className="mb-16" animation="fade-in-up" rootMargin="-50px">
          <h3 className="font-playfair text-2xl font-bold mb-8 border-l-4 border-gold pl-4">🎤 Campus Life & Micro-Vlogs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {campusLifeVideos.map((video, index) => (
              <div
                key={video.id}
                className={`stagger-item stagger-delay-${(index % 5) + 1} ${hasHydrated && index < 5 ? "is-visible" : ""}`}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Travel Snaps */}
        <AnimatedSection className="mb-16" animation="fade-in-up" rootMargin="-50px">
          <h3 className="font-playfair text-2xl font-bold mb-8 border-l-4 border-gold pl-4">🌍 Travel Snaps</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {travelVideos.map((video, index) => (
              <div
                key={video.id}
                className={`stagger-item stagger-delay-${(index % 5) + 1} ${hasHydrated && index < 5 ? "is-visible" : ""}`}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Creative Stuff */}
        <AnimatedSection className="mb-16" animation="fade-in-up" rootMargin="-50px">
          <h3 className="font-playfair text-2xl font-bold mb-8 border-l-4 border-gold pl-4">🎧 Creative Stuff</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {creativeVideos.map((video, index) => (
              <div
                key={video.id}
                className={`stagger-item stagger-delay-${(index % 5) + 1} ${hasHydrated && index < 5 ? "is-visible" : ""}`}
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
