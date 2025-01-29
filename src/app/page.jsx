import Hero from "@/components/hero";
import MockupSection from "@/components/mockup-section";
import WhyUs from "@/components/why-us";
import DnaTransfer from "@/components/dna-transfer";
import Features from "@/components/features";
import Faq from "@/components/faq";
import BlindComputation from "@/components/blind-computation";
import { MarqueeDemo } from "@/components/marquee-component";

export default function Home() {
  return (
    <div className="font-inter bg-[#FCFCFC] ">
    <Hero/>
    <MockupSection/>

            <Features/>
    <div className="container">
        <MarqueeDemo />
      </div>
   
    {/* <HowItWorks/> */}
    <WhyUs/>
    <BlindComputation/>
    <DnaTransfer/>
    <Faq/>
    </div>
  );
}
