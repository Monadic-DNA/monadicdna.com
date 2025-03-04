"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
export default function FAQ() {
  return (
    <div id="faq" className="bg-[#FFFFFB]">
      
    <div className="w-full  max-w-3xl mx-auto px-6 md:px-4 py-24 md:pt-24 md:pb-32">
      <h1 className="text-3xl font-bold  text-center mb-12">FAQ</h1>

      <div className="border-[0.5px] rounded-2xl bg-white border-darkMain py-12 px-6  md:py-16 md:px-20 lg:px-24">
        <Accordion type="single" collapsible className="space-y-4">
          

          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555]  transition-all duration-300 font-medium hover:no-underline">
              Does Monadic DNA have access to my DNA data?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              No, Monadic DNA does not have access to your unencrypted DNA data. Your DNA file is encrypted using a private key only you can access.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
              Can I delete my data?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Yes, you can delete your data, including DNA sequences, genetic traits and other information, at any time. Monadic DNA gives you full control to remove your profile and DNA file directly from the app. When you delete your data, it’s completely erased from the app, backup locations, including any decentralized storage locations. Just keep in mind that once it’s gone, it cannot be recovered. In the future, we will allow you to delete individual traits and results without needing to delete all your data.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300 font-medium hover:no-underline">
              Which DNA services are supported for uploads?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Your encrypted DNA file is securely stored locally on your device and decentralized secure storage for added redundancy. You may also choose to back up your encrypted DNA file on personal storage, such as your iCloud. Monadic DNA does not store your DNA file on centralized servers, ensuring maximum security and giving you complete control over your DNA file.
              <ul className="list-disc pl-6 m-3">
                <li>23andMe</li>
                <li>Monadic DNA Test Kit</li>
              </ul>
              <p>
                Simply download your raw DNA data from one of these providers and upload it to Monadic DNA to get started.
              </p>
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
              Why do I need to provide an email address?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              Your email address is used to create and manage your Monadic DNA account securely. It helps us send you account-related updates, make logging in easy, and recover your data if you switch devices or reinstall the app. Your email address is used only for managing your account. You may use a “Hide My Email” service like Apple's.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
              What happens if I delete or reinstall the app, or get a new phone?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              If you delete or reinstall Monadic DNA or switch to a new phone, you can easily restore your data by following our in-app instructions to sync your Keychain on iCloud before making the switch. Simply log in with your Apple account, and your profile, encrypted DNA file, settings, and report history will be restored.
            </AccordionContent>
          </AccordionItem>

          <hr />
          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
              Will my data be shared with third parties?
            </AccordionTrigger>
            <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
              No, your DNA data stays completely private. Even when your data is processed on the Cloud, it remains encrypted and nobody is able to look at it in raw form. As policy, we will not sell your raw data to anyone and do not have direct access to it ourselves. Your encrypted DNA file and any insights generated are only accessible to you. If you want, you can choose to share data, specific insights, or reports with others in the Monadic DNA marketplace, but that decision is entirely up to you. Privacy and security aren’t just features — they’re the foundation of how Monadic DNA is designed to work.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      <div className="flex justify-center mt-12">
        <Link href={"/faq"} variant="outline" className="h-12 px-8 text-sm flex justify-center items-center font-bold border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 bg-transparent rounded-none">
          More FAQs
        </Link>
      </div>
    
      </div>
    </div>
    </div>
  )
}

