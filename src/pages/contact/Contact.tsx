import React, { useState } from "react";

const Contact = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050509] text-white">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-black animate-gradient"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: 5 + Math.random() * 10 + "s"
            }}
          ></span>
        ))}
      </div>

      {/* Open Modal Button */}
      <button
        onClick={() => setOpen(true)}
        className="relative z-10 px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
      >
        Contact Us
      </button>


      {/* Modal */}
      {open && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md bg-black/40 z-20 animate-fade">

          <div className="relative w-[90%] md:w-[520px] p-8 rounded-2xl 
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          shadow-[0_30px_80px_rgba(0,0,0,0.8)]
          animate-modal">

            {/* Glass reflection */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            {/* Badge */}
            <div className="text-center mb-4">
              <span className="text-sm font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                Contact us
              </span>
            </div>

            
            <h2 className="text-2xl font-semibold text-center mb-8">
              Let's connect
            </h2>

            
            <div className="flex flex-col md:flex-row gap-2 mb-8">

  {/* Name */}
  <div className="flex items-center gap-2 w-[40%] md:w-1/4">
    <label className="text-xs text-gray-300">By</label>
    <input
      type="text"
      placeholder="Your name"
      className="h-8 w-full px-2 text-sm rounded-full
      bg-white/5 border border-white/10
      focus:border-white/20 focus:outline-none text-center"
    />
  </div>

  {/* Email */}
  <div className="flex items-center gap-2 w-[60%] md:w-2/5">
    <label className="text-xs text-gray-300 w-10">Email</label>
    <input
      type="email"
      placeholder="you@gmail.com"
      className="h-8 w-full px-2 text-sm rounded-full
      bg-white/5 border border-white/10
      focus:border-white/20 focus:outline-none text-center"
    />
  </div>

</div>

            
  <textarea
    rows={3}
    placeholder="Message..."
    className="w-full bg-transparent
    border-b border-dotted border-gray-400
    outline-none
    py-2 text-sm
    focus:border-white"
  ></textarea>

        <div className="flex justify-center md:justify-end gap-3 mt-6">

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>

              <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition">
                Submit
              </button>

            </div>

          </div>
        </div>
      )}

      {/* Tailwind Custom Animations */}
      <style jsx>{`
      
      @keyframes gradientMove {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
      }

      .animate-gradient{
        background-size: 200% 200%;
        animation: gradientMove 10s ease infinite;
      }

      @keyframes particleFloat{
        0%{transform:translateY(0);opacity:0}
        50%{opacity:1}
        100%{transform:translateY(-200px);opacity:0}
      }

      .animate-particle{
        animation: particleFloat linear infinite;
      }

      @keyframes modalPop{
        0%{opacity:0; transform:scale(.9) translateY(20px)}
        100%{opacity:1; transform:scale(1) translateY(0)}
      }

      .animate-modal{
        animation: modalPop .35s ease;
      }

      @keyframes fade{
        from{opacity:0}
        to{opacity:1}
      }

      .animate-fade{
        animation: fade .25s ease;
      }

      `}</style>

    </div>
  );
};

export default Contact;