"use client";

import Link from 'next/link';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      <div className={`fixed navbar inset-y-0 right-0 z-50 w-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-[72px] items-center justify-between border-b border-[#EAECF0] px-5">
          <button onClick={toggleSidebar}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-4 gap-y-3 p-5">
          <Link href="/#about" className="text-xl p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            About
          </Link>
          <Link href="https://blog.monadicdna.com" target="_blank" rel="noopener noreferrer" className="text-xl p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Blog
          </Link>
          <Link href="/faq" className="text-xl p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            FAQ
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="text-sm font-bold text-gray-500 px-3 py-1">APPS</div>
          <Link href="https://explorer.monadicdna.com/" target="_blank" rel="noopener noreferrer" className="text-lg p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Monadic DNA Explorer
          </Link>
          <Link href="/vault" className="text-lg p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Monadic DNA Vault
          </Link>
          <Link href="/batcher" className="text-lg p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Monadic DNA Batcher
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/press" className="text-xl p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Press
          </Link>
          <Link href="/lightpaper" className="text-xl p-3 font-medium font-unbounded leading-6 text-darkMain hover:text-black" onClick={() => {
            toggleSidebar();
          }}>
            Lightpaper
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

export default Sidebar
