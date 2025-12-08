export default function BatcherPage() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <main className="px-6 pt-24 md:pt-8 lg:px-8 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl text-balance font-darkMain font-black leading-tight tracking-tight">
            Monadic DNA Batcher
          </h1>

          {/* Subheading */}
          <p className="hidden md:block md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-black">
            Anonymous, affordable genotyping through collective action. Join a batch, maintain your privacy, and get sequenced when your group is ready.
          </p>

          <p className="block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base leading-relaxed text-[#232323]">
            Anonymous, affordable genotyping through collective action.
          </p>

          <div className="mt-8 inline-block bg-yellow-100 border border-yellow-400 text-yellow-800 px-6 py-3 rounded-lg font-medium">
            Coming Soon
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section className="relative bg-[#1A1A1A] py-24 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-16">How It Works</h2>

          <div className="flex flex-wrap">
            {/* Step 1 */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-24 flex items-end justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-black text-[#1A1A1A]">
                  1
                </div>
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Anonymous Precommitment
              </h3>
              <p className="text-white text-center">
                Signal your interest in getting genotyped without revealing your identity. No personal information required at this stage.
              </p>
            </div>

            {/* Step 2 */}
            <div className="w-full md:w-1/3 p-5 text-center">
              <div className="mb-8 h-24 flex items-end justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-black text-[#1A1A1A]">
                  2
                </div>
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Batch Fills Up
              </h3>
              <p className="text-white text-center">
                When enough users precommit to fill a sequencing batch, you'll be notified. Collective action makes it more affordable for everyone.
              </p>
            </div>

            {/* Step 3 */}
            <div className="w-full md:w-1/3 p-4 text-center">
              <div className="mb-3 md:mb-8 h-auto md:h-24 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-black text-[#1A1A1A]">
                  3
                </div>
              </div>
              <h3 className="font-black text-center text-white flex items-center justify-center mb-4">
                Get Sequenced with Privacy
              </h3>
              <p className="text-white text-center">
                Complete your commitment by providing only your kit ID. Your identity remains protected throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Batcher Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Why Use Batcher?</h2>

          <div className="space-y-8">
            <div className="bg-[#FFFDF6] rounded-3xl p-8 border border-gray-200">
              <h3 className="font-black text-xl mb-4">Maximum Privacy</h3>
              <p className="text-gray-700">
                Your precommitment is completely anonymous. You only provide your kit ID when you're ready to proceed, maintaining privacy at every step.
              </p>
            </div>

            <div className="bg-[#FFFDF6] rounded-3xl p-8 border border-gray-200">
              <h3 className="font-black text-xl mb-4">Lower Costs Through Collective Action</h3>
              <p className="text-gray-700">
                DNA sequencing is more affordable when done in batches. By coordinating with other users, everyone benefits from reduced per-unit costs.
              </p>
            </div>

            <div className="bg-[#FFFDF6] rounded-3xl p-8 border border-gray-200">
              <h3 className="font-black text-xl mb-4">No Commitment Until Ready</h3>
              <p className="text-gray-700">
                Precommit anonymously with no obligation. Only proceed when the batch fills and you're ready to move forward.
              </p>
            </div>

            <div className="bg-[#FFFDF6] rounded-3xl p-8 border border-gray-200">
              <h3 className="font-black text-xl mb-4">Trusted Lab Partners</h3>
              <p className="text-gray-700">
                Your samples are processed by certified, privacy-conscious lab partners who share our commitment to data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon CTA */}
      <section className="py-16 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Interested in Batcher?
          </h2>
          <p className="text-white text-lg mb-8">
            We're currently developing Monadic DNA Batcher. Check back soon for updates!
          </p>
        </div>
      </section>
    </div>
  );
}
