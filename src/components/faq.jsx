"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold  text-center mb-12">FAQ</h1>

      <div className="border-[0.5px] rounded-2xl border-black p-8">
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              How do I get the Monadic DNA app?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              What devices are supported?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              Why do I need to keep this data private?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              Why do I need to keep this data private?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              I don't have a DNA data file, can I still use this app?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="text-[18px] font-medium hover:no-underline">
              How long does it take to get results?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-[#4B5563] leading-[1.6]">
              Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit
              amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="h-12 px-8 text-base font-medium border border-black text-black rounded-none">
          See More
        </Button>
      </div>
    </div>
  )
}

