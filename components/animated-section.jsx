"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useEffect, useState } from "react"

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  threshold = 0.1,
  rootMargin = "0px",
}) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  })

  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  return (
    <section
      ref={ref}
      className={`${className} ${animation} ${
        hasHydrated && isIntersecting ? "is-visible" : ""
      }`}
    >
      {children}
    </section>
  )
}
