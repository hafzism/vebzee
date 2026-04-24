import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
