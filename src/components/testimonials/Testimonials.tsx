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
  return (
    <section className="relative overflow-hidden bg-[#0D0D10] py-20 text-white md:py-28">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(80,90,150,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,13,16,0.08),rgba(13,13,16,0.3),rgba(13,13,16,0.8))]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* heading */}
        <div className="mx-auto mb-14 flex max-w-[700px] flex-col items-center px-6 text-center sm:px-10 md:px-16">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm text-[#D7D7DB]">
            Testimonials
          </span>

          <h2 className="mt-5 text-[34px] font-medium leading-tight tracking-[-0.02em] text-white md:text-[52px]">
            Loved by entrepreneurs
          </h2>

          <p className="mt-4 text-[16px] text-[#8A8A95] md:text-[20px]">
            Here’s what people are saying about us
          </p>
        </div>

        {/* cards */}
        <div className="overflow-x-auto px-6 sm:px-10 md:px-16 [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[320px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:w-[400px]"
              >
                <p className="text-[18px] leading-9 text-[#ECECF1]">
                  {item.text}
                </p>

                <div className="mt-10">
                  <h3 className="text-[18px] font-medium text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[16px] text-[#8A8A95]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;