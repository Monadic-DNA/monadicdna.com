"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  return (
    <div id="faq" className="bg-[#FFFFFB]">


   
    <div className="w-full  max-w-3xl mx-auto px-6 md:px-4 py-20">
      <h1 className="text-3xl font-bold  text-center mb-12">FAQ</h1>

      <div className="border-[0.5px] rounded-2xl border-darkMain py-12 px-6  md:py-16 md:px-20">
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              How do I get the Monadic DNA app?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

<hr />
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              What devices are supported?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
<hr />
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Why do I need to keep this data private?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
<hr />
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Why do I need to keep this data private?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
<hr />
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              I don't have a DNA data file, can I still use this app?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
<hr />
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              How long does it take to get results?
            </AccordionTrigger>
            
            <AccordionContent className="text-[16px] tsext-left  text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" className="h-12 px-8 text-sm font-bold border border-[#1A1A1A] text-[#1A1A1A] bg-transparent rounded-none">
          See More
        </Button>
      </div>
    </div>
    </div>
  )
}

