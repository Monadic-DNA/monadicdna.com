import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AnnouncementBar } from '@/components/announcement-bar'

export default function Hero() {
  return (
    <div className="md:min-h-screen bg-white">
     

      {/* Hero Section */}
      <main className="px-6 md:pt-36 pt-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Launch Banner */}
       
          <AnnouncementBar/>

          {/* Main Heading */}
          <h1 className="mb-6  text-2xl sm:text-5xl text-balance font-extrabold leading-tight tracking-tight ">
            DNA insights with privacy, autonomy, and boundless curiosity
          </h1>

          {/* Subheading */}
          <p className="hidden md:block
          md:mb-8 text-balance mb-6 max-w-5xl sm:text-xl text-base leading-relaxed text-black">
            A genomics app build with award-winning privacy technology. Learn about your DNA while your data remains private, protected, and entirely in your hands.
          </p>

<p
className='block md:hidden mb-3 text-balance max-w-5xl sm:text-xl text-sm md:text-base  leading-relaxed text-[#232323]">
'>A genomics app with award-winning privacy—explore your DNA while keeping full control of your data.</p>

          {/* Email Signup */}
          <div className="mb-12">
            <p className="hidden md:block mb-4 sm:text-base text-sm text-[#7E7E7E]">
              Stay in the loop! Early users get access to exclusive insights that won't be available later.
            </p>
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
            <p className='md:hidden text-stone-600  text-sm mt-4'>Available soon on ios and android</p>
          </div>

          {/* App Store Badges */}
          <div className="text-center hidden md:block">
            <p className="mb-4 text-gray-600 md:text-base text-sm">Available soon on</p>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center rounded-lg bg-black md:px-6 px-3 py-2.5 hover:opacity-90"
              >
                <div className="flex items-center">
                  <svg className="mr-3 sm:h-8 sm:w-8 h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-white">Download on the</span>
                    <span className="sm:text-base text-sm font-medium text-white">App Store</span>
                  </div>
                </div>
              </a>
              <a 
                href="#" 
                className="inline-flex items-center rounded-lg bg-black md:px-6 px-3 py-2.5 hover:opacity-90"
              >
                <div className="flex items-center">
                 
                <svg className='md:mr-3 mr-1 sm:h-8 sm:w-8 h-5 w-5' height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xmlSpace="preserve">
        <g>
          <path style={{fill: '#32BBFF'}} d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028
		C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z" />
          <path style={{fill: '#32BBFF'}} d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96
		c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z" />
          <path style={{fill: '#32BBFF'}} d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103
		c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z" />
        </g>
        <path style={{fill: '#2C9FD9'}} d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314
	L302.012,255.98H23.549z" />
        <path style={{fill: '#29CC5E'}} d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212
	C322.891,142.356,227.427,88.937,79.355,6.028z" />
        <path style={{fill: '#D93F21'}} d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789
	c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z" />
        <path style={{fill: '#FFD500'}} d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123
	l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z" />
        <path style={{fill: '#FFAA00'}} d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205
	C446.624,300.379,470.108,287.294,470.108,287.294z" />
      </svg>


                  <div className="flex flex-col items-start">
                    <span className="text-[10px] md:text-xs text-white">GET IT ON</span>
                    <span className="sm:text-lg text-sm font-semibold text-white">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

