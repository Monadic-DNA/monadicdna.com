import BlindComputation from "@/components/blind-computation";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import { MarqueeDemo } from "@/components/marquee-component";
import MockupSectionV1 from "@/components/mockup-section-v1";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <div className="font-inter ">
    <Hero/>
    {/* <MockupSection/> */}
    <MockupSectionV1/>
    <Features/>
    <div>
      <MarqueeDemo />
    </div>
   
    {/* <HowItWorks/> */}
    <WhyUs/>
    <BlindComputation/>
    {/* <DnaTransfer/>  */}
    <Faq/>
    </div>
  );
}
