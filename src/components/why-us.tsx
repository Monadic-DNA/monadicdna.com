/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [activeBoxes, setActiveBoxes] = useState<boolean[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const calculatePaths = useCallback(() => {
    if (!containerRef.current) return;

    const boxes = containerRef.current.querySelectorAll<HTMLElement>(".content-box");
    const newPaths: string[] = [];
    const containerRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 768; // md breakpoint

    for (let i = 0; i < boxes.length - 1; i++) {
      const start = boxes[i].getBoundingClientRect();
      const end = boxes[i + 1].getBoundingClientRect();

      if (isMobile) {
        // Mobile: Vertical lines down the center
        const centerX = containerRect.width / 2;
        const x1 = centerX;
        const y1 = start.bottom - containerRect.top;
        const y2 = end.top - containerRect.top;
        newPaths.push(`M ${x1} ${y1} V ${y2}`);
      } else {
        // Desktop: Zigzag pattern
        const x1 = i % 2 === 0 ? start.right - containerRect.left : start.left - containerRect.left;
        const y1 = start.top - containerRect.top + start.height / 2;
        const x2 = end.left - containerRect.left + (i % 2 === 0 ? end.width / 2 : end.width / 2);
        const y2 = end.top - containerRect.top;
        newPaths.push(`M ${x1} ${y1} H ${x2} V ${y2}`);
      }
    }

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(calculatePaths);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(containerRef.current?.querySelectorAll(".content-box") || []).indexOf(
            entry.target as HTMLElement,
          );
          setActiveBoxes((prev) => {
            const newActiveBoxes = [...prev];
            newActiveBoxes[index] = entry.isIntersecting;
            return newActiveBoxes;
          });
          if (entry.isIntersecting) {
            setActiveCard(index);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      containerRef.current.querySelectorAll(".content-box").forEach((box) => {
        observer.observe(box);
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [calculatePaths]);

  return (
    <div id="about" className="bg-[#1a1a1a]">
      <div className="relative w-full max-w-7xl mx-auto px-4 py-24 md:py-24 bg-[#1a1a1a]" ref={containerRef}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {paths.map((path, index) => (
            <path key={index} d={path} fill="none" stroke="rgba(255,255,255)" strokeWidth="2" strokeDasharray="4 4" />
          ))}
        </svg>

        <div className="space-y-8 md:space-y-32">
          {[
            {
              title: "Value of your DNA is unmatched.",
              content: [
                "A stolen password might cost you money, but compromised DNA data can affect your life, health, and privacy forever.",
                "Passwords can be reset but your DNA cannot.",
              ],
            },
            {
              title: "The status quo isn't working.",
              content: [
                "Traditional DNA companies are failing to protect what matters most — your data. Security breaches and financial struggles put this sensitive data at risk of being sold without proper consent. It's time for a better way — one where you stay in control.",
                <Link
                  key="link"
                  href="https://www.bitdefender.com/en-us/blog/hotforsecurity/millions-of-new-23andme-genetic-data-profiles-leak-on-cybercrime-forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  Read about the latest 23andMe breach
                </Link>,
              ],
            },
            {
              title: "Monadic DNA is a secure Vault that only you have the keys to access.",
              content: [
                "Privacy and security are fundamentally built into our app design from the ground up. It's in our DNA.",
                "We are using the latest in blind computation technology. Your DNA file is encrypted using a private key only you can access. Which means, even we cannot access your raw unecrypted DNA data.",
                "You can delete your data at any time, right from the app. No hoops to jump through.",
              ],
              isList: true,
            },
            {
              title: "Get sequenced once, use it everywhere",
              content: [
                "Upload your raw DNA data, and it gets encrypted and stored in your Monadic DNA Vault. You can use this shielded data with apps in the Monadic DNA app store.",
                "This approach is a shift towards a new, trustworthy and security-conscious way of handling sensitive data made possible by blind computation technology. Your DNA data stays completely private at every step. Even when analysis is being done!",
                'We\'re creating an open-ecosystem that evolves alongside the breakthroughs in genomic science by inviting providers with diverse specialties to offer DNA insights. Whether you want to see if you have the "cilantro tastes like soap" gene or navigate the risks for inherited diseases with your doctor, we want to make sure this is done right with autonomy and privacy at every step of the process.',
              ],
            },
          ].map((item, index) => (
            <div key={index} className={`grid grid-cols-12 gap-5 md:gap-8 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
              <div
                className={`content-box col-span-12 md:col-span-6 ${index % 2 !== 0 ? "md:col-start-7" : ""
                  } bg-[#FFFDF6] rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeCard === index ? "border-black shadow-lg" : "border-gray-200"
                  }`}
              >
                <h2 className="text-xl md:text-2xl font-black mb-6 text-left md:text-left">{item.title}</h2>
                {item.isList ? (
                  <ul className="space-y-4">
                    {item.content.map((text, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 mt-1">
                          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6869 8.65818C13.6863 8.65774 13.686 8.65756 13.686 8.65757C13.686 8.6576 13.6868 8.65812 13.6885 8.6589C13.688 8.65866 13.6874 8.65842 13.6869 8.65818ZM13.6869 8.65818C13.6904 8.66082 13.7036 8.67272 13.7199 8.70699C13.7436 8.75688 13.7615 8.83156 13.7613 8.91816C13.761 9.00484 13.7427 9.07855 13.7192 9.12698C13.7042 9.15794 13.6921 9.16936 13.6884 9.17228M13.6869 8.65818L13.6884 9.17228M13.6884 9.17228C11.653 10.0853 9.25446 11.8034 8.11669 14.4759C8.11686 14.4755 8.11696 14.4753 8.11695 14.4753C8.11693 14.4753 8.1061 14.4964 8.05602 14.5238C8.00137 14.5536 7.92266 14.5773 7.83417 14.583C7.74506 14.5888 7.67179 14.5748 7.62607 14.5557C7.60516 14.547 7.59515 14.5397 7.59119 14.5362C6.30699 11.8281 4.55717 10.2209 1.67349 9.01789C1.66788 9.01555 1.66521 9.01368 1.66097 9.00642C1.65488 8.99596 1.64759 8.97526 1.64791 8.94692C1.64823 8.91861 1.65602 8.89637 1.66372 8.88365C1.6697 8.87376 1.67461 8.87029 1.68159 8.86742C3.46069 8.13621 4.66269 7.21184 5.61555 6.05987C6.55585 4.92308 7.24138 3.57693 8.0018 2.0477C8.00187 2.04756 8.00194 2.04742 8.002 2.04729C8.00239 2.04726 8.00282 2.04724 8.0033 2.04724C8.00474 2.04723 8.00585 2.04739 8.00661 2.04755L13.6884 9.17228ZM7.58903 14.5339C7.58907 14.5339 7.58953 14.5343 7.59025 14.5353C7.58934 14.5344 7.58898 14.5339 7.58903 14.5339ZM13.6873 9.1731C13.6873 9.17308 13.6875 9.17288 13.6881 9.17257L13.6873 9.1731Z" stroke="black" />
                            <circle cx="8" cy="8.92871" r="1.75" fill="black" stroke="black" strokeWidth="0.5" />
                          </svg>

                        </span>
                        <span className="text-gray-600 text-left md:text-left">{text}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    {item.content.map((text, i) => (
                      <p key={i} className="text-gray-600 text-left md:text-left">
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

