"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const NavPill = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAppsOpen, setIsAppsOpen] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (document.documentElement.scrollTop > 800) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <nav
      className={`fixed z-[9999] top-4 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-96" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/90 border border-gray-300 shadow-sm backdrop-filter backdrop-blur-md rounded-full py-1.3 px-8 flex justify-between items-center">
        <Link href="/">
         <img className='h-10 md:h-14 w-auto' src="/images/logo.png" alt="Monadic DNA Logo" />
        </Link>
        <div className="flex space-x-8 items-center">
        <Link href="/#about" className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300">
              About
            </Link>
            <Link href="/faq" className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300">
              FAQ
            </Link>
            <Link href="https://blog.monadicdna.com" target="_blank" rel="noopener noreferrer" className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300">
              Blog
            </Link>
            <div className="relative" onMouseEnter={() => setIsAppsOpen(true)} onMouseLeave={() => setIsAppsOpen(false)}>
              <button className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300 flex items-center gap-1">
                Apps
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAppsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px]">
                  <Link href="https://explorer.monadicdna.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-base text-black hover:bg-gray-100">
                    Explorer
                  </Link>
                  <Link href="https://monadicdna.com/" className="block px-4 py-2 text-base text-black hover:bg-gray-100">
                    Vault
                  </Link>
                </div>
              )}
            </div>
        </div>
      </div>
    </nav>
  )
}

export default NavPill

