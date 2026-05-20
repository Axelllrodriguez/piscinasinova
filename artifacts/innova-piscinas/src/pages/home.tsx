import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollExpand } from "@/components/ScrollExpand";
import { ParallaxGallery } from "@/components/ParallaxGallery";
import { Models } from "@/components/Models";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ScrollExpand />
        <ParallaxGallery />
        <Models />
        <Features />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
