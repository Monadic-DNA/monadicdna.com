'use client'

import React from 'react';
import CustomShape from './custom-shape';

export default function WhatToExplore() {
  const row1Cards = [
    {
      id: 1,
      question: "Are you predisposed to be sensitive to gluten?",
      gradient: "from-[#FCFFD7] to-[#EAF9FF]",
      colors: { start: '#FCFFD7', end: '#EAF9FF' }
    },
    {
      id: 2,
      question: "Are you more likely a sprinter or endurance runner?",
      gradient: "from-[#FFEADD] to-[#ECEAFF]",
      colors: { start: '#FFEADD', end: '#ECEAFF' }
    },
    {
      id: 3,
      question: "What's your genetic muscle composition?",
      gradient: "from-[#DDE4FF] to-[#EAF9FF]",
      colors: { start: '#DDE4FF', end: '#EAF9FF' }
    },
    {
      id: 4,
      question: "What's your diabetes risk score?",
      gradient: "from-[#FFFEF9] to-[#FFE5D7]",
      colors: { start: '#FFFEF9', end: '#FFE5D7' }
    },
    {
      id: 5,
      question: "What's your aerobic capacity potential?",
      gradient: "from-[#FCFFD7] to-[#EAF9FF]",
      colors: { start: '#FCFFD7', end: '#EAF9FF' }
    }
  ];

  const row2Cards = [
    {
      id: 6,
      question: "Are you likely to be lactose intolerant?",
      gradient: "from-[#FFEADD] to-[#ECEAFF]",
      colors: { start: '#FFEADD', end: '#ECEAFF' }
    },
    {
      id: 7,
      question: "Are you predisposed to greater flexibility?",
      gradient: "from-[#DDE4FF] to-[#EAF9FF]",
      colors: { start: '#DDE4FF', end: '#EAF9FF' }
    },
    {
      id: 8,
      question: "Does your DNA influence your cilantro preference?",
      gradient: "from-[#FFFEF9] to-[#FFE5D7]",
      colors: { start: '#FFFEF9', end: '#FFE5D7' }
    },
    {
      id: 9,
      question: "Are you more likely to be a coffee lover or hater?",
      gradient: "from-[#FCFFD7] to-[#EAF9FF]",
      colors: { start: '#FCFFD7', end: '#EAF9FF' }
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 relative z-10 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12">
        Here's what you can explore
      </h2>

      <style jsx global>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .marquee-left {
          animation: slideLeft 30s linear infinite;
        }
        
        .marquee-right {
          animation: slideRight 30s linear infinite;
        }
      `}</style>

      <div className="space-y-4">
        {/* First Row - Left to Right */}
        <div className="relative z-10 overflow-hidden">
          <div className="marquee-right flex gap-3">
            {[...row1Cards, ...row1Cards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-none w-[180px] sm:w-64"
              >
                <div className={`rounded-3xl px-3 py-4 border border-black flex flex-col justify-center gap-y-0 bg-gradient-to-br ${card.gradient} h-max-fit`}>
                  <div className="aspect-square mb-2 flex items-center justify-center">
                    <CustomShape 
                      startColor={card.colors.start}
                      endColor={card.colors.end}
                      className="w-20 sm:w-32 h-auto"
                    />
                  </div>
                  <p className={`font-unbounded h-10 sm:h-12 flex justify-center items-center rounded-2xl border border-black px-3 py-2.5 bg-gradient-to-tr from-${card.colors.start} to-${card.colors.end} text-[9px] sm:text-[10px] text-center font-medium`}>
                    {card.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="relative z-10 overflow-hidden">
          <div className="marquee-left flex gap-3">
            {[...row2Cards, ...row2Cards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-none w-[180px] sm:w-64"
              >
                <div className={`rounded-3xl border border-black px-3 py-4 flex flex-col justify-center gap-y-0 bg-gradient-to-br ${card.gradient} h-max-fit`}>
                  <div className="aspect-square mb-2 flex items-center justify-center">
                    <CustomShape 
                      startColor={card.colors.start}
                      endColor={card.colors.end}
                      className="w-20 sm:w-32 h-auto"
                    />
                  </div>
                  <p className={`font-unbounded h-10 sm:h-12 flex justify-center items-center rounded-2xl border border-black px-3 py-2.5 bg-gradient-to-tr from-${card.colors.start} to-${card.colors.end} text-[9px] sm:text-[10px] text-center font-medium`}>
                    {card.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 mb-16 flex justify-center">
        <div className="border-2 border-black p-4 max-w-fit text-center">
          <p className="text-black text-base font-bold">
            We'll keep adding new insights as we scour the latest research for the newest discoveries!
          </p>
        </div>
      </div>
    </section>
  );
}

