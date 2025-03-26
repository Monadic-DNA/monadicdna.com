import { getFullUrl } from '@/lib/utils';
import Link from "next/link";
import React from 'react';

export const metadata = {
  title: '23andWE DAO',
  description: 'The community bid to take back and secure 23andMe Data',
  openGraph: {
    images: [
      {
        url: getFullUrl('/images/social/og-image-logo.png'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

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
                    <span className="text-[#4B5563]">Incorporate concepts from the <Link href="/lightpaper" className="text-[#af4a8c] hover:underline">Ikai protocol</Link> to safely and securely open access to 23andMe to enable developers, researchers, biohackers, etc to build novel applications and run studies for the public benefit</span>
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

              <div className="bg-[#af4a8c]/5 rounded-lg p-6 text-center border border-[#af4a8c]/10 mt-12">
                <h3 className="text-xl font-bold mb-4 text-darkMain tracking-wider">Join the Movement</h3>
                <p className="text-[#4B5563] mb-6 tracking-wide">
                  Help secure the privacy and future of genomic data for millions of users
                </p>
                <a
                  href="#"
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