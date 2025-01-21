"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const Phone = ({ children, smallerHeight = false, className = "" }) => (
  <div
    className={`w-full max-w-[320px] ${className} ${
      smallerHeight ? "h-[600px]" : "h-[700px]"
    } transition-all duration-500 hover:scale-105`}
  >
    <div className="relative w-full h-full rounded-[52px] bg-[#DADBD5] p-[1px] transition-transform duration-300 hover:rotate-1">
      <div className="relative w-full h-full rounded-[52px] bg-[#6E665D] p-[1px] transition-all duration-300 hover:shadow-xl">
        <div className="relative w-full h-full rounded-[52px] bg-[#6F6257] p-[1px]">
          <div className="relative w-full h-full rounded-[52px] bg-[#A1978A] p-[1px]">
            <div className="relative w-full h-full rounded-[51px] bg-[#9B907F] p-[1px]">
              <div className="relative w-full h-full rounded-[52px] bg-black p-[8px]">
                <div className="w-full h-full rounded-[46px] bg-[#808080] p-[1px]">
                  <div className="relative w-full h-full bg-white rounded-[45px] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-3xl mt-2.5" />
                    <div className="w-full h-full pt-10 p-4 flex flex-col">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function PhoneDisplay() {
  const firstPhoneRef = useRef(null)
  const secondPhoneRef = useRef(null)
  const thirdPhoneRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    if (firstPhoneRef.current) observer.observe(firstPhoneRef.current)
    if (secondPhoneRef.current) observer.observe(secondPhoneRef.current)
    if (thirdPhoneRef.current) observer.observe(thirdPhoneRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes shoot {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }

       


        @keyframes colorWheel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-in .floating-fruit {
          animation: float 3s ease-in-out infinite;
        }


        .animate-in .orbiting-planet {
          animation: orbit 8s linear infinite;
        }

        .animate-in .color-wheel {
          animation: colorWheel 20s infinite linear;
        }
      `}</style>

      <div className="flex md:items-end justify-center items-center mx-auto md:-mx-16 h-[650px]">
        <Phone className="z-5 hidden md:inline-block translate-x-3 hover:-translate-y-4" smallerHeight>
          <div
            ref={firstPhoneRef}
            className="w-full aspect-square bg-gradient-to-b from-[#F4F2D3] to-[#ADC5BB] border border-black/50 rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/leftmost-phone.png"
                alt="Fruit DNA Insights"
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl floating-fruit"
              />
            </div>

            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFF3] border border-[#7b8942] rounded-3xl py-3 px-1 mt-3 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg">
              <p className="text-center text-[#FA6C40] font-unbounded font-semibold text-[10px] transition-all duration-300 hover:text-[#ff4d1c]">
                Which fruit are you most likely to enjoy based on your DNA?
              </p>
            </div>
          </div>

          <div className="space-y-2 transition-all duration-300 hover:translate-x-2">
            <h2 className="text-lg font-extrabold leading-tight">Are you a fan of durian? persimmons? bitter melon?</h2>
            <p className="text-[11px] text-black">Find out which polarizing fruit your genetics suggest you'll love!</p>
          </div>
        </Phone>

        <Phone className="z-10 inline-block hover:-translate-y-6 transition-all duration-500">
          <div
            ref={secondPhoneRef}
            className="w-full aspect-square bg-[#000040] border border-[#00001E] rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2 relative transition-all duration-500 hover:bg-[#000060]"
          >
            <Image
            src="/images/meteor.png"
            alt="Comet"
            className="absolute top-8 left-8 w-16 h-16 "
            width={64}
            height={64}
            />

            <Image
              src="/images/planet.png"
              alt="Planet"
              className="absolute top-20 right-6 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 orbiting-planet"
              width={80}
              height={80}
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[2px] bg-white animate-pulse"></div>

            <div className="relative bg-gradient-to-b from-[#FAFFFF] to-[#F7FFFF] border border-[#254668] rounded-3xl py-3 px-1 z-10 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg">
              <p className="text-center text-[#254668] font-unbounded font-semibold text-[10px] transition-colors duration-300 hover:text-[#1a3047]">
                Are you more likely a sprinter or endurance runner?
              </p>
            </div>
          </div>

          <div className="space-y-2 transition-all duration-300 hover:translate-x-2">
            <h2 className="text-lg font-extrabold leading-tight">Explore boundless insights with your DNA</h2>
            <p className="text-[11px] mb-4 text-black">
              We believe in an open-ecosystem of innovation, not closed systems that limit your learning.
            </p>
            <p className="text-[11px] text-black">
              We'll periodically add interesting new insights and you can always use your DNA vault to get insights from
              other providers in the app too!
            </p>
          </div>
        </Phone>

        <Phone
          className="-translate-x-3 z-5 md:inline-block hidden hover:-translate-y-4 transition-all duration-500"
          smallerHeight
        >
          <div
            ref={thirdPhoneRef}
            className="w-full aspect-square bg-[#455044] border border-black/50 rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2 relative transition-all duration-500 hover:bg-[#526152]"
          >
            <Image
              src="/images/img10.png"
              alt="Circular Design"
              className="  transform w-48 h-48 mx-auto inline-block color-wheel"
              height={200}
              width={200}
            />

            <div className="relative bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFD] border border-[#7b8942] rounded-3xl py-3 px-1 z-10 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-lg">
              <p className="text-center text-[#1A6F59] font-unbounded font-semibold text-[10px] transition-colors duration-300 hover:text-[#145445]">
                What's your diabetes risk score?
              </p>
            </div>
          </div>

          <div className="space-y-2 transition-all duration-300 hover:translate-x-2">
            <h2 className="text-lg font-extrabold leading-tight">Could your genes influence your risk for diabetes?</h2>
            <p className="text-[11px] text-black">
              Type 2 diabetes risk is analyzed by examining specific genetic markers, known as single nucleotide
              polymorphisms (SNPs). For example, the rs7903146 SNP in the TCF7L2 gene has been associated with an
              increased likelihood of developing the condition. These insights can help you understand how your genetics
              may contribute to your overall risk.
            </p>
          </div>
        </Phone>
      </div>
    </>
  )
}

