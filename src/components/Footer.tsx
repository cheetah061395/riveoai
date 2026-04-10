const servicesLinks = [
  "AI Strategy Consulting",
  "AI Development",
  "Data Engineering",
  "Software Development",
  "ML Model Development",
  "AI Agents Development",
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#060e1a] px-[40px] pt-[72px] pb-[40px] text-white">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1B54F8]/30 to-transparent" />

      <div className="mx-auto max-w-[1280px]">
        <div>
          <span className="text-[22px] font-bold tracking-tight text-white">
            Riveo AI
          </span>
          <p className="mt-[20px] max-w-[260px] text-[14px] leading-[1.8] text-white/40">
            AI development company enabling innovation and rapid development
            for businesses everywhere.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[56px] flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-[24px] sm:flex-row">
          <p className="text-[13px] text-white/30">
            &copy; 2024 Riveo AI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[13px] text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
