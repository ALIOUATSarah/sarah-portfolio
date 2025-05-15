import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

export default function About() {
  return (
    <section id="about" className="py-20 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="font-poppins text-base md:text-lg space-y-4">
                <p>
                  Hi! I'm Sarah — a content creator passionate about capturing real moments and turning them into
                  engaging short-form videos. I create TikToks and Instagram Reels that reflect personal stories,
                  trending ideas, and authentic vibes.
                </p>
                <p>
                  I've worked on content for friends, daily life moments, and my sister's small business. I love
                  storytelling, editing, and finding creative ways to make ordinary things feel cinematic.
                </p>
                <div className="pt-4">
                  <p className="font-medium">Languages:</p>
                  <p>Arabic 🇦🇪 · French 🇫🇷 · English 🇬🇧</p>
                </div>
                <div>
                  <p className="font-medium">Tools I use:</p>
                  <p>CapCut, InShot, Canva, Adobe Premiere Pro</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" threshold={0.2}>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=500&width=400" alt="Sarah Aliouat" fill className="object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
