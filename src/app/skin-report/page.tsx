import type { Metadata } from "next";

import { SkinReportPhone } from "@/components/SkinReportPhone";

export const metadata: Metadata = {
  title: "Skin Report",
  description:
    "Your Riveo shade profile: depth, undertone and surface tone, with matched foundation shades.",
};

export default function SkinReportPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEDE9] px-6 py-16">
      <SkinReportPhone />
    </div>
  );
}
