import Image from "next/image";

const industries = [
  { icon: "/images/icons/banking-finance.svg", label: "Banking & Finance" },
  { icon: "/images/icons/manufacturing.svg", label: "Manufacturing" },
  { icon: "/images/icons/retail.svg", label: "Retail & E-commerce" },
  { icon: "/images/icons/logistics.svg", label: "Logistics" },
  { icon: "/images/icons/healthcare.svg", label: "Healthcare" },
  { icon: "/images/icons/technology.svg", label: "Technology" },
  { icon: "/images/icons/consumer-electronics.svg", label: "Consumer Electronics" },
  { icon: "/images/icons/startups.svg", label: "Startups" },
];

export default function IndustriesSection() {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="mx-auto max-w-[1280px] px-10">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Redefining Industries with Creative Software Solutions
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.label}
              className="flex flex-col items-center gap-[12px]"
            >
              <Image
                src={industry.icon}
                alt={industry.label}
                width={90}
                height={90}
              />
              <span className="text-center text-[16px] font-semibold text-[#333]">
                {industry.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
