"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export default function Header() {
  const [showForm, setShowForm] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/about"
            className="text-[15px] font-medium text-[#333] transition-colors hover:text-[#1B54F8]"
          >
            About Us
          </a>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="cursor-pointer rounded-full bg-[#1B54F8] px-[32px] py-[12px] text-[15px] font-bold tracking-normal text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_30px_-8px_rgba(27,84,248,0.4)]"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer text-[#333] md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-black/[0.06] bg-white px-6 pb-6 pt-4 md:hidden">
          <a
            href="/about"
            className="block py-3 text-[16px] font-medium text-[#333] transition-colors hover:text-[#1B54F8]"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              setShowForm(true);
            }}
            className="mt-2 w-full cursor-pointer rounded-full bg-[#1B54F8] px-[32px] py-[12px] text-[15px] font-bold tracking-normal text-white transition-all duration-300 hover:bg-[#2460ff]"
          >
            Free Consultation
          </button>
        </div>
      )}

      <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />
    </header>
  );
}
