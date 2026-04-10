const stats = [
  { number: "100+", label: "AI Experts" },
  { number: "160+", label: "Software Products Delivered" },
  { number: "50+", label: "AI Solutions" },
  { number: "15+", label: "Total Years of Experience" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-6 sm:py-0 ${
                index < stats.length - 1
                  ? "lg:border-r lg:border-[#e5e5e5]"
                  : ""
              }`}
            >
              <span
                className="font-[var(--font-open-sans)] text-[48px] font-bold leading-tight text-[#1B54F8]"
              >
                {stat.number}
              </span>
              <span className="mt-2 text-[16px] font-normal text-[#333]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
