import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import EngagementModelsSection from "@/components/EngagementModelsSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <HeroSection />

        <IndustriesSection />
        <ServicesSection />
        <EngagementModelsSection />
      </main>
      <Footer />
    </>
  );
}
