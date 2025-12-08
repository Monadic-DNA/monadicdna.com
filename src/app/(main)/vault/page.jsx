import BlindComputation from "@/components/blind-computation";
import Faq from "@/components/faq";
import Features from "@/components/features";
import { MarqueeDemo } from "@/components/marquee-component";
import MockupSectionV1 from "@/components/mockup-section-v1";
import WhyUs from "@/components/why-us";

export default function VaultPage() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <main className="px-6 pt-24 md:pt-8 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl text-balance font-darkMain font-black leading-tight tracking-tight">
            DNA insights with privacy, autonomy, and boundless curiosity
          </h1>

          {/* Subheading */}
          <p className="hidden md:block md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-black">
            An award-winning genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.
          </p>

          <p className="block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base leading-relaxed text-[#232323]">
            An award-winning genomics app with advanced encryption and blind computation technology.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://testflight.apple.com/join/KnPAc4zz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
            >
              Join TestFlight Alpha (iOS)
            </a>

            <button
              disabled
              className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg cursor-not-allowed font-medium text-sm md:text-base"
            >
              Coming Soon on Android
            </button>
          </div>
        </div>
      </main>

      <MockupSectionV1/>
      <Features/>
      <div>
        <MarqueeDemo />
      </div>
      <WhyUs/>
      <BlindComputation/>
      <Faq/>
    </div>
  );
}
