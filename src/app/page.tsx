import HeroSection from "@/components/HeroSection";
import PerfectMatchSection from "@/components/PerfectMatchSection";
import SkinReportSection from "@/components/SkinReportSection";

/** Homepage: title screen, the one-viewport pitch, then the skin report. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <PerfectMatchSection />
      <SkinReportSection />
    </>
  );
}
