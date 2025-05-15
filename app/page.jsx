import Hero from "@/components/hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import HighlightReel from "@/components/highlight-reel";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige">
      <Hero />
      <About />
      <Portfolio />
      <HighlightReel />
      <Contact />
      <Footer />
    </main>
  );
}
