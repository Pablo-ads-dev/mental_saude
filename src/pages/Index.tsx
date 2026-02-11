import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemesSection from "@/components/ThemesSection";
import TestSection from "@/components/TestSection";
import CorporateSection from "@/components/CorporateSection";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ThemesSection />
      <TestSection />
      <CorporateSection />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default Index;
