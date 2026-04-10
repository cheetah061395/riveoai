import Image from "next/image";

export default function MentionedInSection() {
  return (
    <section className="w-full border-t border-b border-[#e5e5e5] bg-white py-[40px]">
      <div className="mx-auto max-w-[1280px] px-10">
        <h3 className="mb-[30px] text-center text-[16px] font-semibold uppercase tracking-[2px] text-[#8C8C8C]">
          As Mentioned in
        </h3>

        {/* Desktop */}
        <div className="hidden md:block">
          <Image
            src="/images/mentioned-in-desktop.svg"
            alt="As mentioned in media logos"
            width={1800}
            height={111}
            className="w-full object-contain"
          />
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <Image
            src="/images/mentioned-in-mobile.svg"
            alt="As mentioned in media logos"
            width={900}
            height={200}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
