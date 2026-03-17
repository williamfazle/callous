import githubIcon from "../../assets/icon/github 1.png";
import instagramIcon from "../../assets/icon/instagram.png";
import websiteLogo from "../../assets/icon/website logo.png";
import xLogo from "../../assets/icon/x logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D10] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-[30px] py-[60px] md:px-[80px] md:py-[64px] lg:px-[200px] lg:py-[80px]">
        <div className="flex flex-col gap-[40px] lg:gap-8">
          {/* top area */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* mobile + desktop logo */}
            <div className="flex h-[30px] w-[315px] items-center gap-3 lg:w-fit">
              <img
                src={websiteLogo}
                alt="Callous logo"
                className="h-[20px] w-[20px] object-contain"
              />
              <span className="text-[14px] font-semibold leading-[20px] tracking-[-0.04px] text-[#E0E0E0]">
                Callous
              </span>
            </div>

            {/* links block */}
            <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3 lg:flex lg:w-[513px] lg:justify-between lg:gap-3">
              {/* left column */}
              <div className="flex w-full flex-col gap-3 lg:h-[84px] lg:w-[163px]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-medium leading-[20px] text-[#7E808A]">
                    Product
                  </h3>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    Pricing
                  </a>
                </div>

                <div className="mt-1 flex flex-col gap-2 lg:hidden">
                  <h3 className="text-[14px] font-medium leading-[20px] text-[#7E808A]">
                    Talk to us
                  </h3>
                  <a
                    href="mailto:customer@callous.com"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    customer@callous.com
                  </a>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* right column */}
              <div className="flex w-full flex-col gap-3 lg:h-[84px] lg:w-[163px]">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[14px] font-medium leading-[20px] text-[#7E808A]">
                    Company
                  </h3>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    Homepage
                  </a>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    About
                  </a>
                </div>
              </div>

              {/* desktop talk column */}
              <div className="hidden lg:flex lg:h-[84px] lg:w-[163px] lg:flex-col lg:gap-3">
                <h3 className="text-[14px] font-medium leading-[20px] text-[#7E808A]">
                  Talk to us
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:customer@callous.com"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    customer@callous.com
                  </a>
                  <a
                    href="#"
                    className="text-[14px] font-medium leading-[20px] text-[#E0E0E0] transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom area */}
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="flex flex-col items-center gap-3 text-[12px] font-normal leading-[16px] text-[#7E808A] lg:items-start">
              <span>Callous, LLC. All rights reserved.</span>

              <div className="flex items-center gap-6 lg:gap-8">
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="transition hover:text-white">
                  Terms of Conditions
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-[9px]">
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
      </div>
    </footer>
  );
};

export default Footer;