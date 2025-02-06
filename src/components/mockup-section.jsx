"use client"

import PhoneDisplay from './phone-display'

export default function MockupSection() {
  return (
    <main className="relative bg-white px-4 flex items-center justify-center">
      <div className="relative">
        {/* The container for the phone (and the animated boxes behind it) */}
        
        <PhoneDisplay />
      </div>

    
    </main>
  )
}
