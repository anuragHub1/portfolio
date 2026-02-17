import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
