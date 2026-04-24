import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { Vision } from "@/components/services/Vision";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />
      <HeroSection />
      <Vision />
    </main>
  );
}
