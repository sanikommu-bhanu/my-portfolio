import SplashScreen from "@/app/components/SplashScreen";
import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import GitHubWork from "@/app/components/GitHubWork";
import Education from "@/app/components/Education";
import Achievements from "@/app/components/Achievements";
import Resume from "@/app/components/Resume";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import BottomNav from "@/app/components/BottomNav";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navigation />
      <main className="relative bg-mesh">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubWork />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
