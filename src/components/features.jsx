export default function Features() {
    return(
<section className="relative bg-[#1A1A1A] py-24 md:py-24 z-20 mt-[-160px] pt-[160px]">
  <div className="max-w-7xl mx-auto flex flex-wrap">

    {/* Card 1  */}
    <div className="w-full md:w-1/3 p-5 text-center">
      <div className="mb-8 relative mx-auto h-24 flex items-end justify-center">
        <div className="flex">
          <img className="px-0 py-0 rounded-2xl" src="/images/features/23andme-logo.svg" alt="23andMe" />
          <div className="flex flex-col mt-[-12px] gap-y-1">
            <div className="ml-1 -mt-1">
              <img className="px-2 py-1 rounded-2xl" src="/images/features/test-tube-icon.svg" alt="Collection-tube" />
            </div>
            <img className="px-4 mt-1 py-1 rounded-2xl" src="/images/features/ancestry-logo.svg" alt="AncestoryDNA" />
          </div>
        </div>
      </div>
      <h3 className="font-black text-center text-white flex items-center justify-center">Import and secure your DNA File</h3>
      <p className="text-white text-center">from other services for FREE or buy a DNA kit from us to get sequenced from a trusted, privacy-conscious, certified lab partner.</p>
    </div>

    {/* Card 2  */}
    <div className="w-full md:w-1/3 p-5 text-center">
      <div className="mb-8 h-24 flex items-end justify-center">
        <img className="w-32 max-w-[350px] inline-block" src="/images/features/key-illustration.png" alt="Unlock Insights" />
      </div>
      <h3 className="font-black text-center text-white flex items-center justify-center">
        Unlock actionable insights securely
      </h3>
      <p className="text-white text-center">with vetted apps and reports in the Monadic DNA Store.</p>
    </div>

    {/* Card 3  */}
    <div className="w-full md:w-1/3 p-4 text-center">
      <div className="mb-3 md:mb-8 h-auto md:h-24 flex items-center justify-center">
        <img className="w-22 max-h-[90px] inline-block" src="/images/features/third-feature.svg" alt="You are in Control" />
      </div>
      <h3 className="font-black text-center text-white flex items-center justify-center">You are in control, always.</h3>
      <p className="text-white text-center">because privacy and security are built into Monadic DNA's design and ethos from the ground up.</p>
    </div>

  </div>
</section>
    )
}