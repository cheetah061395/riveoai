"use client";

import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-[#060e1a]">
      {/* Noise grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-10 pt-[140px] pb-[100px] md:flex-row md:items-center">
        {/* Left Column */}
        <div className="flex w-full flex-col items-center md:w-[55%] md:items-start">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] tracking-[2px] uppercase text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B54F8] animate-pulse" />
            AI-powered solutions
          </span>

          <h1
            className="max-w-[580px] text-center text-[36px] font-normal leading-[1.2] text-white md:text-left md:text-[56px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            AI development company
          </h1>

          <p className="mt-6 max-w-[480px] text-center text-[17px] font-normal leading-[1.8] text-white/60 md:text-left md:text-[19px]">
            We build cutting-edge AI solutions for businesses. Learn how to use the latest tech and 10x your team&apos;s productivity today.
          </p>

          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="group mt-10 flex cursor-pointer items-center gap-3 rounded-full bg-[#1B54F8] px-8 py-4 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_40px_-8px_rgba(27,84,248,0.5)]"
          >
            Get in touch
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Column — Orbital rings */}
        <div className="relative mt-16 flex w-full items-center justify-center md:mt-0 md:w-[45%]">
          <div className="relative h-[520px] w-[520px]">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-full border border-white/[0.06]"
              style={{ animation: "spin 40s linear infinite" }}
            >
              <div className="absolute -top-[5px] left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[#1B54F8] shadow-[0_0_12px_rgba(27,84,248,0.6)]" />
              <div className="absolute -bottom-[4px] left-1/3 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-white/20" />
            </div>

            {/* Middle ring */}
            <div
              className="absolute inset-[80px] rounded-full border border-white/[0.08]"
              style={{ animation: "spin 25s linear infinite reverse" }}
            >
              <div className="absolute -right-[4px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-[#7da1ff] shadow-[0_0_10px_rgba(125,161,255,0.5)]" />
              <div className="absolute -left-[3px] top-1/3 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-white/15" />
            </div>

            {/* Inner ring */}
            <div
              className="absolute inset-[160px] rounded-full border border-white/[0.10]"
              style={{ animation: "spin 15s linear infinite" }}
            >
              <div className="absolute -top-[3px] right-1/4 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#1B54F8]/70 shadow-[0_0_8px_rgba(27,84,248,0.4)]" />
            </div>

            {/* Center glow */}
            <div className="absolute inset-[210px] rounded-full bg-[#1B54F8]/[0.04] backdrop-blur-sm" />
            <div className="absolute inset-[215px] flex items-center justify-center rounded-full border border-white/[0.08]">
              <span className="text-[28px] font-bold tracking-[6px] uppercase text-white/40">
                AI
              </span>
            </div>

            {/* Use case bubbles */}
            <div className="absolute -top-[10px] right-[40px] rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/50 backdrop-blur-sm">
              Customer Acquisition
            </div>
            <div className="absolute top-[100px] -right-[30px] rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/50 backdrop-blur-sm">
              Customer Support
            </div>
            <div className="absolute bottom-[80px] -left-[20px] rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/50 backdrop-blur-sm">
              Workflow Automation
            </div>
            <div className="absolute bottom-[60px] right-[20px] rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/50 backdrop-blur-sm">
              Document Processing
            </div>
            <div className="absolute top-[260px] -left-[40px] rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[12px] tracking-wide text-white/50 backdrop-blur-sm">
              Data Entry
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#f6f5f3] to-transparent" />

      <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
