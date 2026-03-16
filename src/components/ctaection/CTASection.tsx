import ctaGrid from "../../assets/Vector.png";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0D0D10] text-white">
      {/* exact top separator line */}
      <div className="absolute left-1/2 top-0 z-20 h-px w-[344px] -translate-x-1/2 bg-gradient-to-r from-white/0 via-white/75 to-white/0" />

      {/* vector */}
      <img
        src={ctaGrid}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(70,80,120,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,16,0.05),rgba(13,13,16,0.25),rgba(13,13,16,0.75))]" />

      {/* content */}
      <div className="relative mx-auto flex min-h-[360px] max-w-[1440px] flex-col items-center justify-center px-6 text-center sm:px-10 md:px-16 lg:px-[200px]">
        <h2 className="text-[28px] font-medium leading-tight text-white md:text-[40px]">
          Think better with Callous
        </h2>

        <p className="mt-3 max-w-[620px] text-[14px] text-[#8A8A95] md:text-[18px]">
          Ready to get started? Get in touch or create an account.
        </p>

        <div className="mt-8 flex items-center gap-6">
          <button className="rounded-lg border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.06] md:px-6 md:py-3 md:text-base">
            Get started
          </button>

          <a
            href="#"
            className="text-sm font-medium text-white transition hover:text-gray-300 md:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;