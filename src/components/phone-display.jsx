import Image from "next/image";
const Phone = ({ children, smallerHeight = false, className='' }) => (
  <div
    className={`w-full max-w-[320px] ${className} ${
      smallerHeight ? "h-[600px]" : "h-[700px]"
    }`}
  >
    <div className="relative w-full h-full rounded-[52px] bg-[#DADBD5] p-[1px]">
      <div className="relative w-full h-full rounded-[52px] bg-[#6E665D] p-[1px]">
        <div className="relative w-full h-full rounded-[52px] bg-[#6F6257] p-[1px]">
          <div className="relative w-full h-full rounded-[52px] bg-[#A1978A] p-[1px]">
            <div className="relative w-full h-full rounded-[51px] bg-[#9B907F] p-[1px]">
              <div className="relative w-full h-full rounded-[52px] bg-black p-[8px] ">
                <div className=" w-full h-full rounded-[46px] bg-[#808080] p-[1px]">
                  <div className="relative w-full h-full bg-white rounded-[45px] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-950 rounded-3xl mt-2.5" />
                    <div className="w-full h-full pt-10 p-4 flex flex-col">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function PhoneDisplay() {
  return (
    <div className="flex md:items-end justify-center items-center mx-auto md:-mx-16 h-[650px]">
      <Phone className="z-5 translate-x-3" smallerHeight>
  {/* Wrapper for Image */}
  <div className="w-full aspect-square bg-gradient-to-b from-[#F4F2D3] to-[#ADC5BB] border border-black/50 rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2">
    {/* Image Container */}
    <div className="relative w-full h-full">
      <Image
        src="/images/leftmost-phone.png" // Replace with your image path
        alt="Fruit DNA Insights"
        width={200}
        height={200}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
    </div>

    {/* Gradient Box */}
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFF3] border border-[#7b8942] rounded-3xl py-3 px-1 mt-3">
      <p className="text-center text-[#FA6C40] font-unbounded font-semibold text-[10px]">
        Which fruit are you most likely to enjoy based on your DNA?
      </p>
    </div>
  </div>

  {/* Text Content */}
  <div className="space-y-2">
    <h2 className="text-lg font-extrabold leading-tight">
      Are you a fan of durian? persimmons? bitter melon?
    </h2>
    <p className="text-[11px] text-black">
      Find out which polarizing fruit your genetics suggest you'll love!
    </p>
  </div>
</Phone>

<Phone className="z-10 md:inline-block hidden">
  {/* Phone Container */}
  <div className="w-full aspect-square bg-[#000040] border border-[#00001E] rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2 relative">
    {/* Left Image */}
    <Image
      src="/images/meteor.png" // Replace with your left image path
      alt="Left Image"
      className="absolute top-28 left-[25%] transform -translate-x-1/2 -translate-y-1/2 object-cover "
      width={100}
      height={100}
    />

    {/* Right Image */}
    <Image
      src="/images/meteor.png" // Replace with your right image path
      alt="Right Image"
      className="absolute top-28 left-[75%] transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
      width={100}
      height={100}
    />

    {/* Vertical Line in the Center */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-[2px] bg-white"></div>

    {/* Top Gradient Box */}
    <div className="relative bg-gradient-to-b from-[#FAFFFF] to-[#F7FFFF] border border-[#254668] rounded-3xl py-3 px-1 z-10">
      <p className="text-center text-[#254668] font-unbounded font-semibold text-[10px]">
        Are you more likely a sprinter or endurance runner?
      </p>
    </div>
  </div>

  {/* Text Content Below */}
  <div className="space-y-2">
    <h2 className="text-lg font-extrabold leading-tight">
      Explore boundless insights with your DNA
    </h2>
    <p className="text-[11px] mb-4 text-black">
      We believe in an open-ecosystem of innovation, not closed systems that limit your learning.
    </p>
    <p className="text-[11px] text-black">
      We'll periodically add interesting new insights and you can always use your DNA vault to get insights from other providers in the app too!
    </p>
  </div>
</Phone>


<Phone className="-translate-x-3 z-5 md:inline-block hidden" smallerHeight>
  {/* Phone Container */}
  <div className="w-full aspect-square bg-[#455044] border border-black/50 rounded-3xl mb-6 flex flex-col justify-end pb-3 px-2 relative">
    {/* Add the Image */}
    <Image
      src="/images/img10.png" // Replace with your actual image path
      alt="Diabetes Risk Score Image"
      className="absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-3xl"
      height={200}
      width={200}
    />

    {/* Top Gradient Box */}
    <div className="relative bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFD] border border-[#7b8942] rounded-3xl py-3 px-1 z-10">
      <p className="text-center text-[#1A6F59] font-unbounded font-semibold text-[10px]">
        What's your diabetes risk score?
      </p>
    </div>
  </div>

  {/* Text Content Below */}
  <div className="space-y-2">
    <h2 className="text-lg font-extrabold leading-tight">
      Could your genes influence your risk for diabetes?
    </h2>
    <p className="text-[11px] text-black">
      Type 2 diabetes risk is analyzed by examining specific genetic markers, known as single nucleotide polymorphisms (SNPs). For example, the rs7903146 SNP in the TCF7L2 gene has been associated with an increased likelihood of developing the condition. These insights can help you understand how your genetics may contribute to your overall risk.
    </p>
  </div>
</Phone>

    </div>
  );
}
