export default function PressPage(){
    return(
        <main>
          {/*
  <div >
    <section id="pressCenter" className="bg-neutral-900 pt-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Press Center
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Latest news, press releases, and media resources about Monadic DNA
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
            <h2 className="text-2xl font-bold text-white mb-6">
              Latest Press Releases
            </h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-700 pb-6">
                <p className="text-blue-400 mb-2">March 15, 2024</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Monadic DNA Announces Series A Funding
                </h3>
                <p className="text-gray-300">
                  $25M investment to accelerate privacy-focused genomic analysis
                  platform development.
                </p>
              </div>
              <div className="border-b border-neutral-700 pb-6">
                <p className="text-blue-400 mb-2">February 28, 2024</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Partnership with Leading Research Institutions
                </h3>
                <p className="text-gray-300">
                  Collaboration with top genomics research centers for advanced
                  DNA analysis.
                </p>
              </div>
              <div className="pb-6">
                <p className="text-blue-400 mb-2">January 10, 2024</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Privacy-First DNA Analysis Platform Launch
                </h3>
                <p className="text-gray-300">
                  Revolutionary approach to secure genetic data analysis and
                  storage.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
            <h2 className="text-2xl font-bold text-white mb-6">
              Media Coverage
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-6">
                <div>
                  <img
                    src="https://monadic-v0.vercel.app/images/features/23andme-logo.png"
                    alt="Media Logo"
                    className="h-8 mb-2 transition-opacity duration-300 opacity-100"
                    loading="lazy"
                  />
                  <p className="text-white">
                    "Revolutionary approach to DNA privacy"
                  </p>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Read More →
                </a>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-700 pb-6">
                <div>
                  <img
                    src="https://monadic-v0.vercel.app/images/companies/dantelabs_logo.png"
                    alt="Media Logo"
                    className="h-8 mb-2 transition-opacity duration-300 opacity-100"
                    loading="lazy"
                  />
                  <p className="text-white">
                    "Leading the future of secure genomics"
                  </p>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Read More →
                </a>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="https://monadic-v0.vercel.app/images/livingdna_logo.png"
                    alt="Media Logo"
                    className="h-8 mb-2 transition-opacity duration-300 opacity-100"
                    loading="lazy"
                  />
                  <p className="text-white">
                    "Transforming genetic data security"
                  </p>
                </div>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center animate__animated animate__fadeIn">
          <h2 className="text-2xl font-bold text-white mb-8">
            Media Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <svg
                className="w-12 h-12 text-blue-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-white font-semibold mb-2">Brand Assets</h3>
              <p className="text-gray-300">
                Download logos, screenshots, and brand guidelines
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <svg
                className="w-12 h-12 text-blue-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <h3 className="text-white font-semibold mb-2">Press Kit</h3>
              <p className="text-gray-300">
                Company fact sheet and press materials
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors">
              <svg
                className="w-12 h-12 text-blue-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-white font-semibold mb-2">Events</h3>
              <p className="text-gray-300">
                Upcoming conferences and speaking engagements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div >
    <section id="mediaKit" className="bg-neutral-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Media Kit &amp; Brand Resources
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Download official Monadic DNA brand assets and guidelines
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8 animate__animated animate__fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Company Logos</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Download ZIP
              </button>
            </div>
            <div className="space-y-4">
              <div className="border border-neutral-200 rounded-lg p-4">
                <img
                  src="https://monadic-v0.vercel.app/images/features/23andme-logo.png"
                  alt="Logo Dark"
                  className="h-8 mb-2 transition-opacity duration-300 opacity-100"
                  loading="lazy"
                />
                <p className="text-sm text-neutral-600">Primary Logo - Dark</p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-4">
                <img
                  src="https://monadic-v0.vercel.app/images/companies/dantelabs_logo.png"
                  alt="Logo Light"
                  className="h-8 mb-2 transition-opacity duration-300 opacity-100"
                  loading="lazy"
                />
                <p className="text-sm text-neutral-600">Primary Logo - Light</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-sm p-8 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Product Images</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Download ZIP
              </button>
            </div>
            <div className="space-y-4">
              <div className="border border-neutral-200 rounded-lg p-4">
                <img
                  src="https://monadic-v0.vercel.app/images/features/second-feature.png"
                  alt="Product Screenshot"
                  className="w-full mb-2 transition-opacity duration-300 opacity-100"
                  loading="lazy"
                />
                <p className="text-sm text-neutral-600">Product Interface</p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-4">
                <img
                  src="https://monadic-v0.vercel.app/images/features/collection-tube.png"
                  alt="Product Feature"
                  className="w-full mb-2 transition-opacity duration-300 opacity-100"
                  loading="lazy"
                />
                <p className="text-sm text-neutral-600">Feature Highlights</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-xl shadow-sm p-8 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Brand Guidelines</h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Download PDF
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-4 border border-neutral-200 rounded-lg">
                <svg
                  className="w-6 h-6 text-neutral-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-neutral-600">Brand Guidelines.pdf</span>
              </div>
              <div className="flex items-center p-4 border border-neutral-200 rounded-lg">
                <svg
                  className="w-6 h-6 text-neutral-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-neutral-600">Color Palette.pdf</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 animate__animated animate__fadeIn">
          <h3 className="text-2xl font-semibold mb-6">Usage Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Do's</h4>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                  Use official logo files provided
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                  Maintain minimum clear space
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
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
                  Use approved color combinations
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Don'ts</h4>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Modify or distort the logo
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Use unofficial colors
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Add effects or backgrounds
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  */}
  </main>
    )
}