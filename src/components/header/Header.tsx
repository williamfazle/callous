import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/icons/logo.png";

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D0D10] flex justify-center">
      
      <div className="w-full max-w-[1040px] h-[60px] px-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-md bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center">
            <img src={logo} alt="Callous Logo" />
          </div>

          <span className="text-white font-semibold text-sm">
            Callous
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-white text-sm font-medium border-b border-white pb-1">
            Home
          </a>

          <a className="text-white/50 text-sm">
            Pricing
          </a>

          <a className="text-white/50 text-sm">
            About
          </a>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block px-4 h-[32px] border border-white/10 bg-white/5 rounded text-white/70 text-sm">
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-[#0D0D10] border-t border-white/10 md:hidden">
          <div className="flex flex-col items-center gap-6 py-6">

            <a className="text-white text-sm font-medium">
              Home
            </a>

            <a className="text-white/70 text-sm">
              Pricing
            </a>

            <a className="text-white/70 text-sm">
              About
            </a>

            <button className="px-4 h-[32px] border border-white/10 bg-white/5 rounded text-white/70 text-sm">
              Get started
            </button>

          </div>
        </div>
      )}

    </header>
  );
};

export default Header;