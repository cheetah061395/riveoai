"use client";

import Image from "next/image";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

const services = [
  {
    icon: "/images/icons/ai-development.svg",
    title: "AI Development & Integration",
    description:
      "We connect AI to the tools you already use, so the manual work happens automatically. Think invoices that process themselves, client emails that get sorted and flagged, and reports that generate overnight. No new software to learn.",
  },
  {
    icon: "/images/icons/ai-agents.svg",
    title: "AI Agents Development",
    description:
      "We build AI agents that actually think and act on your behalf. They follow up with leads the moment they come in, answer client questions 24/7, and handle multi-step tasks your team used to do manually. Like hiring a new employee that works around the clock.",
  },
];

export default function ServicesSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full bg-[#f6f5f3] px-6 py-[60px] md:px-[40px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[40px] md:mb-[56px] flex flex-col items-center text-center">
          <h2
            className="mb-[16px] text-[26px] font-bold leading-[1.2] tracking-tight text-[#0a0a0a] md:text-[48px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            Your team&apos;s busywork? AI handles that now.
          </h2>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="mt-[8px] cursor-pointer rounded-full bg-[#1B54F8] px-10 py-4 text-[15px] font-bold tracking-normal text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_50px_-10px_rgba(27,84,248,0.4)]"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-[16px] border border-[#e4e2de] bg-white p-[48px]"
            >

              <div className="relative">
                {/* Icon */}
                <div className="mb-[32px] flex h-[60px] w-[60px] items-center justify-center rounded-[14px] border border-[#e4e2de] bg-[#fafaf8] transition-colors duration-300 group-hover:border-[#1B54F8]/20 group-hover:bg-[#1B54F8]/[0.04]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="h-[32px] w-[32px] object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="mb-[14px] text-[22px] font-bold tracking-tight text-[#0a0a0a]">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-[#666]">
                  {service.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />
      </div>
    </section>
  );
}
