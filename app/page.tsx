import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { Services } from "@/components/services/Services";
import { Vision } from "@/components/services/Vision";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <HeroSection />
      <Vision />
      <Services />
    </main>
  );
}
