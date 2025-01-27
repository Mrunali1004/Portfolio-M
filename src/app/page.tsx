import { BackgroundGradient } from "@/components/BackgroundGradient";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Tap } from "@/sections/Tap";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BackgroundGradient />
      <Header />
      <Hero />
      <Projects />
      <Tap />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
