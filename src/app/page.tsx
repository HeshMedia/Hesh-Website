import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import {Contact}  from "@/components/contact"
import { Footer } from "@/components/footer"
import { Reviews } from "../components/reviews"
import { WhatsApp } from '@/components/whatsapp';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsApp />
    </div>
  )
}

