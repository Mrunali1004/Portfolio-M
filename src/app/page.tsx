import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { Tap } from "@/sections/Tap";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <BackgroundGradientAnimation></BackgroundGradientAnimation>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Tap />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
