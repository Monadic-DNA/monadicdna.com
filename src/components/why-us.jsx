'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export default function WhyUs() {
  const containerRef = useRef(null)
  const [paths, setPaths] = useState([])
  const [activeBoxes, setActiveBoxes] = useState([])
  const [activeCard, setActiveCard] = useState(null)
  
  const calculatePaths = useCallback(() => {
    const boxes = containerRef.current.querySelectorAll('.content-box')
    const newPaths = []
    
    for (let i = 0; i < boxes.length - 1; i++) {
      const start = boxes[i].getBoundingClientRect()
      const end = boxes[i + 1].getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      
      let x1, y1, x2, y2, midX

      if (i % 2 === 0) {
        x1 = start.right - containerRect.left
        y1 = start.top - containerRect.top + start.height / 2
        x2 = end.left - containerRect.left + end.width / 2
        y2 = end.top - containerRect.top
        midX = x2
      } else {
        x1 = start.left - containerRect.left
        y1 = start.top - containerRect.top + start.height / 2
        x2 = end.left - containerRect.left + end.width / 2
        y2 = end.top - containerRect.top
        midX = x2
      }
      
      newPaths.push(`M ${x1} ${y1} H ${midX} V ${y2}`)
    }
    
    setPaths(newPaths)
  }, [])
  
  useEffect(() => {
    calculatePaths()
    window.addEventListener('resize', calculatePaths)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(containerRef.current.querySelectorAll('.content-box')).indexOf(entry.target)
        setActiveBoxes(prev => {
          const newActiveBoxes = [...prev]
          newActiveBoxes[index] = entry.isIntersecting
          return newActiveBoxes
        })
        if (entry.isIntersecting) {
          setActiveCard(index)
        } else if (activeCard === index) {
          // Find the next visible card when scrolling down
          const nextVisibleIndex = activeBoxes.findIndex((isActive, i) => i > index && isActive)
          if (nextVisibleIndex !== -1) {
            setActiveCard(nextVisibleIndex)
          } else {
            // Find the previous visible card when scrolling up
            const prevVisibleIndex = activeBoxes.findLastIndex((isActive, i) => i < index && isActive)
            setActiveCard(prevVisibleIndex !== -1 ? prevVisibleIndex : null)
          }
        }
      })
    }, { threshold: 0.5 })

    containerRef.current.querySelectorAll('.content-box').forEach((box) => {
      observer.observe(box)
    })

    return () => {
      window.removeEventListener('resize', calculatePaths)
      observer.disconnect()
    }
  }, [activeCard, activeBoxes])

  const getLineColor = (index) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']
    if (index === 2) {
      return '#2ECC71' // Specific green color for the third path
    }
    if (activeBoxes[index] && activeBoxes[index + 1]) {
      return colors[index % colors.length]
    }
    return 'rgba(0, 0, 0, 0.2)'
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:py-16 py-8" ref={containerRef}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke={getLineColor(index)}
            strokeWidth="2"
            className={`transition-colors duration-300 ${index === 2 ? 'opacity-100' : ''}`}
          />
        ))}
      </svg>

      <div className="md:space-y-32 space-y-16">
        <div className="grid grid-cols-12 sm:gap-8 gap-5 sm:mx-0 mx-12 ">
          <div className={`content-box col-span-12 md:col-span-6 bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeCard === 0 ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-4 sm:text-left text-center">
              We safeguard passwords and bank PINs, but the value of DNA is unmatched.
            </h2>
            <p className="text-gray-600 sm:mb-4 mb-2  sm:text-left text-center">
              A stolen password might cost you money, but compromised DNA data can affect your life, health, and privacy forever.
            </p>
            <p className="text-gray-600 sm:text-left text-center">
              Passwords can be reset but your DNA cannot.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 sm:gap-8 gap-5 sm:mx-0 mx-12">
          <div className={`content-box col-start-1 md:col-start-7 col-span-12 md:col-span-6 bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeCard === 1 ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-4 sm:text-left text-center">
              The status quo isn't working.
            </h2>
            <p className="text-gray-600 sm:mb-4 mb-2  sm:text-left text-center">
              Existing DNA companies have been facing security breaches that lock people out of accessing their own data. Some are even struggling financially which puts this extremely sensitive data at risk of being sold without your consent.
            </p>
            <p className="text-gray-600  underline text-center sm:text-left ">
              Read about the latest 23 and Me breach
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 sm:gap-8 gap-5 sm:mx-0 mx-12">
          <div className={`content-box col-span-12 md:col-span-6 bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeCard === 2 ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-4 sm:text-left text-center">
              Monadic DNA is a secure safe that only you have the keys to access.
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1">⚡</span>
                <span className='text-gray-600 sm:mb-4 sm:text-left text-center'>Privacy and security are fundamentally built into our app design from the ground up</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">⚡</span>
                <span className='text-gray-600 sm:mb-4 sm:text-left text-center'>Monadic is using the latest in blind computation technology which means, we cannot sell your data, share it, or even access it.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">⚡</span>
                <span className='text-gray-600 sm:mb-4 sm:text-left text-center'>You can delete your data at any time.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-12 sm:gap-8 gap-5 sm:mx-0 mx-12">
          <div className={`content-box col-start-1 md:col-start-7 col-span-12 md:col-span-6 bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 ${activeCard === 3 ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
            <h2 className="text-2xl font-bold mb-4 sm:text-left text-center">
              Get sequenced once, use it everywhere
            </h2>
            <p className="text-gray-600 mb-4 sm:text-left text-center">
              Upload your raw DNA data, and it gets encrypted and stored in your Monadic vault. You can use this shielded data with apps in the Monadic app store.
            </p>
            <p className="text-gray-600 mb-4 sm:text-left text-center">
              This approach is a shift towards a new, trustworthy and security-conscious way of handling sensitive data made possible by blind computation technology. Your DNA data stays completely private at every step. Even when analysis is being done!
            </p>
            <p className="text-gray-600 sm:text-left text-center">
              We're creating an open-ecosystem that evolves alongside the breakthroughs in genomic science by inviting providers with diverse specialties to offer DNA insights. Whether you want to see if you have the "cilantro tastes like soap" gene or navigate the risks for inherited diseases with your doctor, we want to make sure this is done right with autonomy and privacy at every step of the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

