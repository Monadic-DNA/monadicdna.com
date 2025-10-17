"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
const NavbarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="navbar-fixed fixed w-full z-50 bg-white border-b border-gray-300 md:hidden">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5">
          <Link href="/">
            <img className="h-10 w-auto" src="/images/logo.png" alt="Monadic DNA - Privacy-first genomics platform" />
          </Link>
          <button onClick={toggleSidebar} aria-label="Open navigation menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 12H17M3 6H17M3 18H17" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Render the Sidebar component */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default NavbarMobile;
