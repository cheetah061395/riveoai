import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="w-full"
      style={{
        minHeight: "660px",
        background: "linear-gradient(135deg, #0a1628 0%, #051C2C 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-10 pt-[120px] pb-[80px] md:flex-row">
        {/* Left Column */}
        <div className="flex w-full flex-col items-center md:w-[55%] md:items-start">
          <h1
            className="max-w-[600px] text-center text-[32px] font-medium leading-[1.3] text-white md:text-left md:text-[46px]"
            style={{
              fontFamily: 'Georgia, Times, "Times New Roman", serif',
            }}
          >
            AI development company enabling innovation and rapid development
          </h1>

          <p className="mt-5 text-center text-[18px] font-semibold leading-[1.7] text-white md:text-left md:text-[24px]">
            We build cutting-edge AI solutions for startups and enterprises
          </p>

          <button
            type="button"
            className="mt-[30px] cursor-pointer rounded-[4px] bg-[#1B54F8] px-8 py-[14px] text-[19px] font-medium capitalize text-white transition-colors hover:bg-[#1545d4]"
          >
            Get in touch
          </button>
        </div>

        {/* Right Column */}
        <div className="mt-10 w-full md:mt-0 md:w-[45%]">
          <Image
            src="/images/hero-3d.png"
            alt="LeewayHertz - AI Development Company"
            width={1030}
            height={1002}
            className="h-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
