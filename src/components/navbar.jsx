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
      <nav className="fixed w-full z-50 bg-white border-b border-gray-300">
        <AnnouncementHeader />
        <div className="mx-auto flex h-16 md:h-20 w-full max-w-[1440px] items-center justify-between px-5 ">
          <Link href="/">
            <img className="h-10 md:h-14 w-auto" src="/images/logo.png" alt="logo" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              About
            </Link>
            <Link href="/faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              FAQ
            </Link>
            <Link href="https://blog.monadicdna.com" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-6 text-[#344054] hover:text-black">
              Blog
            </Link>
            <div className="relative group">
              <button className="text-[15px] leading-6 text-[#344054] hover:text-black flex items-center gap-1">
                Apps
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="https://explorer.monadicdna.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[15px] text-[#344054] hover:bg-gray-100 hover:text-black">
                  Monadic DNA Explorer
                </Link>
                <Link href="/vault" className="block px-4 py-2 text-[15px] text-[#344054] hover:bg-gray-100 hover:text-black">
                  Monadic DNA Vault
                </Link>
                <Link href="/batcher" className="block px-4 py-2 text-[15px] text-[#344054] hover:bg-gray-100 hover:text-black">
                  Monadic DNA Batcher
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-8"></div>
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
