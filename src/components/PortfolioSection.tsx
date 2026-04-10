import Image from "next/image";

const portfolioItems = [
  {
    image: "/images/portfolio/zbrain.png",
    tag: "#GenerativeAIplatform",
    title: "Enterprise Generative AI Platform",
    description:
      "ZBrain is an enterprise-grade generative AI platform that enables users to create generative AI applications without the complexities associated with development. Designed to transform business processes, ZBrain enables users to leverage their enterprise data to build intelligent applications tailored to their specific business needs.",
  },
  {
    image: "/images/portfolio/machinery.png",
    tag: "#AIStrategy&Consulting",
    title: "Machinery Troubleshooting Using AI",
    description:
      "LeewayHertz collaborated with a top-tier Fortune 500 manufacturing company to develop an innovative LLM-powered machinery troubleshooting application. This innovative solution streamlines machinery maintenance, elevates safety protocol adherence and mitigates operational risks of the firm.",
  },
  {
    image: "/images/portfolio/scrut.png",
    tag: "#GenAIdevelopment",
    title: "LLM-powered App for Compliance and Security Access",
    description:
      "LeewayHertz has partnered with Scrut to engineer an LLM-powered app designed to streamline access to compliance benchmarks, frameworks, and audit-relevant data for Scrut's clientele.",
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto max-w-[1280px] px-10">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our Work
        </h2>

        <div className="flex flex-col gap-[60px]">
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.title}
                className={`flex flex-col gap-10 md:flex-row md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={854}
                    height={763}
                    className="h-auto w-full rounded-[8px] shadow-lg"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <span className="text-[13px] uppercase text-[#1B54F8]">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-[24px] font-bold text-[#100F0F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#333]">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-[16px] font-semibold text-[#1B54F8]"
                  >
                    Learn more
                    <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
