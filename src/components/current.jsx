import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Footer() {
  const footerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`bg-[#0D0C0C] text-white py-16 px-4 md:px-12 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div
          className={`md:hidden space-y-8 transition-transform duration-1000 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-10"}`}
        >
          {/* Mobile content remains the same */}
          <div>
            {/* Example content */}
            <p>Mobile Content</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className={`hidden md:block transition-transform duration-1000 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-10"}`}
        >
          <div className="flex justify-between items-start">
            {/* Left Section */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Monadic DNA</h2>
              <div className="flex gap-4">
                {/* Social media links */}
                {["X", "Butterfly", "Mail", "Linkedin"].map((social, index) => (
                  <Link
                    key={social}
                    href="#"
                    className={`p-2 bg-white rounded-full flex justify-center items-center hover:bg-gray-100 transition-all duration-300 ease-in-out ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* SVG content remains the same */}
                    <span className="sr-only">{social}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4">{/* Links remain the same */}</div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            <p className="text-base">©2024 Monadic Health</p>
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
  )
}

