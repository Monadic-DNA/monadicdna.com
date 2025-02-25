"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnnouncementHeader from './announcement-header';
import Sidebar from './sidebar';

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
      <nav className="fixed w-full z-50 bg-white border-b border-gray-800">
        <AnnouncementHeader />
        <div className="mx-auto flex h-16 md:h-20 w-full max-w-[1440px] items-center justify-between px-5 ">
          <Link href="/">
            <img className="h-10 md:h-14 w-auto" src="/images/logo.png" alt="logo" />
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Render the Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}

export default Navbar
