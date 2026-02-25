import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DiscographySection from "@/components/sections/DiscographySection";
import MediaSection from "@/components/sections/MediaSection";
import PressSection from "@/components/sections/PressSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <MediaSection />
      <PressSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
