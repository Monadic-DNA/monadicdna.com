<div
                key={`${card.id}-${index}`}
                className="flex-none w-[200px] sm:w-[300px]"
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