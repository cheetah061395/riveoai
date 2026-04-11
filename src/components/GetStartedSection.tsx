"use client";

import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export default function GetStartedSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full bg-[#f6f5f3] px-6 py-[60px] md:px-[40px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px] text-center">
        <h2
          className="mb-[24px] text-[26px] font-bold tracking-tight text-[#0a0a0a] md:text-[48px]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          Get Started <span className="text-[#1B54F8]">Today</span>
        </h2>

        <p className="mx-auto mb-[40px] max-w-[440px] text-[17px] leading-[1.7] text-[#777]">
          Schedule a free consultation and discover how AI can transform your
          business.
        </p>

        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#1B54F8] px-10 py-5 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_50px_-10px_rgba(27,84,248,0.4)]"
        >
          Free Consultation
        </button>

        <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />
      </div>
    </section>
  );
}
