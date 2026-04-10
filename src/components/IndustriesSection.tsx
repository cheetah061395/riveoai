const industries = [
  "Financial Services",
  "Health & Wellness",
  "Home Services",
  "Automotive",
  "Professional Services",
  "Personal Services",
  "Education & Childcare",
  "Hospitality",
  "Fitness & Recreation",
  "Logistics & Transportation",
  "Agriculture",
  "Religious Organizations",
  "Nonprofit Organizations",
  "Retail (Independent/Local)",
  "Food & Beverage",
  "Senior Care",
  "Pet Services",
  "Trades & Skilled Labor",
  "Creative Services",
  "Security Services",
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-white px-[40px] py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[56px] flex flex-col items-center text-center">
          <h2
            className="mb-[12px] text-[40px] font-normal tracking-tight text-[#0a0a0a] md:text-[48px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            Businesses we <span className="text-[#1B54F8]">serve</span>
          </h2>
          <div className="mt-2 h-[2px] w-[48px] rounded-full bg-[#1B54F8]" />
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-0 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group flex items-center gap-3 border-b border-[#f0efed] py-[14px] transition-colors duration-200 hover:border-[#1B54F8]/20"
            >
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#1B54F8]/40 transition-all duration-200 group-hover:bg-[#1B54F8] group-hover:scale-125" />
              <span className="text-[14px] text-[#555] transition-colors duration-200 group-hover:text-[#0a0a0a]">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
