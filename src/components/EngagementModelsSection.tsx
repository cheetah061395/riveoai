import Image from "next/image";

const models = [
  {
    icon: "/images/icons/dedicated-team.svg",
    title: "Dedicated Development Team",
    description:
      "Our developers leverage cutting-edge cognitive technologies to deliver high-quality services and tailored solutions to our clients.",
  },
  {
    icon: "/images/icons/team-extension.svg",
    title: "Team Extension",
    description:
      "Our team extension model is designed to assist clients seeking to expand their teams with the precise expertise needed for their projects.",
  },
  {
    icon: "/images/icons/project-based.svg",
    title: "Project-based Model",
    description:
      "Our project-oriented approach, supported by our team of software development specialists, is dedicated to fostering client collaboration and achieving specific project objectives.",
  },
];

export default function EngagementModelsSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[80px]">
      <div className="mx-auto max-w-[1280px] px-[40px]">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          Our Engagement Models
        </h2>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-[8px] bg-white p-[40px] text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="mx-auto mb-[24px] flex h-[80px] items-center justify-center">
                <Image
                  src={model.icon}
                  alt={model.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-[12px] text-[20px] font-bold text-[#100F0F]">
                {model.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#333]">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
