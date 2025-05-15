"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Slight delay for the animation to start after page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-beige overflow-hidden"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div
        className={`relative z-10 text-center text-white px-4 sm:px-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Sarah Aliouat</h1>
        <p className="font-poppins text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
          Content Creator | Short-Form Video | Real Moments, Real Stories
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://www.tiktok.com/@p.jk.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black hover:bg-black/80 text-white font-poppins font-medium py-2 px-4 rounded-md transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="h-5 w-5"
            >
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
            </svg>
            <span>TikTok</span>
          </a>
          <a
            href="https://www.instagram.com/oupsitsher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-poppins font-medium py-2 px-4 rounded-md transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
        <Link
          href="#portfolio"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white font-poppins font-medium py-3 px-6 rounded-md transition-colors"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span>🎬 View My Work</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
