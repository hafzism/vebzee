import { HeroSection } from "@/components/hero/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Process } from "@/components/services/Process";
import { Services } from "@/components/services/Services";
import { Vision } from "@/components/services/Vision";
import { Projects } from "@/components/projects/Projects";
import { FAQ } from "@/components/services/FAQ";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <HeroSection />
      <Vision />
      <Services />
      <Process />
      <Projects />
      <FAQ />
      <Footer />
    </main>
  );
}
