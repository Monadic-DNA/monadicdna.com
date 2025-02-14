"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQ() {
  return (
    <div id="faq" className="bg-[#FFFFFB]">


   
    <div className="w-full  max-w-3xl mx-auto px-6 md:px-4 py-20">
      <h1 className="text-3xl font-bold  text-center mb-12">FAQ</h1>

      <div className="border-[0.5px] rounded-2xl border-darkMain py-12 px-6  md:py-16 md:px-20">
        <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Can I delete my data?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Yes, you can delete your data at any time. MonadicDNA gives you full control to remove your profile and DNA file directly from the app. When you delete your data, it's completely erased from the app, backup locations, including any decentralized storage locations. Just keep in mind that once it's gone, it cannot be recovered.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Where is the DNA file stored?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Your encrypted DNA file is securely stored locally on your device and decentralized secure storage for added redundancy. You may also choose to back up your encrypted DNA file on personal storage, such as your iCloud. MonadicDNA does not store your DNA file on centralized servers, ensuring maximum security and giving you complete control over your DNA file.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Which DNA services does MonadicDNA support for uploads?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              We currently accept raw DNA files from the following services:
              <ul className="list-disc pl-6 mt-2">
                <li>AncestryDNA</li>
                <li>23andMe</li>
                <li>MyHeritage</li>
                <li>FamilyTreeDNA</li>
                <li>LivingDNA</li>
                <li>Dante Labs</li>
                <li>HomeDNA</li>
              </ul>
              Simply download your raw DNA data from one of these providers and upload it to MonadicDNA to get started.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              How is my DNA file secured?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Your DNA file is encrypted using a private key that only you have access to. This ensures that no one, not even MonadicDNA, can view or access your unencrypted data without your permission.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              What happens if I delete or reinstall the app, or get a new phone?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Switching devices or reinstalling MonadicDNA is easy. Simply log in with your existing credentials, and your profile, encrypted DNA file, settings, and report history will be restored.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain font-medium hover:no-underline">
              Will my data be shared with third parties?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              No, your DNA data stays completely private. Everything is processed directly on your device, so it never leaves your hands unless you decide to share it. Your encrypted DNA file and any insights generated are only accessible to you. If you want, you can choose to share data, specific insights, or reports with others in the MonadicDNA marketplace, but that decision is entirely up to you. Privacy and security aren't just features — they're the foundation of how MonadicDNA is designed to work.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-center mt-12">
        <Link href={"/faq"} variant="outline" className="h-12 px-8 text-sm font-bold border border-[#1A1A1A] text-[#1A1A1A] bg-transparent rounded-none">
          See More
        </Link>
      </div>
    </div>
    </div>
  )
}

