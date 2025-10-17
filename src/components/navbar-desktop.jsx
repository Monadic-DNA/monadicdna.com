"use client";

import Link from 'next/link';
import { useState } from 'react';

const NavbarDesktop = () => {
  const [isAppsOpen, setIsAppsOpen] = useState(false);

  return (
    <nav className="navbar-desktop w-full border-gray-800 hidden md:block">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5">
        <Link href="/">
          <img className="h-14 w-auto" src="/images/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            About
          </Link>
          <Link href="/faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            FAQ
          </Link>
          <Link href="https://blog.monadicdna.com" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            Blog
          </Link>
          <div className="relative" onMouseEnter={() => setIsAppsOpen(true)} onMouseLeave={() => setIsAppsOpen(false)}>
            <button className="text-[15px] leading-6 text-[#344054] hover:text-black flex items-center gap-1">
              Apps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAppsOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[160px]">
                <Link href="https://explorer.monadicdna.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-[15px] text-[#344054] hover:bg-gray-100">
                  Explorer
                </Link>
                <Link href="https://monadicdna.com/" className="block px-4 py-2 text-[15px] text-[#344054] hover:bg-gray-100">
                  Vault
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
