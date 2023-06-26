import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="sm:max-w-6xl max-w-sm mx-auto px-6 relative">
        <HeroSection />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
