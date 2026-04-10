"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export default function Header() {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-black/[0.06] bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-[40px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Riveo AI logo"
            width={240}
            height={132}
            className="h-[60px] w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[28px] font-bold tracking-tight text-[#0a0a0a]">
              Riveo AI
            </span>
            <span className="text-[11px] tracking-[1px] text-[#999]">
              AI Solutions Company
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="group cursor-pointer rounded-full bg-[#1B54F8] px-[28px] py-[10px] text-[13px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#2460ff] hover:shadow-[0_0_30px_-8px_rgba(27,84,248,0.4)]"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5 text-[#333]" />
        </button>
      </div>

      <ConsultationModal open={showForm} onClose={() => setShowForm(false)} />
    </header>
  );
}
