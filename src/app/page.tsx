import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import BigBrandsSection from "@/components/BigBrandsSection";
import IndustriesSection from "@/components/IndustriesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MentionedInSection from "@/components/MentionedInSection";
import NewsSection from "@/components/NewsSection";
import EngagementModelsSection from "@/components/EngagementModelsSection";
import GetStartedSection from "@/components/GetStartedSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[60px]">
        <HeroSection />
        <TrustBadges />
        <StatsSection />
        <ServicesSection />
        <BigBrandsSection />
        <IndustriesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <MentionedInSection />
        <NewsSection />
        <EngagementModelsSection />
        <GetStartedSection />
        <InsightsSection />
      </main>
      <Footer />
    </>
  );
}
