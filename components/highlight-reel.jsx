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
            <video
              src="/finalmoment.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
