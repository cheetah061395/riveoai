const industries = [
  "Accounting & Tax Firms",
  "Medical & Dental Practices",
  "Plumbing, HVAC & Cleaning",
  "Automotive",
  "Hotels & Restaurants",
  "Gyms",
  "Trucking & Logistics",
  "Nonprofits",
  "Property Owners",
  "Law Firms",
  "Senior Living",
  "And more...",
];

export default function IndustriesSection() {
  return (
    <section className="relative w-full bg-white px-6 py-[60px] md:px-[40px] md:py-[100px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-[32px] md:mb-[48px] flex flex-col items-center text-center">
          <h2
            className="text-[26px] font-bold tracking-tight text-[#0a0a0a] md:text-[48px]"
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
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#1B54F8]" />
              <span className="text-[20px] text-[#333]">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
