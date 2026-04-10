import Image from "next/image";

const services = [
  {
    icon: "/images/icons/ai-strategy.svg",
    title: "AI Strategy Consulting",
    description:
      "We undertake a comprehensive assessment of your current capabilities, market trends, and the competitive landscape to formulate AI strategies tailored to your unique needs. Whether you are a startup seeking to harness AI\u2019s potential or an enterprise aiming to enhance your AI capabilities, our consulting services empower you to unlock the full potential of AI and stay ahead in today\u2019s dynamic business landscape.",
  },
  {
    icon: "/images/icons/ai-development.svg",
    title: "AI Development and Integration",
    description:
      "From natural language processing and computer vision applications to predictive analytics and recommendation systems, we specialize in developing AI solutions that deliver tangible value across industries. By seamlessly integrating these solutions into your workflows, we ensure a smooth transition that enhances operational efficiency, enables better decision-making, and propels business growth.",
  },
  {
    icon: "/images/icons/data-engineering.svg",
    title: "Data Engineering",
    description:
      "Our data engineering services encompass the entire data lifecycle, from sourcing and cleansing to structuring and enrichment. With a focus on data mining, analysis, annotation, and labeling, we lay the foundation for robust AI models. Leveraging advanced techniques and tools, we ensure that your data is optimized for machine learning, enabling accurate and reliable model training.",
  },
  {
    icon: "/images/icons/software-dev.svg",
    title: "Software Design and Development",
    description:
      "With a focus on functionality, scalability, and user experience, our team collaborates with you to deliver high-quality, custom software. Whether you want enterprise software for workflow automation and process optimization, web applications for e-commerce, content management and customer support, or mobile applications for iOS and Android platforms, we have got you covered.",
  },
  {
    icon: "/images/icons/machine-learning.svg",
    title: "Machine Learning Model Development",
    description:
      "With our deep expertise in machine learning, deep learning, and data engineering, we craft robust ML models tailored to diverse use cases, spanning industries such as finance, healthcare and e-commerce. Whether creating models from scratch or fine-tuning existing ones, our team will collaborate closely with you to understand your unique challenges and objectives, ensuring the delivery of exceptional results.",
  },
  {
    icon: "/images/icons/ai-agents.svg",
    title: "AI Agents Development",
    description:
      "Leveraging advanced AI agent development tools like crewAI and AutoGen Studio, we build intelligent AI agents capable of executing a multitude of tasks, including analysis, research, code generation, audits, and reviews. Whether you want a single-agent system or a multi-agent system, our custom AI agent systems built using top-tier models and extensive skill libraries will optimize productivity across your organization.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-[40px] py-[80px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Area */}
        <h2
          className="mb-[20px] max-w-[700px] text-[36px] font-medium leading-[1.4] text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          Building Innovative and Creative Solutions for the Fast-paced Digital
          World
        </h2>

        <p className="mb-[60px] max-w-[900px] text-[16px] leading-[1.8] text-[#333]">
          With over 15 years of industry experience under our belt, we have
          helped startups as well as Fortune 500 companies innovate and grow in
          the dynamic business landscape. Whether it&apos;s crafting custom
          solutions or ensuring their seamless integration into business
          workflows, our expertise has consistently delivered results.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center md:flex-row md:items-start"
            >
              {/* Icon */}
              <div className="mb-4 shrink-0 md:mb-0 md:mr-5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={90}
                  height={90}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-[10px] text-[18px] font-bold text-[#100F0F]">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-[#333]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
