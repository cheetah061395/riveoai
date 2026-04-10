import Image from "next/image";

export default function BigBrandsSection() {
  return (
    <section className="w-full bg-white px-10 py-[60px]">
      <div className="mx-auto max-w-[1280px]">
        <h2
          className="mb-[40px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Big Brands Trust Us
        </h2>

        {/* Desktop image */}
        <div className="hidden md:block">
          <Image
            src="/images/company-graph-desktop.png"
            alt="Companies that trust us"
            width={2115}
            height={983}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Mobile image */}
        <div className="block md:hidden">
          <Image
            src="/images/company-graph-mobile.png"
            alt="Companies that trust us"
            width={1080}
            height={2226}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
