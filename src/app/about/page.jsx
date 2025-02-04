
export default function AboutPage() {
  return (
    <main>

<>
  <div >
    <section id="hero" className="bg-neutral-900 min-h-[70vh] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 space-y-8 animate__animated animate__fadeIn">
            <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold text-white leading-tight">
              Revolutionizing&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                DNA Analysis&nbsp;
              </span>
              with Privacy
            </h1>
            <p className="text-xl text-gray-300  text-center max-w-2xl">
              At Monadic DNA, we're pioneering a new era of genomic exploration
              where privacy meets discovery. Our award-winning technology
              ensures your DNA insights remain completely under your control.
            </p>
            <div className="flex items-center mx-auto max-w-fit justify-between gap-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity animate__animated animate__fadeInUp">
                Learn More
              </button>
              <button className="border-2 border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-neutral-900 transition-all animate__animated animate__fadeInUp animate__delay-1s">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div >
    <section id="mission" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </div>
   
        <div className="mt-16 text-center">
          <p className="text-neutral-600 max-w-3xl mx-auto text-lg animate__animated animate__fadeIn animate__delay-3s">
            We're dedicated to transforming the landscape of DNA analysis by
            making it more accessible, secure, and privacy-focused. Our mission
            is to empower individuals with knowledge about their genetic makeup
            while ensuring their data remains protected and private.
          </p>
        </div>
      </div>
    </section>
  </div>
  
    <div >
      <section id="expertise" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
              <h3 className="text-2xl font-semibold text-white mb-6">
                DNA Privacy Technology
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Advanced encryption protocols for genetic data
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Secure data storage and processing systems
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Privacy-preserving computation methods
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Genomic Analysis
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    State-of-the-art DNA sequencing technology
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Advanced genetic variant interpretation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Comprehensive genomic reporting
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft animate__delay-1s">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Data Security
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    End-to-end encryption protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Secure cloud infrastructure
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Regular security audits and compliance
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight animate__delay-1s">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Research &amp; Development
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Continuous innovation in privacy technology
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Collaboration with research institutions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-300">
                    Publication of research findings
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  

    <div >
      <section id="values" className="bg-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Privacy First
              </h3>
              <p className="text-gray-400">
                Your genetic data security and privacy is our top priority in
                everything we do.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-400">
                Continuously pushing boundaries in privacy-preserving genomic
                technology.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Transparency
              </h3>
              <p className="text-gray-400">
                Open communication and clear processes in all our operations.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-3s">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                User Empowerment
              </h3>
              <p className="text-gray-400">
                Putting you in control of your genetic information and insights.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-400 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
              These values guide every decision we make and every feature we
              develop, ensuring we deliver the most secure and valuable genetic
              insights while maintaining the highest standards of privacy and
              user control.
            </p>
            <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity animate__animated animate__fadeIn animate__delay-4s">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </section>
    </div>
  
</>

    </main>
  )
}

