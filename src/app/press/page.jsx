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

          {/* Media & Events Section */}
          {/* <div className="mb-16">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Media & Events</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Video</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">Monadic DNA Demo</h5>
                    <p className="text-gray-600 text-sm">ETHGlobal Scaling Ethereum 2024</p>
                    <p className="text-gray-500 text-xs mt-1">March 15, 2024</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <div className="aspect-video w-full max-w-md mb-3">
                      <a 
                        href="https://www.youtube.com/watch?v=-VAjzaOZkOo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block relative group"
                      >
                        <img 
                          src="https://img.youtube.com/vi/-VAjzaOZkOo/maxresdefault.jpg" 
                          alt="Monadic DNA Demo Video Thumbnail"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                          <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <p className="text-gray-700 text-sm">Watch our demo showcasing privacy-preserving personal genomics platform using blind computing and zero knowledge technology.</p>
                  </div>
                  <a href="https://www.youtube.com/watch?v=-VAjzaOZkOo" target="_blank" rel="noopener noreferrer" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">Watch on YouTube →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Event</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">Be an encrypted genomics pioneer</h5>
                    <p className="text-gray-600 text-sm">ethDenver 2025 | Terminal Bar, Denver, CO</p>
                    <p className="text-gray-500 text-xs mt-1">February 28, 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <p className="text-gray-700 text-sm">Get your DNA sequenced and analyzed under encryption. Using strong encryption and blind computation, we give you full control over your genetic data.</p>
                  </div>
                  <a href="https://lu.ma/197ie64i" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">Event Details →</a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Event</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">ETHGlobal Scaling Ethereum 2024</h5>
                    <p className="text-gray-600 text-sm">March 2024 | Virtual Hackathon</p>
                    <p className="text-gray-500 text-xs mt-1">March 15-17, 2024</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <p className="text-gray-700 text-sm">Our team built a privacy-preserving personal genomics platform using blind computing and zero knowledge technology.</p>
                  </div>
                  <a href="https://ethglobal.com/showcase/monadic-dna-h7k7q" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">View Project →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Article</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">RISC Zero Hackathon Winners</h5>
                    <p className="text-gray-600 text-sm">Scaling Ethereum 2024</p>
                    <p className="text-gray-500 text-xs mt-1">March 20, 2024</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <p className="text-gray-700 text-sm">Monadic DNA was recognized for our innovative use of RISC Zero's zkVM technology to enable verifiable computation on sensitive genomic data, winning the Best zkVM Application award.</p>
                  </div>
                  <a href="https://risczero.com/blog/scalingeth-virtual-hackathon-winners" target="_blank" rel="noopener noreferrer" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">Read Article →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Article</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">SecurED: Privacy-Preserving Genomic Analysis</h5>
                    <p className="text-gray-600 text-sm">Nillion Network</p>
                    <p className="text-gray-500 text-xs mt-1">February 15, 2025</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <p className="text-gray-700 text-sm">Learn about our collaboration with Nillion to develop SecurED, an efficient framework for secure edit distance computation that enables privacy-preserving genomic analysis while maintaining data security.</p>
                  </div>
                  <a href="https://nillion.com/news/preserving-genomic-privacy-efficient-edit-distance-computation-with-secured/" target="_blank" rel="noopener noreferrer" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">Read Article →</a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="mb-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Article</div>
                    <h5 className="text-lg font-semibold text-gray-900 mt-2">The Monadic Approach to Genomic Privacy</h5>
                    <p className="text-gray-600 text-sm">Technical Deep Dive</p>
                    <p className="text-gray-500 text-xs mt-1">March 1, 2024</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="mb-4 md:mb-0 md:pr-6">
                    <p className="text-gray-700 text-sm">Discover how Monadic DNA's name reflects our innovative approach to genomic data privacy. Like functional programming monads that safely encapsulate values while enabling computations, our technology wraps sensitive genetic data in encryption while allowing beneficial analysis to be performed.</p>
                  </div>
                  <a href="https://en.wikipedia.org/wiki/Monad_(functional_programming)" target="_blank" rel="noopener noreferrer" className="text-[#D782BA] hover:text-[#C671A9] font-medium text-sm whitespace-nowrap mt-2 md:mt-0">Learn More →</a>
                </div>
              </div>
            </div>
          </div>

          */}

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
                      <a href="https://maps.google.com/?q=456+Johnson+Ave+Suite+216+Brooklyn+NY+11237" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-[#D782BA]">Brooklyn, NY</a>
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
        </div>
      </div>
    </div>
  );
}