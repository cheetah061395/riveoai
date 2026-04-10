import Image from "next/image";

const insights = [
  {
    image: "/images/blog/customer-service-agent.png",
    title:
      "AI agent for customer service: Key capabilities, use cases, benefits and implementation",
    excerpt:
      "AI agents enhance customer service by understanding inquiries, analyzing data, and generating accurate responses.",
  },
  {
    image: "/images/blog/agentic-rag.svg",
    title:
      "Agentic RAG: What it is, its types, applications and implementations",
    excerpt:
      "Agentic RAG represents a paradigm shift in information processing, offering a versatile toolkit for various industries and domains.",
  },
  {
    image: "/images/blog/generative-ai.svg",
    title:
      "Generative AI: Use cases, applications, solutions and implementation",
    excerpt:
      "Generative AI demonstrates versatile applications across diverse industries, leveraging its capacity to create novel content.",
  },
];

export default function InsightsSection() {
  return (
    <section className="w-full border-t border-[#e5e5e5] bg-white py-[80px]">
      <div className="mx-auto max-w-[1280px] px-[40px]">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          Insights
        </h2>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {insights.map((insight) => (
            <div
              key={insight.title}
              className="overflow-hidden rounded-[8px] border border-[#e5e5e5]"
            >
              <div className="relative h-[250px] w-full">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-[20px]">
                <h3 className="mb-[10px] text-[16px] font-semibold leading-[1.5] text-[#100F0F]">
                  {insight.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#333]">
                  {insight.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-[12px] inline-block text-[14px] font-semibold text-[#1B54F8]"
                >
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[40px] text-center">
          <a
            href="#"
            className="text-[16px] font-semibold text-[#1B54F8]"
          >
            Show all Insights
          </a>
        </div>
      </div>
    </section>
  );
}
