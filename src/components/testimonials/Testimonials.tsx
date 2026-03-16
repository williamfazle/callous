const testimonials = [
  {
    id: 1,
    text: "The speed with which tasks were completed and the support from their end was something that really impressed me.",
    name: "Miranda de Vries",
    role: "CEO, Dtails",
  },
  {
    id: 2,
    text: "The speed with which tasks were completed and the support from their end was something that really impressed me.",
    name: "Miranda de Vries",
    role: "CEO, Dtails",
  },
  {
    id: 3,
    text: "The speed with which tasks were completed and the support from their end was something that really impressed me.",
    name: "Miranda de Vries",
    role: "CEO, Dtails",
  },
  {
    id: 4,
    text: "The speed with which tasks were completed and the support from their end was something that really impressed me.",
    name: "Miranda de Vries",
    role: "CEO, Dtails",
  },
  {
    id: 5,
    text: "The speed with which tasks were completed and the support from their end was something that really impressed me.",
    name: "Miranda de Vries",
    role: "CEO, Dtails",
  },
];

const Testimonials = () => {
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-[#0D0D10] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#18181B_0%,#0D0D10_100%)] opacity-80" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-4 py-[80px] sm:px-6 md:px-10 lg:gap-[60px] lg:px-[150px] lg:py-[160px]">
        {/* heading */}
        <div className="mx-auto flex w-full max-w-[261px] flex-col items-center gap-3 text-center lg:max-w-[345px]">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] leading-none text-[#D7D7DB]">
            Testimonials
          </span>

          <h2 className="w-full text-center font-medium tracking-[0px] text-white text-[25px] leading-[30px] whitespace-nowrap lg:text-[33px] lg:leading-[38px]">
            Loved by entrepreneurs
          </h2>

          <p className="text-[13px] leading-[18px] text-[#8A8A95] lg:text-[14px] lg:leading-[20px]">
            Here’s what people are saying about us
          </p>
        </div>

        {/* slider */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-[#0D0D10] to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-[#0D0D10] to-transparent sm:w-16 lg:w-24" />

          <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused] lg:gap-4">
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex h-[150px] w-[230px] shrink-0 flex-col justify-between rounded-[8px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)] p-5 sm:h-[165px] sm:w-[280px] sm:p-6 lg:h-[180px] lg:w-[400px] lg:p-8"
              >
                <p className="text-[13px] leading-[1.45] text-[#F5F5F5] sm:text-[14px] lg:max-w-[290px] lg:text-[16px]">
                  {item.text}
                </p>

                <div className="space-y-1">
                  <h3 className="text-[13px] font-medium leading-none text-white sm:text-[14px] lg:text-[16px]">
                    {item.name}
                  </h3>
                  <p className="text-[11px] leading-none text-[#8A8A95] sm:text-[12px] lg:text-[14px]">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 8px));
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }

        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 26s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;