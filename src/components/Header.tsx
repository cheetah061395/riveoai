"use client";

import { ChevronDown, Menu } from "lucide-react";

const navItems = [
  { label: "SERVICES", hasDropdown: true },
  { label: "INDUSTRIES", hasDropdown: true },
  { label: "INSIGHTS", hasDropdown: false },
  { label: "WORK", hasDropdown: false },
  { label: "ABOUT", hasDropdown: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-[40px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          {/* Blue diamond squares icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="12"
              height="12"
              rx="1"
              fill="#1B54F8"
            />
            <rect
              x="18"
              y="2"
              width="12"
              height="12"
              rx="1"
              fill="#1B54F8"
            />
            <rect
              x="2"
              y="18"
              width="12"
              height="12"
              rx="1"
              fill="#1B54F8"
            />
            <rect
              x="18"
              y="18"
              width="12"
              height="12"
              rx="1"
              fill="#1B54F8"
              opacity="0.5"
            />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-[18px] font-bold tracking-tight text-black">
              LeewayHertz
            </span>
            <span className="text-[10px] text-gray-500 tracking-wide">
              A Hackett Group Company
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[40px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center gap-1 text-[14px] font-medium uppercase tracking-[1px] text-lh-text-primary transition-colors hover:text-lh-blue"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
          <a
            href="#"
            className="rounded-[4px] bg-lh-blue px-[24px] py-[10px] text-[14px] font-medium uppercase tracking-[1px] text-white transition-colors hover:bg-lh-blue-hover"
          >
            CONTACT US
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-lh-text-primary" />
        </button>
      </div>
    </header>
  );
}
