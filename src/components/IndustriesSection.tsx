const industries = [
  "Accounting & Tax Firms",
  "Medical & Dental Practices",
  "Plumbing, HVAC & Cleaning",
  "Automotive",
  "Daycares & Tutoring Centers",
  "Hotels & Restaurants",
  "Gyms",
  "Trucking & Moving Companies",
  "Nonprofits",
  "Local Shops & Boutiques",
  "Restaurants & Cafes",
  "Senior Living & Home Care",
  "And more...",
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-white px-6 py-[80px] md:px-[40px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[56px] flex flex-col items-center text-center">
          <h2
            className="mb-[12px] text-[30px] font-normal tracking-tight text-[#0a0a0a] md:text-[48px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            Businesses we serve
          </h2>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-0 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-3 py-[10px]"
            >
              <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#1B54F8]" />
              <span className="text-[14px] text-[#333]">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
