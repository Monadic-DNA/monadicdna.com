import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <main className="px-6 pt-24 md:pt-8 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl text-balance font-darkMain font-black leading-tight tracking-tight">
            Privacy-First Genomics Platform
          </h1>

          {/* Subheading */}
          <p className="hidden md:block md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-black">
            Unlock the power of your DNA with complete privacy and control. Explore genetic insights, securely store your data, and access cutting-edge genomics tools—all built with advanced encryption and blind computation technology.
          </p>

          <p className="block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base leading-relaxed text-[#232323]">
            Unlock your DNA insights with complete privacy and control through our suite of genomics tools.
          </p>
        </div>
      </main>

      {/* Products Section */}
      <section className="relative bg-[#1A1A1A] py-24 md:py-24 z-20 mt-12 md:mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">Our Products</h2>

          <div className="flex flex-wrap">
            {/* Explorer Card */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-24 flex items-end justify-center">
                <img className="w-24 inline-block" src="/images/features/key-illustration.png" alt="Explorer" />
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Monadic DNA Explorer
              </h3>
              <p className="text-white text-center mb-6">
                Discover and analyze your genetic traits with AI-powered semantic search. Explore thousands of genetic studies with privacy-preserving LLM analysis.
              </p>
              <a
                href="https://explorer.monadicdna.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Launch Explorer
              </a>
            </div>

            {/* Vault Card */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 relative mx-auto h-24 flex items-end justify-center">
                <div className="flex">
                  <img className="px-0 py-0 rounded-2xl" src="/images/features/23andme-logo.svg" alt="23andMe" />
                  <div className="flex flex-col mt-[-12px] gap-y-1">
                    <div className="ml-1 -mt-1">
                      <img className="px-2 py-1 rounded-2xl" src="/images/features/test-tube-icon.svg" alt="Collection-tube" />
                    </div>
                    <img className="px-4 mt-1 py-1 rounded-2xl" src="/images/features/ancestry-logo.svg" alt="AncestryDNA" />
                  </div>
                </div>
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Monadic DNA Vault
              </h3>
              <p className="text-white text-center mb-6">
                Securely import and store your DNA data from other services or get sequenced through our privacy-conscious lab partner. Full control, always.
              </p>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="/vault"
                  className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base"
                >
                  Learn More
                </Link>
                <span className="text-sm text-gray-400">(In Alpha)</span>
              </div>
            </div>

            {/* Batcher Card */}
            <div className="w-full md:w-1/3 p-4 text-center">
              <div className="mb-3 md:mb-8 h-auto md:h-24 flex items-center justify-center">
                <img className="w-22 max-h-[90px] inline-block" src="/images/features/third-feature.svg" alt="Batcher" />
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Monadic DNA Batcher
              </h3>
              <p className="text-white text-center mb-6">
                Anonymously commit to getting genotyped. When enough users join a batch, get affordable sequencing with complete privacy using only kit IDs.
              </p>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="/batcher"
                  className="inline-block bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm md:text-base"
                >
                  Learn More
                </Link>
                <span className="text-sm text-gray-400">(Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Why Choose Monadic DNA?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-bold text-xl mb-3">Privacy First</h3>
              <p className="text-gray-700">Built with advanced encryption and blind computation. Your data never leaves your control.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Open & Transparent</h3>
              <p className="text-gray-700">Open-source tools you can trust. No black boxes, no hidden agendas.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Cutting Edge</h3>
              <p className="text-gray-700">AI-powered analysis with the latest genomics research at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
