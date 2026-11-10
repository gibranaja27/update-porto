
import WelcomingScreen from "@/components/WelcomingScreen"
import Navbar from "../components/Navbar";
import Waves from "../components/Waves";
import Hero from "../components/Hero";
import Aboutme from "@/components/Aboutme";
import Myskill from "@/components/Myskill";
import Workexperience from "@/components/Workexper"
import Projects from "@/components/Projects"
import Certificate from "@/components/Certificate"
import Motivation from "@/components/Motivation"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#edffcf] via-[#f7fff0] to-[#d5f5b8]">
      <WelcomingScreen />
      <Navbar />
      <Waves />
      <Hero />
      <Aboutme />
      <Myskill />
      <Workexperience />
      <Projects />
      <Certificate />
      <Motivation />
      <Footer />
    </main>
  );
}
