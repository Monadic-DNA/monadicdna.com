export default function Features() {
    return(
<section className="bg-[#1A1A1A]  py-24 md:py-24 ">
   <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 items-center justify-center">


   {/* Card 1  */}
   <div className="p-4 text-center">
<div className="mb-3 ">
<img src="/images/features/23andme-logo.png" alt="23 and me logo" />
<img src="/images/features/ancestry-dna.png" alt="Ancestory DNA" />
<img src="/images/features/collection-tube.png" alt="Collection-tube" />
</div>
<h3 className=" font-black text-center text-white">Import and secure your DNA File</h3>
<p className="text-white text-center">from other services for FREE or buy a DNA kit from us to get sequenced from a trusted, privacy-conscious, certified lab partner</p>
       </div>



       {/* Card 2  */}
       <div className="p-4 text-center">
        
       <div className="mb-3">
    <img className="w-24 mx-auto inline-block" src="/images/features/second-feature.png" alt="Second feature" />
    </div>

<h3 className=" font-black text-center text-white">
    Get actionable insights securely 
</h3>
<p className="text-white text-center">with vetted apps and reports in the Monadic DNA Store</p>
       </div>



       {/* Card 3  */}
       <div className="p-4 ">

       <div className="mb-3">
    <img className="w-20 mx-auto inline-block h-auto" src="/images/features/third-feature.svg" alt="Third feature" />
    </div>


<h3 className="font-black text-center text-white">You are in control, always.</h3>
<p className="text-white text-center">Your DNA data is processed locally on your device, ensuring that it never leaves your hands. Privacy and security are built into our design and ethos from the ground up</p>
       </div>
       </div>
</section>
    )
}