"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Instagram, Send } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - would connect to a server action in a real implementation
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center" animation="fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12">Let's Create Together</h2>

          <form onSubmit={handleSubmit} className="space-y-6 mb-10">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/80 border-gold/30 focus:border-gold"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/80 border-gold/30 focus:border-gold"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white/80 border-gold/30 focus:border-gold min-h-[150px]"
              />
            </div>
            <Button type="submit" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>

          <div className="space-y-4">
            <p className="font-poppins">
              <span className="font-medium">Email:</span> saliouat75@gmail.com
            </p>

            <div className="flex justify-center space-x-4">
             

              <div className="flex space-x-4">
                <a
                  href="https://www.tiktok.com/@p.jk.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/oupsitsher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6">Based in Dubai · Available for part-time collaborations</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
