export const metadata = {
  title: 'Press Room',
}

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 md:pt-16 pb-12 relative">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Press Room
          </h1>
        </div>

        {/* Content Container with max-width */}
        <div className="max-w-[900px] mx-auto">
          {/* About Us Section */}
          {/* <div className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <p className="text-gray-700 mb-4">
                Monadic DNA is pioneering privacy-first genomic analysis, enabling individuals to maintain control of their genetic data while unlocking its potential for personalized healthcare.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">The Monadic Approach</h4>
                <p className="text-blue-800 mb-2">
                  Our name, Monadic DNA, reflects our innovative approach to genomic data privacy. Like functional programming monads that safely encapsulate values while enabling computations, our technology wraps sensitive genetic data in encryption while allowing beneficial analysis to be performed.
                </p>
                <a href="https://en.wikipedia.org/wiki/Monad_(functional_programming)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn more about monads →</a>
              </div>
              <p className="text-gray-700 mb-4">
                Founded in 2025, our team has been working at the intersection of cryptography, encryption, data analytics, and healthcare to build secure, private, and user-controlled genomic data solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to create a future where genomic data remains private, secure, and under individual control while enabling breakthrough discoveries in personalized medicine and healthcare.
              </p>
              <p className="text-gray-700">
                Monadic DNA was founded by a team of experts in cryptography, genomics, and healthcare with a shared vision of democratizing genetic information while preserving privacy. <a href="/team" className="text-[#D782BA] hover:text-[#C671A9] font-medium">Learn more about our team</a>.
              </p>
            </div>
          </div> */}

          {/* Company Information Section */}
          <div className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Company Information</h3>
                
                {/* Basic Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="font-medium text-gray-800">2025</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="font-medium text-gray-800">
                      <a href="https://maps.google.com/?q=456+Johnson+Ave+Suite+216+Brooklyn+NY+11237" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#D782BA]">NY</a>
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">
                      <a href="mailto:press@monadicdna.com" className="text-[#D782BA] hover:text-[#C671A9]">press@monadicdna.com</a>
                    </p>
                  </div>
                </div>

                {/* Awards & Recognition */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Awards & Recognition</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                          <img src="/images/press/awards/ethglobal.png" alt="ETHGlobal Logo" className="h-8 w-8 object-contain" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900">ETHGlobal Finalist</h5>
                          <p className="text-gray-600 text-sm">Scaling Ethereum 2024</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">Recognized as a top project at ETHGlobal's Scaling Ethereum hackathon for our innovative approach to privacy-preserving genomics.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                          <img src="/images/press/awards/sign.png" alt="Sign Protocol Logo" className="h-8 w-8 object-contain" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900">Sign Protocol - Most Creative Use</h5>
                          <p className="text-gray-600 text-sm">Scaling Ethereum 2024</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">Awarded first place for our innovative implementation of Sign Protocol for secure genomic data attestations and verification.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#0700fe] rounded-full flex items-center justify-center mr-4 border border-gray-200">
                          <img src="/images/press/awards/nillion.png" alt="Nillion Logo" className="h-8 w-8 object-contain" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900">Nillion - Best novel use case</h5>
                          <p className="text-gray-600 text-sm">Scaling Ethereum 2024</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">Recognized for our novel application of blind computation with Nillion to enable privacy-preserving genomic analysis.</p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                          <img src="/images/press/awards/risc.png" alt="RISC Zero Logo" className="h-8 w-8 object-contain" />
                        </div>
                        <div>
                          <h5 className="text-lg font-semibold text-gray-900">RISC Zero - Best zkVM App</h5>
                          <p className="text-gray-600 text-sm">Scaling Ethereum 2024</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">Awarded for our innovative use of RISC Zero's zkVM technology to enable verifiable computation on sensitive genomic data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media & Events Section */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Media & Events</h3>
            <ol className="relative border-s border-gray-200 ml-4">

              <li className="mb-10  ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white">
                  <svg className="w-2.5 h-2.5 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  <a href="https://lu.ma/197ie64i" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors duration-200">
                    Be an Encrypted Genomics Pioneer at ETHDenver 2025
                  </a>
                  <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">Event</span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">February 28, 2025</time>
                <p className="mb-4 text-base font-normal text-gray-600">Join us at ETHDenver to get your DNA sequenced and analyzed under encryption. Using strong encryption and blind computation, we give you full control over your genetic data.</p>
                <a href="https://lu.ma/197ie64i" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-green-700">
                  <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h16v11H2Z"/>
                    <path d="M8.535 12.879h2.93l.65 1.571H13.5L10.73 8.221h-1.46L6.5 14.45h1.385l.65-1.571Zm1.465-3.711.968 2.34H9.032l.968-2.34Z"/>
                  </svg>
                  Register
                </a>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#f8d8eb] rounded-full -start-3 ring-8 ring-white">
                  <svg className="w-2.5 h-2.5 text-[#D782BA]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 279.682 279.682">
                    <g>
                      <path d="M143.25,55.486c-41.06,0-74.465,33.405-74.465,74.465c0,16.824,5.511,32.711,15.938,45.939
                        c1.998,2.536,4.15,5.033,6.23,7.448c6.212,7.208,12.078,14.017,14.166,21.675c0.045,0.165,0.438,1.773,0.38,7.247l-0.01,0.791
                        c-0.063,4.444-0.147,10.528,4.352,15.091c3.081,3.125,7.399,4.645,13.204,4.645h40.272c6.268,0,10.774-1.534,13.776-4.689
                        c4.061-4.267,3.789-9.779,3.608-13.427c-0.032-0.645-0.066-1.296-0.074-1.944c-0.065-5.48,0.345-7.025,0.362-7.09
                        c2.121-7.657,8.993-15.732,15.057-22.855c2.023-2.377,3.934-4.622,5.714-6.879c10.431-13.23,15.944-29.12,15.944-45.951
                        C217.705,88.892,184.305,55.486,143.25,55.486z M189.982,166.614c-1.607,2.036-3.429,4.178-5.358,6.445
                        c-7.07,8.307-15.084,17.722-18.089,28.572c-0.429,1.546-0.988,4.395-0.905,11.273c0.01,0.835,0.049,1.675,0.091,2.507
                        c0.032,0.657,0.075,1.523,0.071,2.209c-0.528,0.086-1.325,0.166-2.475,0.166h-40.272c-1.276,0-2.022-0.135-2.405-0.237
                        c-0.198-0.977-0.17-3.007-0.152-4.287l0.012-0.844c0.072-6.919-0.483-9.789-0.907-11.348c-2.98-10.936-10.575-19.749-17.275-27.524
                        c-2.066-2.398-4.019-4.664-5.813-6.942c-8.32-10.557-12.718-23.232-12.718-36.654c0-32.789,26.676-59.465,59.465-59.465
                        c32.783,0,59.455,26.676,59.455,59.465C202.705,143.379,198.306,156.058,189.982,166.614z"/>
                      <path d="M161.766,239.564h-37.041c-7.995,0-14.5,6.505-14.5,14.5v11.117c0,7.995,6.505,14.5,14.5,14.5
                        h37.041c7.995,0,14.5-6.505,14.5-14.5v-11.117C176.266,246.069,169.761,239.564,161.766,239.564z M161.266,264.682h-36.041v-10.117
                        h36.041V264.682z"/>
                      <path d="M143.245,45.779c4.143,0,7.5-3.357,7.5-7.5V7.5c0-4.143-3.357-7.5-7.5-7.5
                        c-4.143,0-7.5,3.357-7.5,7.5v30.779C135.745,42.422,139.103,45.779,143.245,45.779z"/>
                      <path d="M241.917,34.598c-2.858-2.995-7.606-3.106-10.604-0.248l-22.77,21.73
                        c-2.997,2.859-3.107,7.607-0.248,10.604c1.474,1.544,3.448,2.322,5.427,2.322c1.86,0,3.725-0.688,5.177-2.074l22.77-21.731
                        C244.666,42.342,244.776,37.594,241.917,34.598z"/>
                      <path d="M264.273,109.599c-0.004,0-0.008,0-0.012,0l-29.311,0.047c-4.143,0.007-7.495,3.37-7.488,7.512
                        c0.007,4.139,3.363,7.488,7.5,7.488c0.004,0,0.008,0,0.012,0l29.311-0.047c4.143-0.007,7.495-3.37,7.488-7.512
                        C271.767,112.948,268.41,109.599,264.273,109.599z"/>
                      <path d="M74.386,64.684c2.859-2.996,2.749-7.743-0.248-10.604l-22.77-21.73
                        c-2.994-2.858-7.742-2.749-10.604,0.248c-2.859,2.996-2.749,7.743,0.248,10.604l22.77,21.731c1.452,1.386,3.315,2.074,5.177,2.074
                        C70.937,67.006,72.912,66.228,74.386,64.684z"/>
                      <path d="M44.729,109.646l-29.31-0.047c-0.004,0-0.008,0-0.012,0c-4.137,0-7.493,3.351-7.5,7.488
                        c-0.007,4.142,3.346,7.505,7.488,7.512l29.31,0.047c0.004,0,0.008,0,0.012,0c4.137,0,7.493-3.351,7.5-7.488
                        C52.225,113.016,48.872,109.652,44.729,109.646z"/>
                    </g>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  <a href="https://nillion.com/news/preserving-genomic-privacy-efficient-edit-distance-computation-with-secured/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D782BA] transition-colors duration-200">
                    Preserving Genomic Privacy: Efficient Edit Distance Computation with Secured Protocols
                  </a>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">February 17, 2025</time>
                <p className="mb-4 text-base font-normal text-gray-600">This article discusses advancements in privacy-preserving protocols for computing on genomic data.</p>
                <a href="https://nillion.com/news/preserving-genomic-privacy-efficient-edit-distance-computation-with-secured/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#D782BA] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#D782BA]">
                  <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg>
                  Read More
                </a>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#f8d8eb] rounded-full -start-3 ring-8 ring-white">
                  <svg className="w-2.5 h-2.5 text-[#D782BA]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  <a href="https://www.youtube.com/watch?v=-VAjzaOZkOo" target="_blank" rel="noopener noreferrer" className="hover:text-[#D782BA] transition-colors duration-200">
                    Privacy-Preserving Genomics Explained
                  </a>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">January 31, 2025</time>
                <p className="mb-4 text-base font-normal text-gray-600">In this in-depth interview, we discuss how Monadic DNA is revolutionizing genomic privacy through advanced cryptographic techniques and blind computing, enabling secure and private genomic analysis.</p>
                <a href="https://www.youtube.com/watch?v=-VAjzaOZkOo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#D782BA] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#D782BA]">
                  <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/>
                  </svg>
                  Watch Interview
                </a>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#f8d8eb] rounded-full -start-3 ring-8 ring-white">
                  <svg className="w-2.5 h-2.5 text-[#D782BA]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.55 2.046c.29-.571 1.11-.571 1.4 0l2.573 5.023 5.757.829a.77.77 0 0 1 .435 1.32L17.9 13.822l.973 5.602c.067.39-.34.739-.697.54L12.5 17.041l-5.676 2.923c-.358.199-.764-.15-.697-.54l.973-5.602-3.815-3.604a.77.77 0 0 1 .435-1.32l5.757-.829 2.573-5.023z"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  <a href="https://risczero.com/blog/scalingeth-virtual-hackathon-winners" target="_blank" rel="noopener noreferrer" className="hover:text-[#D782BA] transition-colors duration-200">
                    Monadic DNA Wins RISC Zero Hackathon Award
                  </a>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">April 30, 2024</time>
                <p className="mb-4 text-base font-normal text-gray-600">Monadic DNA was recognized for our innovative use of RISC Zero's zkVM technology to enable verifiable computation on sensitive genomic data, winning the Best zkVM Application award at ETHGlobal Scaling Ethereum 2024.</p>
                <a href="https://risczero.com/blog/scalingeth-virtual-hackathon-winners" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#D782BA] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#D782BA]">
                  <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                  </svg> 
                  Read More
                </a>
              </li>

              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-[#f8d8eb] rounded-full -start-3 ring-8 ring-white">
                  <svg className="w-2.5 h-2.5 text-[#D782BA]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.55 2.046c.29-.571 1.11-.571 1.4 0l2.573 5.023 5.757.829a.77.77 0 0 1 .435 1.32L17.9 13.822l.973 5.602c.067.39-.34.739-.697.54L12.5 17.041l-5.676 2.923c-.358.199-.764-.15-.697-.54l.973-5.602-3.815-3.604a.77.77 0 0 1 .435-1.32l5.757-.829 2.573-5.023z"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  <a href="https://ethglobal.com/showcase/monadic-dna-h7k7q" target="_blank" rel="noopener noreferrer" className="hover:text-[#D782BA] transition-colors duration-200">
                    Monadic DNA Showcases at ETHGlobal Scaling Ethereum 2024 and Wins
                  </a>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">April 26, 2024</time>
                <p className="mb-4 text-base font-normal text-gray-600">Our team demonstrated our groundbreaking privacy-preserving personal genomics platform at ETHGlobal Scaling Ethereum 2024.</p>
                <div className="flex space-x-3 mb-1">
                  <a href="https://www.youtube.com/watch?v=VAPJfYNbnNU" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#D782BA] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#D782BA]">
                    <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"/>
                    </svg>
                    Watch Demo
                  </a>
                  <a href="https://ethglobal.com/showcase/monadic-dna-h7k7q" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#D782BA] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-[#D782BA]">
                    <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    View Project
                  </a>
                </div>
              </li>
            </ol>
          </div>
  
        </div>
      </div>
    </div>
  );
}