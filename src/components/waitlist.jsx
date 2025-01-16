"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaitlistSection() {
  return (
    <section className="w-full  mx-auto px-4 pt-12 pb-24 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Early Users Exclusive Insights!
      </h2>

      {/* DNA Question Card */}
      <div className="max-w-fit  border border-black mx-auto h-[120px] bg-gradient-to-r from-[#DDE4FF] to-[#EAF9FF] rounded-[32px] flex items-center mb-8 px-8 py-4">
        <div className="flex items-center justify-center mr-4">
          <img
            className="absolute w-10 h-auto"
            src="/images/double-helix.png"
            alt="Double Helix"
          />
          <svg
            width="56"
            height="86"
            viewBox="0 0 68 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67.1003 59.8023C67.1003 68.0405 65.9838 73.6923 64.0435 77.5442C62.1102 81.3823 59.3523 83.4473 56.0198 84.5063C52.6712 85.5704 48.7336 85.6219 44.4436 85.4C43.0225 85.3265 41.5613 85.2228 40.0724 85.1172C37.0858 84.9053 33.9879 84.6855 30.8789 84.6855C27.6465 84.6855 24.5962 84.923 21.7804 85.1423C20.5361 85.2391 19.3376 85.3324 18.1894 85.4001C14.4234 85.6221 11.1995 85.5685 8.56386 84.513C5.95021 83.4663 3.88323 81.4199 2.46355 77.5724C1.03881 73.7112 0.271759 68.0487 0.271759 59.8023C0.271759 43.3263 4.03413 28.4234 10.1032 17.6491C16.177 6.86631 24.5255 0.271759 33.686 0.271759C42.8466 0.271759 51.1951 6.86631 57.2689 17.6491C63.3379 28.4234 67.1003 43.3263 67.1003 59.8023Z"
              fill="url(#paint0_linear_3_973)"
              stroke="black"
              strokeWidth="0.543518"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_973"
                x1="8.72664"
                y1="3.98966"
                x2="90.5315"
                y2="41.2545"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFEF9" />
                <stop offset="1" stopColor="#D7FCFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="bg-gradient-to-br max-w-fit from-[#FFFEF9] to-[#D7FCFF] border border-[#1A1A1A] rounded-3xl flex-1 h-16 flex items-center px-6">
          <p className="text-[10px] md:text-sm font-semibold font-unbounded">
            What does your DNA reveal about you?
          </p>
        </div>
      </div>

      {/* Description Text */}
      <p className=" text-base md:text-lg mb-4 max-w-2xl mx-auto text-balance text-center">
        Drop your email and we&apos;ll stay in touch! We&apos;ll send you an
        email when the app is availble to download.
      </p>

     <p className="text-base md:text-lg mb-4 max-w-2xl mx-auto text-balance text-center">
        We&apos;ll never spam or
        share your email.</p>

      <p className="text-base md:text-[18px] mb-8 text-center ">
        Early users get access to 3 exclusive insights that won&apos;t be
        available later!
      </p>

      {/* Email Form */}
      <div className="w-full max-w-2xl flex flex-col md:justify-start md:items-start justify-center items-center sm:flex-row gap-4 mx-auto">
        <Input
          type="email"
          placeholder="Enter Email"
          className="flex-1 h-12 border border-black rounded-none text-base"
        />
        <Button className="h-12 px-8 w-60 bg-black text-white hover:bg-black/90 text-base font-medium rounded-none">
          Join the waitlist
        </Button>
      </div>
    </section>
  );
}
