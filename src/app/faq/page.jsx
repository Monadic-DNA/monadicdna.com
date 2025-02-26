export const metadata = {
  title: 'Frequently Asked Questions',
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div>
      <div id="faq" className="bg-[#FFFFFB]">

        <div className="w-full  max-w-3xl mx-auto px-6 md:px-4 py-20">
          <h1 className="text-3xl font-bold  text-center mb-12">User FAQs</h1>

          <div className="border-[0.5px] bg-white rounded-2xl border-darkMain py-12 px-6  md:py-16 md:px-20 lg:px-24">
            <Accordion type="single" collapsible className="space-y-4">


              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  Does MonadicDNA have access to my DNA data?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  No, MonadicDNA does not have access to your unencrypted DNA data. Your DNA file is encrypted using a private key that only you can access to.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  Can I delete my data?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  Yes, you can delete your data, including DNA sequences, genetic traits and other information, at any time. MonadicDNA gives you full control to remove your profile and DNA file directly from the app. When you delete your data, it’s completely erased from the app, backup locations, including any decentralized storage locations. Just keep in mind that once it’s gone, it cannot be recovered. In the future, we will allow you to delete individual traits and results without needing to delete all your data.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  Where is the DNA file stored?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  Your data is encrypted using fully homomorphic encryption (FHE) and stored on our servers. We cannot decrypt your data on our servers which means we never know what your data looks like. Soon, we will store your data on decentralized storage so you can share and delete it yourself. As a backup, we also store an encrypted copy of the data on your device within app storage.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  Why do I need to provide an email address?

                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  Your email address is used to create and manage your MonadicDNA account securely. It helps us send you account-related updates, make logging in easy, and recover your data if you switch devices or reinstall the app. Your email address is used only for managing your account. You may use a “Hide My Email” service like Apple’s.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  I have been sequenced by more than one service. Can I upload more than one file?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  Absolutely! You can upload multiple DNA files from different sequencing services, like 23andMe and Ancestry, to your profile. Each file will be associated with your profile, and you will have full control to manage these files individually. MonadicDNA is a great place to secure these files for long-term storage.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-6" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                  Which DNA services does MonadicDNA support for uploads?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                  We currently accept raw DNA files from the following services:
                  <ul className="list-disc pl-6 mt-2">
                <li>23andMe</li>
                <li>MonadicDNA Test Kit</li>
              </ul>
              Simply download your raw DNA data from one of these providers and upload it to MonadicDNA to get started.

                </AccordionContent>
              </AccordionItem>


              <hr />
              <AccordionItem value="item-7" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Can I upload the DNA file for another person to my account?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Yes, you can upload and manage DNA files for family members or others, as long as you have their permission. This can be useful for family members or dependents who wish to use the platform but prefer you to manage their data. Their files will be treated as separate profiles, so the reports stay personalized and accurate. For example, some reports may require basic details like age or gender to provide more relevant and useful insights.
             
                </AccordionContent>
              </AccordionItem>


              <hr />
              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Can I upload the DNA of my pet?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Currently, our platform is designed for human DNA analysis and insights. As we grow, MonadicDNA is an open platform, and we encourage developers and researchers to list pet reports and analyses on the marketplace.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-9" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Can I export my DNA file if I want to use it elsewhere?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Yes, you can export a non-encrypted version of your DNA file to use it with another service. This can be done easily through the DNA file export option under settings. However, to protect your privacy and security, we generally do not recommend sharing unencrypted versions of the file. If you must share it, ensure that you trust the recipient and the platform you’re sharing it with.
                
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-10" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What happens if I delete or reinstall the app, or get a new phone?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                If you delete or reinstall MonadicDNA or switch to a new phone, you can easily restore your data by following our in-app instructions to sync your Keychain on iCloud before making the switch. Simply log in with your Apple account, and your profile, encrypted DNA file, settings, and report history will be restored.
               
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-11" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How long does it take to run a report?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                It usually takes just a few minutes to generate a report, but the time may vary depending on the size of your DNA file and the type of report. We’ve optimized the platform to give you results as quickly as possible while keeping your data secure. You will receive an app notification when your report is ready to be viewed.
               
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-12" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How is my DNA file secured?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Your DNA file is encrypted using a private key that only you have access to. This ensures that no one, not even MonadicDNA, can view or access your unencrypted data without your permission. We use fully homomorphic encryption (FHE) so we don’t need to look at your data even when we run reports!
            
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-13" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Should I back up my private key?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Yes, it’s important to back up your private key to ensure you can access your DNA data in the future. On iOS devices like iPhones, the MonadicDNA app automatically takes care of this for you by saving your private key in your Keychain for added convenience and security.
             
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-14" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Can I recover my private key if I lose it?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                We do not keep a copy of your private key — it always stays on your device — this is for your privacy and security. To prevent losing access, follow our in-app instructions to sync your Keychain on iCloud. This ensures your key is restored when you reinstall the app on the same device or a new one.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-15" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What happens if I lose my private key and my device and don’t have iCloud sync enabled?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                If you lose both your private key and your device, and iCloud sync is not enabled, you will not be able to access your encrypted DNA data. MonadicDNA cannot recover or reset your private key, as it is designed for maximum privacy and security. To prevent permanent loss, be sure to store your private key in a secure and accessible location.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-16" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Where is MonadicDNA based?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                MonadicDNA is headquartered in New York City, and we operate with a global focus on data privacy and secure storage.
              
                </AccordionContent>
              </AccordionItem>


              <hr />
              <AccordionItem value="item-17" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Will my data be shared with third parties?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                No, your DNA data stays completely private. Even when your data is processed on the Cloud, it remains encrypted and nobody is able to look at it in raw form. As policy, we will not sell your raw data to anyone and do not have direct access to it ourselves. Your encrypted DNA file and any insights generated are only accessible to you. If you want, you can choose to share data, specific insights, or reports with others in the Monadic DNA marketplace, but that decision is entirely up to you. Privacy and security aren’t just features — they’re the foundation of how Monadic DNA is designed to work.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-18" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What is the science behind the insights?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                MonadicDNA is an open ecosystem designed to grow with breakthroughs in genomic science. We invite researchers, developers, and third-party providers with diverse specialties to create apps and insights, which can be listed in the MonadicDNA store. As new research emerges and usage grows, the number of apps and reports available on the platform continuously expands.
<br className="mb-2" />              
When DNA data is uploaded, it is encrypted and securely stored in the MonadicDNA vault. Think of this vault as a high-security vault — only you hold the key. Your shielded data can then be used with apps and reports in the MonadicDNA store while keeping your privacy intact. Even when analysis is being done, no one — not even MonadicDNA — can see your raw data thanks to advanced technology called blind computation. This new way of handling sensitive information is trustworthy and security-focused. It ensures your DNA data stays private, while still giving you access to cutting-edge insights and tools as the science of genomics evolves.

                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-19" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What features work offline vs. requiring Cloud connectivity?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Your private key, a copy of your encrypted data, and encrypted copies of your traits are stored locally on your device, allowing you to access them even when offline. All other functionality requires an Internet connection to communicate with the Cloud.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-20" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Can insights be accessed without an Internet connection once processed?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Yes, once your insights are processed, encrypted copies of your traits are stored on your device and can be accessed without an Internet connection.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-21" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How much free storage does a user typically need on their iPhone and/or iCloud for MonadicDNA?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                To use MonadicDNA, you need at least 10 megabytes (MB) of free storage on iCloud for each DNA file. During data processing, the app may temporarily use up to 1 gigabyte (GB) of RAM for a few minutes.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-22" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How is my DNA sample collected?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                We use a saliva sample to process your DNA. We will send you an easy-to-use collection kit that can be used in the comfort of your home. A return shipping label is included, so sending your sample back to our lab is simple and hassle-free.
              
                </AccordionContent>
              </AccordionItem>


              <hr />
              <AccordionItem value="item-23" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Where is the DNA sequencing lab located?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                DNA samples are sequenced in a specialized third-party genomics laboratory located in XXXXX. This lab is CLIA certified and trusted to handle your data securely and professionally.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-24" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What happens to my saliva sample after testing?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Your saliva sample will be safely destroyed within 60 days of being received by the lab. As an additional measure of privacy and security, we do not require any identifying information with your sample during the testing process, ensuring your identity remains protected throughout.
              
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-25" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What features work offline vs. requiring Cloud connectivity?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Your private key, a copy of your encrypted data, and encrypted copies of your traits are stored locally on your device, allowing you to access them even when offline. All other functionality requires an Internet connection to communicate with the Cloud.
              
                </AccordionContent>
              </AccordionItem>


            </Accordion>
          </div>

          {/*
          <h1 className="text-3xl font-bold  text-center mb-12 mt-24">MonadicDNA Test Kit FAQs </h1>

          <div className="border-[0.5px] bg-white rounded-2xl border-darkMain py-12 px-6  md:py-16 md:px-20 lg:px-24">
            <Accordion type="single" collapsible className="space-y-4">


              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How is my DNA sample collected?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                We use a saliva sample to process your DNA. We will send you an easy-to-use collection kit that can be used in the comfort of your home. A return shipping label is included, so sending your sample back to our lab is simple and hassle-free.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                Where is the DNA sequencing lab located?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                DNA samples are sequenced in a specialized third-party genomics laboratory located in XXXXX. This lab is CLIA certified and trusted to handle your data securely and professionally.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                What happens to my saliva sample after testing?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Your saliva sample will be safely destroyed within 60 days of being received by the lab. As an additional measure of privacy and security, we do not require any identifying information with your sample during the testing process, ensuring your identity remains protected throughout.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                How do I register a sample collection kit with my account?

                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                Each sample collection kit comes with a unique 15-digit registration code, which looks like this: X-XX-XXX-XXXX-XXXXX. To register the kit with your MonadicDNA account, simply scan the code using the app or type it in manually. Don’t worry — you can enter the code with or without the dashes.
<br />
Before you send your saliva sample back, make sure to register your kit in the MonadicDNA app. The lab won’t start processing your sample until it’s registered, so this step is really important!

                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger className="text-base text-left md:text-xl text-darkMain hover:text-[#555555] transition-all duration-300  font-medium hover:no-underline">
                When can I expect to receive my DNA file?
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-left text-[#4B5563] leading-[1.6]">
                You can expect to receive your DNA file in about 2-3 weeks from the time that your sample is received by the lab.
                </AccordionContent>
              </AccordionItem>

          


            </Accordion>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

