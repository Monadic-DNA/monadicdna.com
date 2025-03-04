"use client"

import Link from "next/link";

export default function Footer() {  
  return (
    <footer
      className="bg-[#0D0C0C] font-inter text-white py-12 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <Link href="/">
            <img 
              src="/images/MonadicDNA-logo-dark-text.svg" 
              alt="Monadic Health"
              className="h-5 md:h-[26px] mb-6 w-auto"
            />
          </Link>
          <div className="flex flex-col text-[16px] space-y-4">
            <Link href="/#about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/faq" className="text-white hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/team" className="text-white hover:text-gray-300">
              Team
            </Link>
            <Link href="/press" className="text-white hover:text-gray-300">
              Press
            </Link>
            <Link href="/terms" className="text-white hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-white hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
          <div className="flex my-8 gap-4">
            <Link
              href="https://x.com/monadicdna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" />
                <path
                  d="M14.5219 10.825L22.4328 1.5625H20.5578L13.6906 9.60469L8.20313 1.5625H1.875L10.1719 13.725L1.875 23.4375H3.75L11.0031 14.9438L16.7984 23.4375H23.1266L14.5219 10.825ZM11.9547 13.8313L11.1141 12.6203L4.425 2.98438H7.30469L12.7016 10.7609L13.5422 11.9719L20.5594 22.0812H17.6797L11.9547 13.8313Z"
                  fill="black"
                />
              </svg>
              <span className="sr-only">X</span>
            </Link>

            <Link
              href="https://bsky.app/profile/monadicdna.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" />
                <path
                  d="M12 11.3879C11.094 9.62686 8.628 6.34386 6.335 4.72586C4.138 3.17586 3.301 3.44286 2.752 3.69286C2.116 3.97786 2 4.95486 2 5.52786C2 6.10286 2.315 10.2369 2.52 10.9279C3.2 13.2079 5.614 13.9779 7.84 13.7309C4.58 14.2139 1.683 15.4009 5.48 19.6289C9.658 23.9539 11.206 18.7019 12 16.0389C12.794 18.7019 13.708 23.7649 18.444 19.6289C22 16.0389 19.421 14.2139 16.161 13.7309C18.386 13.9779 20.801 13.2079 21.48 10.9279C21.685 10.2379 22 6.10286 22 5.52886C22 4.95386 21.884 3.97886 21.248 3.69086C20.699 3.44286 19.862 3.17386 17.665 4.72386C15.372 6.34486 12.905 9.62786 12 11.3879Z"
                  fill="black"
                />
              </svg>
              <span className="sr-only">Blusky</span>
            </Link>

            <Link
              href="mailto:jay@monadicdna.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" />
                <path
                  d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                  fill="black"
                />
              </svg>
              <span className="sr-only">Mail</span>
            </Link>

            <Link
             href="https://www.linkedin.com/company/monadichealth/"
             target="_blank"
             rel="noopener noreferrer"
              className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" />
                <path
                  d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                  fill="black"
                />
              </svg>
              <span className="sr-only">Linkedin</span>
            </Link>
          </div>
          <p className="text-base">©2025 Monadic Health</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="space-y-8">
              <Link href="/">
                <img 
                  src="/images/MonadicDNA-logo-dark-text.svg" 
                  alt="Monadic Health"
                  className="h-4 md:h-7 w-auto"
                />
              </Link>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/monadicdna"
                  className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="25" height="25" />
                    <path
                      d="M14.5219 10.825L22.4328 1.5625H20.5578L13.6906 9.60469L8.20313 1.5625H1.875L10.1719 13.725L1.875 23.4375H3.75L11.0031 14.9438L16.7984 23.4375H23.1266L14.5219 10.825ZM11.9547 13.8313L11.1141 12.6203L4.425 2.98438H7.30469L12.7016 10.7609L13.5422 11.9719L20.5594 22.0812H17.6797L11.9547 13.8313Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">X</span>
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bsky.app/profile/monadicdna.bsky.social"
                  className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" />
                    <path
                      d="M12 11.3879C11.094 9.62686 8.628 6.34386 6.335 4.72586C4.138 3.17586 3.301 3.44286 2.752 3.69286C2.116 3.97786 2 4.95486 2 5.52786C2 6.10286 2.315 10.2369 2.52 10.9279C3.2 13.2079 5.614 13.9779 7.84 13.7309C4.58 14.2139 1.683 15.4009 5.48 19.6289C9.658 23.9539 11.206 18.7019 12 16.0389C12.794 18.7019 13.708 23.7649 18.444 19.6289C22 16.0389 19.421 14.2139 16.161 13.7309C18.386 13.9779 20.801 13.2079 21.48 10.9279C21.685 10.2379 22 6.10286 22 5.52886C22 4.95386 21.884 3.97886 21.248 3.69086C20.699 3.44286 19.862 3.17386 17.665 4.72386C15.372 6.34486 12.905 9.62786 12 11.3879Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Bluesky</span>
                </Link>

                <Link
                   href="mailto:jay@monadicdna.com"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" />
                    <path
                      d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Mail</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/monadichealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" />
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="black"
                    />
                  </svg>
                  <span className="sr-only">Linkedin</span>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">
              <div className="space-y-4">
                <Link href="/#about" className="block hover:text-gray-300">
                  About
                </Link>
                <Link href="/team" className="block hover:text-gray-300">
                  Team
                </Link>
                <Link href="/faq" className="block hover:text-gray-300">
                  FAQ
                </Link>
                <Link href="/press" className="block hover:text-gray-300">
                  Press
                </Link>
              </div>
      
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-4 fon border-white/10 flex justify-start gap-x-6 items-center">
            <p className="text-base">© 2025 Monadic Health</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
