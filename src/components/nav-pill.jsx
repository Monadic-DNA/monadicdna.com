"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const NavPill = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] px-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-full py-2 px-4 flex justify-between items-center">
      <Link href="/">
         <img className='h-10 md:h-14 w-auto' src="/images/logo.png" alt="logo" />

          </Link>

         
        <div className="flex space-x-4">
        <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              About
            </Link>
            <Link href="/#faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              FAQ
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavPill

