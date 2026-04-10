import Image from "next/image";

const testimonials = [
  {
    logo: "/images/testimonials/eton.png",
    logoWidth: 356,
    logoHeight: 84,
    logoAlt: "ETON logo",
    quote:
      "Riveo AI crafted an exceptional mobile application tailored to our needs, and we are eager for further collaboration",
    name: "Konstantin Schuller",
    title: "Chief Technology Officer at ETON",
  },
  {
    logo: "/images/testimonials/icruise.png",
    logoWidth: 328,
    logoHeight: 84,
    logoAlt: "iCruise logo",
    quote:
      "Riveo AI efficiently steered our iCruise app's multi-platform expansion",
    name: "Uf Tukel",
    title: "Co-Founder iCruise",
  },
  {
    logo: "/images/testimonials/oreilly.png",
    logoWidth: 328,
    logoHeight: 84,
    logoAlt: "O'Reilly Auto Parts logo",
    quote:
      "Riveo AI delivered what they proposed, thanks to their expertise in application development",
    name: "James Unwin",
    title: "Director of O'Reilly Auto Parts",
  },
  {
    logo: "/images/testimonials/siemens.png",
    logoWidth: 328,
    logoHeight: 84,
    logoAlt: "Siemens logo",
    quote:
      "Riveo AI's responsive and flexible approach significantly enhanced our app with valuable features",
    name: "Roland Busch",
    title: "CEO of Siemens",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="mx-auto max-w-[1280px] px-10">
        <h2
          className="mb-[50px] text-center text-[36px] font-medium text-[#100F0F]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[8px] bg-[#f7f7f7] p-[40px]"
            >
              <Image
                src={testimonial.logo}
                alt={testimonial.logoAlt}
                width={testimonial.logoWidth}
                height={testimonial.logoHeight}
                className="h-[84px] w-auto object-contain"
              />

              <p className="my-[24px] text-[15px] leading-[1.7] text-[#333] italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <p className="text-[16px] font-bold text-[#100F0F]">
                {testimonial.name}
              </p>
              <p className="text-[14px] text-[#8C8C8C]">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
