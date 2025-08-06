export default function Hero() {
  return (
    <div className="">


      {/* Hero Section */}
      <main className="px-6 pt-24 md:pt-8 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Launch Banner */}

          {/* <AnnouncementBar/> */}

          {/* Main Heading */}
          <h1 className="mb-6  text-3xl sm:text-4xl md:text-5xl text-balance font-darkMain font-black leading-tight tracking-tight ">
            DNA insights with privacy, autonomy, and boundless curiosity
          </h1>

          {/* Subheading */}
          <p className="hidden md:block
          md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-black">
            An award-winning genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.
          </p>

          <p
className='block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base  leading-relaxed text-[#232323]'>
            An award-winning genomics app with advanced encryption and blind computation technology.
          </p>

          <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <a
              href="https://testflight.apple.com/join/KnPAc4zz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base"
            >
              Join TestFlight Alpha (iOS)
            </a>

            <button
              disabled
              className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg cursor-not-allowed font-medium text-sm md:text-base"
            >
              Coming Soon on Android
            </button>
          </div>

          {/* Email Signup
          <div className="mb-4">

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                name='email'
                placeholder="Enter Email"
                className="max-w-sm h-10 md:h-12 placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-gray-300 focus:ring-1 rounded-none  border-black "
              />
              <Button
                className="max-w-sm w-full md:w-auto bg-black text-white hover:bg-black/90 md:text-base text-sm h-10 md:h-12 px-8 rounded-none"
              >
                Join the waitlist
              </Button>
            </div>

            <p className='md:hidden text-stone-600  text-sm mt-4'>Available soon on iOS devices</p>
          </div>
          <p className="hidden md:block mb-4  text-sm text-[#7E7E7E]">
              Stay in the loop! Early users get access to exclusive insights that won't be available later.
            </p>
        */}
        </div>

      </main>
    </div>
  )
}
