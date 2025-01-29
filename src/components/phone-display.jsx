"use client"

import { useEffect, useRef } from "react"
import { Skeleton } from "./skeleton"

const Phone = ({ children, smallerHeight = false, className = "" }) => (
  <div
    className="w-full max-w-[320px] h-[450px]"
  >
    <div className="relative w-full h-full rounded-t-[52px] bg-[#DADBD5] p-[1px] pb-0 transition-transform duration-300 ">
      <div className="relative w-full h-full rounded-t-[52px] bg-[#6E665D] p-[1px] pb-0 transition-all duration-300 ">
        <div className="relative w-full h-full rounded-t-[52px] bg-[#6F6257] p-[1px] pb-0">
          <div className="relative w-full h-full rounded-t-[52px] bg-[#A1978A] p-[1px] pb-0">
            <div className="relative w-full h-full rounded-t-[51px] bg-[#9B907F] p-[1px] pb-0">
              <div className="relative w-full h-full rounded-t-[52px] bg-black p-[8px] pb-0">
                  <div className="relative w-full h-full bg-black rounded-t-[45px] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-t-3xl mt-2.5" />
                    <div className="w-full  pt-12 px-0  flex flex-col bg-[#010101]">{children}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function PhoneDisplay() {

  return (
    <>
   

      <div className=" mx-auto md:-mx-16 mt-8">
     

        <Phone className="z-10 inline-block  transition-all duration-500">
          <div
            className="w-full h-[600px]  bg-[#FFFDF5] border border-[#FFFDF5] rounded-t-3xl mb-6 flex flex-col justify-start pt-10 px-4 pb-3  relative transition-all duration-500"
          >

            <p className="text-2xl text-center text-balance  text-black/70">What would you like to explore today?</p>
          
            <div className="p-6 w-48 mt-8 mx-auto bg-[#ECEBE7]/50 rounded-3xl space-y-4">
        <div className=" flex gap-x-3">
          <Skeleton className="h-8 w-8 rounded-full aspect-square" />
          <Skeleton className="w-full h-8 " />
        </div>
        <div className=" rounded-3xl">
          <Skeleton className="w-full h-24 " />
        </div>

        </div>

          </div>
        </Phone>

      </div>
    </>
  )
}

