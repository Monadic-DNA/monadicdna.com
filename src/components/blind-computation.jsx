export default function DNASecurity() {
  return (
    <div className=" bg-[#FBFBFB] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      {/* Container for responsive grid/flex layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Content Section */}
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-black leading-tight mb-6 sm:mb-8">
            Blind computation technology keeps your DNA secure
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
            With FHE, your DNA data remains encrypted even while being analyzed for insights. Imagine solving a puzzle without ever seeing the pieces. Or cracking a Rubik's cube blindfolded. Or sculpting without sight, yet still achieving precision. You get the idea. Your DNA data stays private and secure, always. Even during computation.
            </p>

            <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-gray-700">
                    Monadic DNA's privacy technology was the <span className="font-bold text-indigo-600">overall winner at ETHGlobal 2024</span> out of 800 participants from 25 countries!
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] lg:max-w-[500px]">
            <img
              src="/images/blind-computation.svg"
              alt="Artistic illustration representing data security"
              className="w-full max-h-[400px] md:max-h-[600px] h-auto object-contain"
             
            />
          </div>
        </div>
      </div>
    </div>
  )
}

