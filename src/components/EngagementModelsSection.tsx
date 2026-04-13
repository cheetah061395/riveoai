export default function EngagementModelsSection() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-[60px] md:px-[40px] md:py-[100px]"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)",
      }}
    >
      {/* Corner glows */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-[200px] w-[200px] opacity-20"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(27,84,248,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[200px] w-[200px] opacity-20"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(27,84,248,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[700px] text-center">
        <p
          className="text-[24px] font-medium leading-[1.6] text-white md:text-[36px]"
          style={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
          }}
        >
          We deliver full end-to-end solutions.
          <br />
          Providing ongoing support, training, and education on the latest AI solutions.
        </p>
      </div>
    </section>
  );
}
