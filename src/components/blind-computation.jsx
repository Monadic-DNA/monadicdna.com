export default function DNASecurity() {
    return (
      <div className=" bg-[#FBFBFB] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Container for responsive grid/flex layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Content Section */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-4xl md:text-3xl font-black leading-tight mb-6 sm:mb-8">
              Blind computation technology keeps DNA data secure
            </h1>
  
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg mb-8">
              <p>
                While it sounds like magic, we're building with the latest in advanced encryption technologies like Fully
                Homomorphic Encryption (FHE) and Multiparty Computation (MPC).
              </p>
  
              <p>
                These technologies minimize risk and enhance security by relying on cryptographic proofs rather than
                direct access.
              </p>
  
              <p>
                With FHE, your DNA data stays encrypted even when it's being analyzed for insights. It's like solving a
                puzzle without opening the box.
              </p>
  
              <p>
                MPC ensures that you don't have to be dependent on us to store or secure your data. Don't like what we
                offer? You can easily take your data elsewhere!
              </p>
            </div>
  
            <button className="inline-flex px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Learn More
            </button>
          </div>
  
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
              <img
                src="/images/illsutration.svg"
                alt="Artistic illustration representing data security"
                className="w-full max-h-[400px] md:max-h-[600px] h-auto object-contain"
               
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  