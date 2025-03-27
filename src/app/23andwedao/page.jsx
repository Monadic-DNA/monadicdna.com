"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#af4a8c]/10 via-[#af4a8c]/5 to-transparent bg-[length:150%_150%] animate-gradient-shift"></div>
      
      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#af4a8c]/15 via-transparent to-[#ffffff]/20 bg-[length:150%_150%] animate-gradient-shift-reverse"></div>
      
      {/* Edge gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#af4a8c]/45 via-transparent to-transparent bg-[length:150%_150%] opacity-30"></div>
      
      {/* Floating Emojis */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
              opacity: 0.2,
            }}
          >
            {i % 2 === 0 ? '🧬' : '🔒'}
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full space-y-6">
        <AccordionItem value="item-4" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">What does the DAO intend to do with 23andMe?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                The DAO will first ensure that 23andMe users have the option to permanently and irrevocably delete their data. After that, the DAO will secure the data using FHE and MPC. Finally, the DAO will adopt an open protocol such as the <Link href="/lightpaper#ikai-protocol" className="text-[#af4a8c] hover:underline">Ikai protocol</Link> to create an open ecosystem for the data to be shared and analyzed under full encryption.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">Am I receiving ownership of 23andME in exchange for my donation?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                No. You are receiving a governance token, not fractionalized ownership. Governance includes the ability to advise on (for illustrative purposes) which protocols to adopt, on the mission and values of 23andWE DAO. The DAO is taking donations and donors are receiving governance tokens with no expectation of profit. These donations are not tax deductible at this point in time.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-1" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">How much do we need to pool together for the auction?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                The DAO is aiming to pool at least $50M in USDC to have a fair and credible shot at acquiring and securing 23andMe data. On 28 February, 23andMe's market cap was $59M.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">What happens if the DAO cannot raise sufficient funding?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                All participants will be refunded their contributions, less Ethereum network fees for transferring funds.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">What if the DAO's bid doesn't go through?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                Suppose the acquisition does not go through for any reason, such as if the bid is rejected, blocked, or the deal just doesn't come together. In that case, all participants will be refunded their contributions, less legal, administrative and technical costs of putting together the bid.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">How will the DAO make money?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                The DAO will first ensure that 23andMe users have the option to permanently and irrevocably delete their data. After that, the DAO will secure the data using FHE and MPC. Finally, the DAO will adopt an open protocol such as the <Link href="/lightpaper#ikai-protocol" className="text-[#af4a8c] hover:underline">Ikai protocol</Link> to create an open ecosystem for the data to be shared and analyzed under full encryption.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">Will the DAO directly benefit Monadic DNA?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                There is no direct benefit to Monadic DNA or any specific individuals involved with this proposal. If the token holders vote to do so, Monadic DNA will be a technology provider for the DAO to secure 23andMe genomes under the Ikai protocol. Token holders can choose instead to adopt another protocol or technology provider for secure genomics. Monadic DNA benefits indirectly by greater public awareness of modern privacy-preserving encryption and blind computation technology for genetic data.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-7" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">Why use FHE and MPC?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                FHE and MPC are near-magical encryption technologies which allow computation on encrypted data without any need for decryption. They are therefore ideal for storing, securing and analyzing genomic data.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-8" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">Is KYC needed for participating in the DAO?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                Yes, pooling will either occur on a platform with KYC or KYC from a reputed provider will be applied after and any unverified funds will be returned minus network fees. 23andMe is an American company that has filed for bankruptcy. To make a valid and serious bid, we need to ensure the soundness of funds in this community effort and the DAO's standing as a serious and credible participant in the auction process.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-10" className="border border-[#af4a8c]/10 rounded-lg overflow-hidden">
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 transition-colors duration-200 no-underline">
            <h2 className="text-sm md:text-base font-bold text-darkMain">How will the DAO prevent whales from dominating and subverting its goals?</h2>
          </AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="p-4">
              <p className="text-[#4B5563] leading-relaxed tracking-wide">
                The DAO will use tokenomics to put in measures such as sybil-resistent quadratic voting (e.g. Gitcoin grants), a guardian council (e.g. stewards on ENS DAO), conviction voting (e.g. 1Hive), etc to limit any outsize effects of whales.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default function AndWeDAOPage() {
  return (
    <div className="min-h-screen font-['Space_Grotesk',sans-serif] tracking-wide relative">
      <AnimatedBackground />
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 md:pt-16 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="mb-6 tracking-wider">
              <div className="text-5xl md:text-6xl font-black text-darkMain mb-2 tracking-tight relative">
                <span className="relative inline-block">
                  <span className="relative z-10">23and<span className="bg-gradient-to-r from-[#af4a8c] to-[#6366f1] text-transparent bg-clip-text font-extrabold inline-block">WE</span> DAO</span>
                </span>
              </div>
              <div className="text-xl md:text-2xl text-[#4B5563] font-light mt-3 flex items-center justify-center">
                We're buying 23andMe and it will be governed by the people
              </div>
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-darkMain tracking-wider">
                So, what's going on?
              </h2>

              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                We're buying 23andMe. 
              </p>

              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                 <Link href="https://investors.23andme.com/news-releases/news-release-details/23andme-initiates-voluntary-chapter-11-process-maximize" className="text-[#af4a8c] hover:underline">23andMe has declared bankruptcy</Link> and has proposed a <strong>May 14 2025 auction</strong> for the sale of its assets, which include the <strong>genetic data of more than 15 million customers</strong>. We are extremely concerned about the privacy and security of this data.
              </p>

              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                Following the pattern of <Link href="https://en.wikipedia.org/wiki/ConstitutionDAO" className="text-[#af4a8c] hover:underline">ConstitutionDAO</Link>, 23andWE DAO is a DAO that is pooling together money to win this auction to bring 23andMe data under <strong>community control</strong> and for <strong>community benefit</strong> using advanced cryptography such as fully homomorphic encryption (FHE) and multi-party compute (MPC).
              </p>

              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                For far too long, genomic data has been jealously guarded from users by floundering companies with no security or privacy guardrails. Your genetic data should belong to you. And you should be able to use it for your personal healthspan, lifestyle, curiosity or even profit without worrying about it being leaked or sold to someone else.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#af4a8c]/10 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-darkMain">Our top priorities:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#af4a8c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#4B5563]">Take control of 23andMe data using funds pooled together by the community</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#af4a8c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#4B5563]">Ensure users can easily and permanently delete their genomic data and traits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#af4a8c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#4B5563]">Secure all genotype, trait, and ancestry data using frontier cryptographic techniques like FHE and MPC, putting the power of the data back in the hands of the people</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[#af4a8c] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#4B5563]">Incorporate concepts from the <Link href="/lightpaper#ikai-protocol" className="text-[#af4a8c] hover:underline">Ikai protocol</Link> to safely and securely open access to 23andMe to enable developers, researchers, biohackers, etc to build novel applications and run studies for the public benefit</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold my-6 text-darkMain">
                Why should a DAO acquire 23andMe data?
              </h2>

              <p className="text-[#4B5563] leading-relaxed mb-6 tracking-wide">
                Genomic data is especially sensitive and can be weaponized against people if there are no guardrails. If a DAO does not step in, 15 million users' data will end up in the hands of private equity or similar actors with no accountability to the people. Giving everyday people an opportunity to have a say in the handling of their data is therefore an absolute necessity. Having said that, bringing the data and computation under encryption will allow the DAO to bring new insights to users and new ways to bring the data to community use.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-darkMain">
                Why is it a DAO?
              </h2>

              <p className="text-[#4B5563] leading-relaxed mb-4 tracking-wide">
                Decentralization and cryptocurrency (web3) have created structures that allow people to self-govern with unparalleled levels of autonomy and freedom. It's fitting that we use this technology to band together to protect our DNA data.
              </p>

              <div className="bg-[#af4a8c]/5 rounded-lg p-6 text-center border border-[#af4a8c]/10 my-12">
                <h3 className="text-xl font-bold mb-4 text-darkMain tracking-wider">Join the Movement</h3>
                <p className="text-[#4B5563] mb-6 tracking-wide">
                  Help secure the privacy and future of genomic data for millions of users
                </p>
                <a
                  href="https://discord.gg/HTuefxWnhW"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#af4a8c] rounded-lg hover:bg-[#9d3f7a] transition-colors duration-200"
                >
                  Get Involved
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-darkMain">
                Frequently Asked Questions
              </h2>

              <div className="rounded-[32px] border border-[#EDE8E4] bg-[#F6F3F1]/80 p-8 md:p-12 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.50)_inset,_0px_1px_3px_0px_rgba(0,0,0,0.12)]">
                <FAQSection />
              </div>

              <div className="bg-[#af4a8c]/5 rounded-lg p-6 text-center border border-[#af4a8c]/10 my-12">
                <a
                  href="https://discord.gg/HTuefxWnhW"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#af4a8c] rounded-lg hover:bg-[#9d3f7a] transition-colors duration-200"
                >
                  Get Involved
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 