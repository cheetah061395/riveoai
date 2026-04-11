"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/[0.06] bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 md:px-[40px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Riveo AI logo"
            width={240}
            height={132}
            className="h-[60px] w-auto object-contain"
          />
          <span className="text-[28px] font-bold tracking-tight text-[#0a0a0a]">
            Riveo AI
          </span>
        </a>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="hidden cursor-pointer rounded-full bg-[#1B54F8] px-[32px] py-[12px] text-[15px] font-bold tracking-normal text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_30px_-8px_rgba(27,84,248,0.4)] md:inline-block"
        >
          Free Consultation
        </button>
      </div>

      <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />
    </header>
  );
}
