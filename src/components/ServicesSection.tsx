"use client";

import Image from "next/image";

const services = [
  {
    icon: "/images/icons/ai-development.svg",
    title: "AI Development & Integration",
    description:
      "From automating repetitive tasks to unlocking insights buried in your data, we build AI solutions that save you time and money. Seamlessly integrated into your existing tools and workflows so you see results from day one.",
  },
  {
    icon: "/images/icons/ai-agents.svg",
    title: "AI Agents Development",
    description:
      "We build AI agents that handle your busywork — research, data analysis, document review, and more. Whether it's a single assistant or a team of agents working together, we configure them using the best models available to save your team hours every week.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#f6f5f3] px-6 py-[80px] md:px-[40px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[48px] md:mb-[80px] flex flex-col items-center text-center">
          <h2
            className="mb-[16px] text-[30px] font-normal leading-[1.2] tracking-tight text-[#0a0a0a] md:text-[48px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            Supercharge your business
            <br />
with AI
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[1.7] text-[#777]">
            Automate tedious processes with AI. Grow faster and more
            efficiently.
          </p>
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
      </div>
    </section>
  );
}
