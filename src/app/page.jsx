import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MockupSection from "@/components/mockup-section";
import WhyUs from "@/components/why-us";
import WhatToExplore from "@/components/what-to-explore";
import DnaTransfer from "@/components/dna-transfer";
// import HowItWorks from "@/components/how-it-works";
import Waitlist from "@/components/waitlist";
import Faq from "@/components/faq";
import BlindComputation from "@/components/blind-computation";
import Features from "@/components/features";
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
    <WhatToExplore/>
   
    {/* <HowItWorks/> */}
    <WhyUs/>
    <BlindComputation/>
    <DnaTransfer/>
    <Faq/>
    </div>
  );
}
