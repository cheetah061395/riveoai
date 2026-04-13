import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        {/* Hero */}
        <section className="w-full bg-[#f6f5f3] px-6 py-[80px] md:px-[40px] md:py-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <h1
              className="text-[30px] font-bold tracking-tight text-[#0a0a0a] md:text-[48px]"
              style={{
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
              }}
            >
              About Riveo AI
            </h1>
            <p className="mt-4 max-w-[600px] text-[17px] leading-[1.8] text-[#555]">
              Riveo AI builds custom AI agents for small businesses. We
              automate the busywork like quotes, follow-ups, scheduling, and
              paperwork inside the tools your team already uses, so you can
              grow without hiring.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="w-full bg-white px-6 py-[80px] md:px-[40px] md:py-[120px]">
          <div className="mx-auto max-w-[1280px]">
            <h2
              className="mb-12 text-[28px] font-bold tracking-tight text-[#0a0a0a] md:text-[40px]"
              style={{
                fontFamily: 'Georgia, Times, "Times New Roman", serif',
              }}
            >
              Team
            </h2>
          </div>
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Shirley */}
            <div className="overflow-hidden rounded-[16px] border border-[#e5e5e5] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/shirley.png"
                alt="Shirley Jiang"
                className="h-[320px] w-full object-cover"
              />
              <div className="px-6 py-6">
                <h2 className="text-[20px] font-bold text-[#0a0a0a]">
                  Shirley Jiang
                </h2>
                <p className="mt-1 text-[15px] font-medium text-[#1B54F8]">
                  President
                </p>
                <a
                  href="mailto:shirley@riveoai.com"
                  className="mt-4 block text-[15px] text-[#1B54F8] hover:underline"
                >
                  shirley@riveoai.com
                </a>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#777]">
                  8+ years in software at SpaceX, Fireworks AI, and other leading tech companies
                </p>
              </div>
            </div>

            {/* Jason */}
            <div className="overflow-hidden rounded-[16px] border border-[#e5e5e5] bg-white">
              <Image
                src="/images/jason.png"
                alt="Jason Jiang"
                width={400}
                height={400}
                className="h-[320px] w-full object-cover"
              />
              <div className="px-6 py-6">
                <h2 className="text-[20px] font-bold text-[#0a0a0a]">
                  Jason Jiang
                </h2>
                <p className="mt-1 text-[15px] font-medium text-[#1B54F8]">
                  Engineer
                </p>
                <a
                  href="mailto:jason@riveoai.com"
                  className="mt-4 block text-[15px] text-[#1B54F8] hover:underline"
                >
                  jason@riveoai.com
                </a>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#777]">
                  B.S. Computer Science, UC Santa Barbara
                </p>
              </div>
            </div>

            {/* Glenn */}
            <div className="overflow-hidden rounded-[16px] border border-[#e5e5e5] bg-white">
              <div className="h-[320px] w-full bg-[#e4e2de]" />
              <div className="px-6 py-6">
                <h2 className="text-[20px] font-bold text-[#0a0a0a]">
                  Glenn Platkin
                </h2>
                <p className="mt-1 text-[15px] font-medium text-[#1B54F8]">
                  Advisor
                </p>
                <a
                  href="mailto:glenn@riveoai.com"
                  className="mt-4 block text-[15px] text-[#1B54F8] hover:underline"
                >
                  glenn@riveoai.com
                </a>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#777]">
                  Software executive with 30+ years of experience partnering with Fortune 500 companies
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
