import Image from "next/image";

const newsItems = [
  {
    image: "/images/news/hackett-acquisition.svg",
    imageWidth: 248,
    imageHeight: 170,
    title:
      "The Hackett Group Announces Strategic Acquisition of Leading Gen AI Development Firm Riveo AI",
  },
  {
    image: "/images/news/forbes.svg",
    imageWidth: 365,
    imageHeight: 250,
    title:
      "Riveo AI Named Among Top AI Consulting Firms by Forbes",
  },
  {
    image: "/images/news/gartner.svg",
    imageWidth: 248,
    imageHeight: 170,
    title:
      "Riveo AI Recognized as a Representative Vendor in Gartner's 2024 Hype Cycle Report for Generative AI",
  },
  {
    image: "/images/news/sp-global.png",
    imageWidth: 365,
    imageHeight: 250,
    title:
      "Riveo AI Featured in S&P Global's Piece on AI's Impact on Private Equity",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto max-w-[1280px] px-10">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          In The News
        </h2>

        <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[8px] border border-[#e5e5e5] bg-white"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={item.imageWidth}
                height={item.imageHeight}
                className="h-[170px] w-full object-cover"
              />

              <p className="px-[20px] pt-[16px] text-[12px] font-semibold uppercase text-[#1B54F8]">
                News
              </p>

              <p className="px-[20px] py-[8px] text-[15px] font-semibold leading-[1.5] text-[#100F0F]">
                {item.title}
              </p>

              <p className="px-[20px] pb-[20px] text-[14px] font-semibold text-[#1B54F8]">
                Read More
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
