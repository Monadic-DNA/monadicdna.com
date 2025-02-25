"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const NavPill = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 800) {
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
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white border border-gray-800 shadow-lg backdrop-filter backdrop-blur-sm rounded-full py-1.5 px-8 flex justify-between items-center">
      <Link href="/">
         <img className='h-10 md:h-14 w-auto' src="/images/logo.png" alt="logo" />

          </Link>

         
        <div className="flex space-x-8">
        <Link href="/#about" className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300">
              About
            </Link>
            <Link href="/#faq" className="text-base leading-6 text-black hover:text-gray-700 transition-colors duration-300">
              FAQ
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavPill

