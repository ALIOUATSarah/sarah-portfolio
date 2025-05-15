import AnimatedSection from "@/components/animated-section"

export default function HighlightReel() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-10" animation="fade-in">
          <blockquote className="font-playfair text-xl md:text-2xl italic">
            "A glance into the stories I love to tell — through people, sound, and timing."
          </blockquote>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" threshold={0.2}>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center cursor-pointer">
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
                  className="text-white ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            <iframe
              className="w-full h-full"
              src="about:blank" // Replace with actual video embed
              title="Highlight Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
