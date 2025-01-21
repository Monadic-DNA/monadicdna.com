/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<string[]>([])
  const [activeBoxes, setActiveBoxes] = useState<boolean[]>([])
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const calculatePaths = useCallback(() => {
    if (!containerRef.current) return

    const boxes = containerRef.current.querySelectorAll<HTMLElement>(".content-box")
    const newPaths: string[] = []
    const containerRect = containerRef.current.getBoundingClientRect()
    const isMobile = window.innerWidth < 768 // md breakpoint

    for (let i = 0; i < boxes.length - 1; i++) {
      const start = boxes[i].getBoundingClientRect()
      const end = boxes[i + 1].getBoundingClientRect()

      if (isMobile) {
        // Mobile: Vertical lines down the center
        const centerX = containerRect.width / 2
        const x1 = centerX
        const y1 = start.bottom - containerRect.top
        const y2 = end.top - containerRect.top
        newPaths.push(`M ${x1} ${y1} V ${y2}`)
      } else {
        // Desktop: Zigzag pattern
        const x1 = i % 2 === 0 ? start.right - containerRect.left : start.left - containerRect.left
        const y1 = start.top - containerRect.top + start.height / 2
        const x2 = end.left - containerRect.left + (i % 2 === 0 ? end.width / 2 : end.width / 2)
        const y2 = end.top - containerRect.top
        newPaths.push(`M ${x1} ${y1} H ${x2} V ${y2}`)
      }
    }

    setPaths(newPaths)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(calculatePaths)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(containerRef.current?.querySelectorAll(".content-box") || []).indexOf(
            entry.target as HTMLElement,
          )
          setActiveBoxes((prev) => {
            const newActiveBoxes = [...prev]
            newActiveBoxes[index] = entry.isIntersecting
            return newActiveBoxes
          })
          if (entry.isIntersecting) {
            setActiveCard(index)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) {
      containerRef.current.querySelectorAll(".content-box").forEach((box) => {
        observer.observe(box)
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [calculatePaths])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 md:py-16" ref={containerRef}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {paths.map((path, index) => (
          <path key={index} d={path} fill="none" stroke="rgba(0, 0, 0, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
        ))}
      </svg>

      <div className="space-y-8 md:space-y-32">
        {[
          {
            title: "We safeguard passwords and bank PINs, but the value of DNA is unmatched.",
            content: [
              "A stolen password might cost you money, but compromised DNA data can affect your life, health, and privacy forever.",
              "Passwords can be reset but your DNA cannot.",
            ],
          },
          {
            title: "The status quo isn't working.",
            content: [
              "Existing DNA companies have been facing security breaches that lock people out of accessing their own data. Some are even struggling financially which puts this extremely sensitive data at risk of being sold without your consent.",
              <a key="link" href="#" className="underline">
                Read about the latest 23andMe breach
              </a>,
            ],
          },
          {
            title: "Monadic DNA is a secure safe that only you have the keys to access.",
            content: [
              "Privacy and security are fundamentally built into our app design from the ground up",
              "Monadic is using the latest in blind computation technology which means, we cannot sell your data, share it, or even access it.",
              "You can delete your data at any time.",
            ],
            isList: true,
          },
          {
            title: "Get sequenced once, use it everywhere",
            content: [
              "Upload your raw DNA data, and it gets encrypted and stored in your Monadic vault. You can use this shielded data with apps in the Monadic app store.",
              "This approach is a shift towards a new, trustworthy and security-conscious way of handling sensitive data made possible by blind computation technology. Your DNA data stays completely private at every step. Even when analysis is being done!",
              'We\'re creating an open-ecosystem that evolves alongside the breakthroughs in genomic science by inviting providers with diverse specialties to offer DNA insights. Whether you want to see if you have the "cilantro tastes like soap" gene or navigate the risks for inherited diseases with your doctor, we want to make sure this is done right with autonomy and privacy at every step of the process.',
            ],
          },
        ].map((item, index) => (
          <div key={index} className={`grid grid-cols-12 gap-5 md:gap-8 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
            <div
              className={`content-box col-span-12 md:col-span-6 ${
                index % 2 !== 0 ? "md:col-start-7" : ""
              } bg-white rounded p-8 shadow-sm border transition-all duration-300 ${
                activeCard === index ? "border-black shadow-lg" : "border-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{item.title}</h2>
              {item.isList ? (
                <ul className="space-y-4">
                  {item.content.map((text, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 mt-1">⚡</span>
                      <span className="text-gray-600 text-center md:text-left">{text}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  {item.content.map((text, i) => (
                    <p key={i} className="text-gray-600 text-center md:text-left">
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
  )
}

