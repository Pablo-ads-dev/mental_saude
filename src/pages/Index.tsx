import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import ProblemsSection from "@/components/ProblemsSection";
import SymptomsSection from "@/components/SymptomsSection";
import QuickTestSection from "@/components/QuickTestSection";
import SolutionsSection from "@/components/SolutionsSection";
import OnlineCareSection from "@/components/OnlineCareSection";
import ReferencesSection from "@/components/ReferencesSection";
import FAQSection from "@/components/FAQSection";
import UrgencySection from "@/components/UrgencySection";
import CompaniesSection from "@/components/CompaniesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CarouselSection />
      <ProblemsSection />
      <SymptomsSection />
      <QuickTestSection />
      <SolutionsSection />
      <OnlineCareSection />
      <ReferencesSection />
      <FAQSection />
      <UrgencySection />
      <CompaniesSection />
      <NewsletterSection />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
