export default function Footer() {
  return (
    <footer className="relative w-full bg-[#060e1a] px-[40px] py-[32px] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="text-[14px] font-bold tracking-tight text-white/60">
          Riveo AI
        </span>
        <p className="text-[12px] text-white/30">
          &copy; 2026 Riveo AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
