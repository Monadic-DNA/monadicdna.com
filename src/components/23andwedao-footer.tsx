"use client"

import Link from "next/link";

export default function AndWeDAOFooter() {  
  return (
    <footer
      className="bg-[#0D0C0C] font-inter text-white py-12 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          <Link href="/">
            <img 
              src="/images/MonadicDNA-logo-dark-text.svg" 
              alt="Monadic Health"
              className="h-5 md:h-[26px] mb-6 w-auto"
            />
          </Link>
  
          <div className="flex my-8 gap-4 justify-center">
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
              href="https://discord.gg/HTuefxWnhW"
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
                <path
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a0.09 0.09 0 0 0-0.07 0.03c-0.18 0.33-0.39 0.76-0.53 1.09a16.09 16.09 0 0 0-4.8 0c-0.14-0.34-0.35-0.76-0.54-1.09c-0.01-0.02-0.04-0.03-0.07-0.03c-1.5 0.26-2.93 0.71-4.27 1.33c-0.01 0-0.02 0.01-0.03 0.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 0.02 0.01 0.04 0.03 0.05c1.8 1.32 3.53 2.12 5.24 2.65c0.03 0.01 0.06 0 0.07-0.02c0.4-0.55 0.76-1.13 1.07-1.74c0.02-0.04 0-0.08-0.04-0.09c-0.57-0.22-1.11-0.48-1.64-0.78c-0.04-0.02-0.04-0.08-0.01-0.11c0.11-0.08 0.22-0.17 0.33-0.25c0.02-0.02 0.05-0.02 0.07-0.01c3.44 1.57 7.15 1.57 10.55 0c0.02-0.01 0.05-0.01 0.07 0.01c0.11 0.09 0.22 0.17 0.33 0.26c0.04 0.03 0.04 0.09-0.01 0.11c-0.52 0.31-1.07 0.56-1.64 0.78c-0.04 0.01-0.05 0.06-0.04 0.09c0.32 0.61 0.68 1.19 1.07 1.74c0.03 0.01 0.06 0.02 0.09 0.01c1.72-0.53 3.45-1.33 5.25-2.65c0.02-0.01 0.03-0.03 0.03-0.05c0.44-4.53-0.73-8.46-3.1-11.95c-0.01-0.01-0.02-0.02-0.04-0.02zM8.52 14.91c-1.03 0-1.89-0.95-1.89-2.12s0.84-2.12 1.89-2.12c1.06 0 1.9 0.96 1.89 2.12c0 1.17-0.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-0.95-1.89-2.12s0.84-2.12 1.89-2.12c1.06 0 1.9 0.96 1.89 2.12c0 1.17-0.83 2.12-1.89 2.12z"
                  fill="black"
                />
              </svg>
              <span className="sr-only">Discord</span>
            </Link>

            <Link
              href="mailto:hello@monadicdna.com"
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
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block w-full">
          <div className="flex flex-col items-center">
            <Link href="/">
              <img 
                src="/images/MonadicDNA-logo-dark-text.svg" 
                alt="Monadic Health"
                className="h-4 md:h-7 w-auto mb-8"
              />
            </Link>
            <div className="flex gap-4 justify-center">
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
                href="https://discord.gg/HTuefxWnhW"
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
                  <path
                    d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a0.09 0.09 0 0 0-0.07 0.03c-0.18 0.33-0.39 0.76-0.53 1.09a16.09 16.09 0 0 0-4.8 0c-0.14-0.34-0.35-0.76-0.54-1.09c-0.01-0.02-0.04-0.03-0.07-0.03c-1.5 0.26-2.93 0.71-4.27 1.33c-0.01 0-0.02 0.01-0.03 0.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 0.02 0.01 0.04 0.03 0.05c1.8 1.32 3.53 2.12 5.24 2.65c0.03 0.01 0.06 0 0.07-0.02c0.4-0.55 0.76-1.13 1.07-1.74c0.02-0.04 0-0.08-0.04-0.09c-0.57-0.22-1.11-0.48-1.64-0.78c-0.04-0.02-0.04-0.08-0.01-0.11c0.11-0.08 0.22-0.17 0.33-0.25c0.02-0.02 0.05-0.02 0.07-0.01c3.44 1.57 7.15 1.57 10.55 0c0.02-0.01 0.05-0.01 0.07 0.01c0.11 0.09 0.22 0.17 0.33 0.26c0.04 0.03 0.04 0.09-0.01 0.11c-0.52 0.31-1.07 0.56-1.64 0.78c-0.04 0.01-0.05 0.06-0.04 0.09c0.32 0.61 0.68 1.19 1.07 1.74c0.03 0.01 0.06 0.02 0.09 0.01c1.72-0.53 3.45-1.33 5.25-2.65c0.02-0.01 0.03-0.03 0.03-0.05c0.44-4.53-0.73-8.46-3.1-11.95c-0.01-0.01-0.02-0.02-0.04-0.02zM8.52 14.91c-1.03 0-1.89-0.95-1.89-2.12s0.84-2.12 1.89-2.12c1.06 0 1.9 0.96 1.89 2.12c0 1.17-0.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-0.95-1.89-2.12s0.84-2.12 1.89-2.12c1.06 0 1.9 0.96 1.89 2.12c0 1.17-0.83 2.12-1.89 2.12z"
                    fill="black"
                  />
                </svg>
                <span className="sr-only">Discord</span>
              </Link>

              <Link
                 href="mailto:hello@monadicdna.com"
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
