import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Projects } from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
}
