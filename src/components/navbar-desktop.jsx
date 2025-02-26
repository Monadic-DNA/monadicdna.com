"use client";

import Link from 'next/link';

const NavbarDesktop = () => {
  return (
    <nav className=" w-full border-gray-800 hidden md:block">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5">
        <Link href="/">
          <img className="h-14 w-auto" src="/images/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#about" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            About
          </Link>
          <Link href="/#faq" className="text-[15px] leading-6 text-[#344054] hover:text-black">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
