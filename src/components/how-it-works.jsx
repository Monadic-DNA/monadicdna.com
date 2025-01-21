
export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container max-w-7xl px-6 mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 mb-16 md:mb-24 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight md:text-left text-center">
              How blind computation technology keeps DNA data secure
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg md:text-left text-center">
                While it sounds like magic, we&apos;re building with the latest in advanced encryption technologies like Fully Homomorphic Encryption (FHE) and Multiparty Computation (MPC).
              </p>
              <p className="text-sm sm:text-base md:text-lg md:text-left text-center">
                These technologies minimize risk and enhance security by relying on cryptographic proofs rather than direct access.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-[#F5F8FF] rounded-lg flex items-center justify-center">
            <span className="text-[#99B3FF]">Custom Illustration</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative aspect-[4/3] bg-[#F5F8FF] rounded-lg flex items-center justify-center order-last md:order-first">
            <span className="text-[#99B3FF]">Custom Illustration</span>
          </div>
          <div className="space-y-6">
          <h2 className="text-2xl text-balance md:text-3xl font-black tracking-tight md:text-left text-center">
          How do these technologies work?
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg md:text-left text-center">
                With FHE, your DNA data stays encrypted even when it&apos;s being analyzed for insights. It&apos;s like solving a puzzle without opening the box.
              </p>
              <p className="text-sm sm:text-base md:text-lg md:text-left text-center">
                MPC ensures that you don&apos;t have to be dependent on us to store or secure your data. Don&apos;t like what we offer? You can easily take your data elsewhere!
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex mt-12   justify-center">
        <div className="border-2 border-black p-3 max-w-fit text-center">
          <p className="text-black text-base text-balance font-bold">
          Recognized for Innovation and Security, Monadic’s privacy technology was the overall winner at ETHGlobal out of 800 participants from 25 countries!
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

