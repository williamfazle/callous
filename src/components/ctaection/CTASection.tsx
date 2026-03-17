import ctaGrid from "../../assets/figure/Vector.png";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0D0D10] text-white h-[345px]">
      {/* top separator */}
      <div className="absolute left-1/2 top-0 z-20 h-px w-[344px] -translate-x-1/2 bg-gradient-to-r from-white/0 via-white/70 to-white/0" />

      {/* top vector */}
      <img
        src={ctaGrid}
        alt=""
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[141px] w-[1935px] max-w-none -translate-x-1/2 object-cover opacity-40"
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(70,80,120,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,16,0.03),rgba(13,13,16,0.18),rgba(13,13,16,0.6))]" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] items-center justify-center px-0">
        <div className="flex w-full flex-col items-center px-[30px] text-center md:w-[560px] md:px-0">
          {/* paragraph container */}
          <div className="flex w-full flex-col items-center gap-[6px] md:w-[560px]">
            <h2 className="w-full text-center font-medium text-[24px] leading-[30px] tracking-[0px] text-white md:text-[33px] md:leading-[38px]">
              Think better with Callous
            </h2>

            <p className="w-full text-center font-medium text-[14px] leading-[20px] tracking-[-0.04px] text-[#8A8A95] md:text-[16px] md:leading-[24px]">
              Ready to get started? Get in touch or create an account.
            </p>
          </div>

          {/* buttons container */}
          <div className="mt-3 flex w-full flex-col items-center gap-3 md:mt-8 md:h-[40px] md:w-[225px] md:flex-row md:gap-3">
            <button className="flex h-[48px] w-full items-center justify-center rounded-[6px] border border-white/10 bg-white/[0.03] text-[14px] font-medium leading-none text-white transition hover:bg-white/[0.06] md:h-[40px] md:w-[120px]">
              Get started
            </button>

            <a
              href="#"
              className="flex h-[48px] w-full items-center justify-center text-[14px] font-medium leading-none text-white transition hover:text-gray-300 md:h-[40px] md:w-[93px]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;