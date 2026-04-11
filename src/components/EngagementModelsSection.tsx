export default function EngagementModelsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060e1a] px-6 py-[80px] md:px-[40px] md:py-[120px]">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,84,248,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[800px] text-center">
        <p
          className="text-[22px] font-normal leading-[1.5] text-white/90 md:text-[38px]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          We deliver full end-to-end solutions.{" "}
          <span className="text-[#7da1ff]">
            Providing ongoing support, training, and education
          </span>{" "}
          on the latest AI tools.
        </p>
      </div>
    </section>
  );
}
