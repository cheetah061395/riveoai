import Image from "next/image";

export default function TrustBadges() {
  return (
    <section className="w-full bg-white border-b border-[#e5e5e5]">
      <div className="mx-auto max-w-[1280px] px-10 py-[30px]">
        <h2
          className="mb-5 text-center text-[14px] font-semibold uppercase tracking-[2px] text-[#8C8C8C]"
        >
          Trusted By Leading Enterprises
        </h2>

        {/* Desktop logo strip */}
        <div className="hidden md:block">
          <Image
            src="/images/clients-logos-desktop.svg"
            alt="Client logos"
            width={1800}
            height={86}
            className="w-full object-contain"
          />
        </div>

        {/* Mobile logo strip */}
        <div className="block md:hidden">
          <Image
            src="/images/clients-logos-mobile.svg"
            alt="Client logos"
            width={900}
            height={172}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
