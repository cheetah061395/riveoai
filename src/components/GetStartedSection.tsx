const steps = [
  {
    number: 1,
    title: "Contact Us",
    description:
      "Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.",
  },
  {
    number: 2,
    title: "Get a Consultation",
    description:
      "Get on a call with our team to know the feasibility of your project idea.",
  },
  {
    number: 3,
    title: "Get a Cost Estimate",
    description:
      "Based on the project requirements, we share a project proposal with budget and timeline estimates.",
  },
  {
    number: 4,
    title: "Project Kickoff",
    description:
      "Once the project is signed, we bring together a team from a range of disciplines to kick start your project.",
  },
];

export default function GetStartedSection() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto max-w-[1280px] px-[40px]">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          Get Started Today
        </h2>

        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#1B54F8] text-[20px] font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-[8px] text-[18px] font-bold text-[#100F0F]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#333]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
