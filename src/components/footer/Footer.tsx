import githubIcon from "../../assets/github 1.png";
import instagramIcon from "../../assets/instagram.png";
import websiteLogo from "../../assets/website logo.png";
import xLogo from "../../assets/x logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D10] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-[72px] lg:py-[120px]">
        {/* top section */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <img
                src={websiteLogo}
                alt="Callous logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-[20px] font-medium leading-none text-white">
                Callous
              </span>
            </div>
          </div>

          {/* product */}
          <div>
            <h3 className="mb-5 text-sm font-normal text-[#6F6F76]">Product</h3>
            <div className="space-y-4">
              <a href="#" className="block text-[16px] text-white transition hover:text-gray-300">
                Features
              </a>
              <a href="#" className="block text-[16px] text-white transition hover:text-gray-300">
                Pricing
              </a>
            </div>
          </div>

          {/* company */}
          <div>
            <h3 className="mb-5 text-sm font-normal text-[#6F6F76]">Company</h3>
            <div className="space-y-4">
              <a href="#" className="block text-[16px] text-white transition hover:text-gray-300">
                Homepage
              </a>
              <a href="#" className="block text-[16px] text-white transition hover:text-gray-300">
                About
              </a>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="mb-5 text-sm font-normal text-[#6F6F76]">Talk to us</h3>
            <div className="space-y-4">
              <a
                href="mailto:customer@callous.com"
                className="block text-[16px] text-white transition hover:text-gray-300"
              >
                customer@callous.com
              </a>
              <a href="#" className="block text-[16px] text-white transition hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="mt-20 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4 text-sm text-[#6F6F76] md:flex-row md:flex-wrap md:items-center md:gap-8">
            <span>Callous, LLC. All rights reserved.</span>
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Conditions
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-4 w-4 object-contain opacity-70 transition hover:opacity-100"
              />
            </a>

            <a href="#" aria-label="GitHub">
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-4 w-4 object-contain opacity-70 transition hover:opacity-100"
              />
            </a>

            <a href="#" aria-label="X">
              <img
                src={xLogo}
                alt="X"
                className="h-4 w-4 object-contain opacity-70 transition hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;