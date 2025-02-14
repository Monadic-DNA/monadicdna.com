"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AnnouncementHeader from './announcement-header'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isSidebarOpen])

  return (
    <>
      <nav className="fixed w-full z-50 ">
        <AnnouncementHeader />
        <div className="mx-auto flex h-16 md:h-20  w-full max-w-[1440px] items-center justify-between px-5 ">
          <Link href="/" className="text-[22px] font-medium leading-[26px] tracking-[-0.24px]">
         <img className='h-14 w-auto' src="/images/logo.png" alt="logo" />

          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              About
            </Link>
            <Link href="/#faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              FAQ
            </Link>
        
          </div>
          <button className="md:hidden" onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Side Navigation */}
      <div className={`fixed navbar inset-y-0 right-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-[72px] items-center justify-between border-b border-[#EAECF0] px-5">
          <span className=" font-medium leading-[26px] tracking-[-0.24px]">Menu</span>
          <button onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            About
          </Link>
          <Link href="/#faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            FAQ
          </Link>
        
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  )
}

export default Navbar

