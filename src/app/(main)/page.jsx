import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-inter relative">
      {/* Global Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] animate-orb-drift" />
        <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] bg-blue-500/15 rounded-full blur-[100px] animate-orb-drift-2" />
      </div>

      {/* Hero Section */}
      <main className="px-6 pt-24 md:pt-8 pb-8 md:pb-12 lg:px-8 relative overflow-hidden bg-black">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 bg-[length:200%_200%] animate-gradient-shift -z-10" />

        <div className="mx-auto max-w-5xl text-center relative">
          {/* Main Heading */}
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl text-balance font-darkMain font-black leading-tight tracking-tight text-white">
            Genetic Insights Without Compromise
          </h1>

          {/* Subheading */}
          <p className="hidden md:block md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-white">
            Unlock genetic insights with complete privacy and control. Explore thousands of genetic traits, securely store your data, and access cutting-edge personal genomics tools, all built with advanced encryption and blind computation technology.
          </p>

          <p className="block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base leading-relaxed text-white">
            Unlock your DNA insights with complete privacy and control through our suite of genomics tools.
          </p>
        </div>
      </main>

      {/* Products Section */}
      <section className="relative bg-white py-16 md:py-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-16">Our Products</h2>

          <div className="flex flex-wrap">
            {/* Explorer Card */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-40 flex items-center justify-center">
                <img className="w-44 inline-block" src="/images/appimages/explorer.png" alt="Explorer" />
              </div>
              <h3 className="font-black text-center text-black flex items-center justify-center mb-4">
                Explorer
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Explore more than a million scientifically-vetted genetic traits, all on your own device.
              </p>
              <a
                href="https://explorer.monadicdna.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
              >
                Launch Explorer
              </a>
            </div>

            {/* Vault Card */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-40 flex items-center justify-center">
                <img className="w-40 inline-block" src="/images/blind-computation.svg" alt="Vault" />
              </div>
              <h3 className="font-black text-center text-black flex items-center justify-center mb-4">
                Vault
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Securely store your genetic data without ever revealing your genetic code to us.
              </p>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="/vault"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
                >
                  Learn More
                </Link>
                <span className="text-sm text-gray-500">(In Alpha)</span>
              </div>
            </div>

            {/* Batcher Card */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-40 flex items-center justify-center">
                <img className="w-40 inline-block" src="/images/appimages/batcher.png" alt="Batcher" />
              </div>
              <h3 className="font-black text-center text-black flex items-center justify-center mb-4">
                Batcher
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Get your DNA sequenced anonymously using our novel mixing system.
              </p>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="/batcher"
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
                >
                  Learn More
                </Link>
                <span className="text-sm text-gray-500">(Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-bold text-xl mb-3">Privacy First</h3>
              <p className="text-gray-700">We use fully homomorphic encryption (FHE), multi-party compute (MPC), trusted execution environments (TEE) and local processing to keep your data under your control.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">No Snooping</h3>
              <p className="text-gray-700">We do not sell your data or share it with third parties. We never look at your data on our servers. In fact, we could not look even if we wanted to.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Cutting Edge</h3>
              <p className="text-gray-700">We offer LLM-powered analysis with the latest scientifically-validated, publicly-funded genomics research at your fingertips.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
