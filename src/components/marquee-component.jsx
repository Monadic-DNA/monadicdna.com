import { Marquee } from "./marquee";
import CustomShape from "./custom-shape";

const row2Cards = [
  {
    id: 6,
    question: "Are you likely to be lactose intolerant?",
    gradient: "from-[#FFEADD] to-[#ECEAFF]",
    colors: { start: '#DDE4FF', end: '#EAF9FF' },
    imageUrl: "./images/img06.png"
  },
  {
    id: 7,
    question: "Are you predisposed to greater flexibility?",
    gradient: "from-[#FCFFD7] to-[#EAF9FF]",
    colors: { start: '#DDE4FF', end: '#EAF9FF' },
    imageUrl: "./images/img07.png"
  },
  {
    id: 8,
    question: "Does your DNA influence your cilantro preference?",
    gradient: "from-[#FFEADD] to-[#FFE5D7]",
    colors: { start: '#DDE4FF', end: '#EAF9FF' },
    imageUrl: "./images/img08.png"
  },
  {
    id: 9,
    question: "Are you more likely to be a coffee lover or hater?",
    gradient: "from-[#FCFFD7] to-[#EAF9FF]",
    colors: { start: '#DDE4FF', end: '#EAF9FF' },
    imageUrl: "./images/img10.png"
  }
];





export function MarqueeDemo() {
  return (
    <div className="relative bg-[#FBFBFB] flex py-24 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-x-xl">
    
    <h2 className="max-w-xl mb-16 font-black mt-12 text-center text-4xl">Get insights you can actually use to improve your life</h2>
    <Marquee pauseOnHover className="[--duration:50s]">
    {[...row2Cards, ...row2Cards].map((card, index) => (

                      <div
                        key={`${card.id}-${index}`}
                        className="flex-none max-w-fit"
                      >
                        <div className={`rounded-3xl border border-black px-3 py-2 flex flex-row justify-center gap-y-0 bg-gradient-to-br ${card.gradient} h-max-fit`}>
                          <div className="aspect-square  flex items-center justify-center">
                            <CustomShape 
                              startColor={card.colors.start}
                              endColor={card.colors.end}
                              imageUrl={card.imageUrl}
                              className="w-10 mr-2 h-auto"
                            />
                          </div>
                          <p className={`font-unbounded h-10 sm:h-12 flex justify-center items-center rounded-2xl border border-black px-3 py-2.5 bg-gradient-to-tr from-${card.colors.start} to-${card.colors.end} text-[9px] sm:text-xs text-center font-medium`}>
                            {card.question}
                          </p>
                        </div>
                      </div>
                      
                    ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
      {[...row2Cards, ...row2Cards].map((card, index) => (
                      <div
                        key={`${card.id}-${index}`}
                        className="flex-none max-w-fit"
                      >
                        <div className={`rounded-3xl border border-black px-3 py-2 flex flex-row justify-center gap-y-0 bg-gradient-to-br ${card.gradient} h-max-fit`}>
                          <div className="aspect-square  flex items-center justify-center">
                            <CustomShape 
                              startColor={card.colors.start}
                              endColor={card.colors.end}
                              imageUrl={card.imageUrl}
                              className="w-10 mr-2 h-auto"
                            />
                          </div>
                          <p className={`font-unbounded h-10 sm:h-12 flex justify-center items-center rounded-2xl border border-black px-3 py-2.5 bg-gradient-to-tr from-${card.colors.start} to-${card.colors.end} text-[9px] sm:text-xs text-center font-medium`}>
                            {card.question}
                          </p>
                        </div>
                      </div>
                    ))}
      </Marquee>

      <Marquee pauseOnHover className="[--duration:50s]">
       

         {[...row2Cards, ...row2Cards].map((card, index) => (
                      <div
                        key={`${card.id}-${index}`}
                        className="flex-none max-w-fit"
                      >
                        <div className={`rounded-3xl border border-black px-3 py-2 flex flex-row justify-center gap-y-0 bg-gradient-to-br ${card.gradient} h-max-fit`}>
                          <div className="aspect-square  flex items-center justify-center">
                            <CustomShape 
                              startColor={card.colors.start}
                              endColor={card.colors.end}
                              imageUrl={card.imageUrl}
                              className="w-10 mr-2 h-auto"
                            />
                          </div>
                          <p className={`font-unbounded h-10 sm:h-12 flex justify-center items-center rounded-2xl border border-black px-3 py-2.5 bg-gradient-to-tr from-${card.colors.start} to-${card.colors.end} text-[9px] sm:text-xs text-center font-medium`}>
                            {card.question}
                          </p>
                        </div>
                      </div>
                    ))}

      </Marquee>

      <p className="text-[#828282] mt-12 text-center">Choose from a continually growing library of apps and reports</p>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

