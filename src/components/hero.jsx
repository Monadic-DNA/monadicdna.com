import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Hero() {
  return (
    <div className=" bg-white">
     

      {/* Hero Section */}
      <main className="px-6 md:pt-32 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Launch Banner */}
       

          {/* Main Heading */}
          <h1 className="mb-6  text-2xl sm:text-4xl text-balance font-black leading-tight tracking-tight ">
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
            <p className='md:hidden text-stone-600  text-sm mt-4'>Available soon on ios and android</p>
          </div>
          <p className="hidden md:block mb-4  text-sm text-[#7E7E7E]">
              Stay in the loop! Early users get access to exclusive insights that won't be available later.
            </p>
        
        </div>
      </main>
    </div>
  )
}

