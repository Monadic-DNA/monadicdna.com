"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

const commonTriggerClasses = "text-base text-left md:text-xl text-darkMain hover:text-[#af4a8c] transition-all duration-300 font-medium hover:no-underline data-[state=open]:text-[#af4a8c]";

const commonContentClasses = "text-[16px] text-left text-[#4B5563] leading-[1.6] [&>p]:mb-4 [&>p:last-child]:mb-0";

export default function FAQPage() {
  const [openItem, setOpenItem] = React.useState(null);

  const valueToId = {
    'item-1': 'data-access',
    'item-2': 'delete-data',
    'item-3': 'data-storage',
    'item-4': 'email-requirement',
    'item-5': 'multiple-files',
    'item-6': 'supported-services',
    'item-7': 'family-upload',
    'item-8': 'pet-dna',
    'item-9': 'export-data',
    'item-10': 'app-reinstall',
    'item-11': 'report-time',
    'item-12': 'data-security',
    'item-13': 'key-backup',
    'item-14': 'key-recovery',
    'item-15': 'key-loss',
    'item-16': 'company-location',
    'item-17': 'data-sharing',
    'item-18': 'insights-science',
    'item-19': 'offline-features',
    'item-20': 'offline-insights',
    'item-21': 'storage-requirements',
    'item-22': 'sample-collection',
    'item-23': 'lab-location',
    'item-24': 'sample-handling',
    'item-25': 'kit-registration',
    'item-26': 'results-timeline'
  };

  const scrollToHash = (hash) => {
    if (hash) {
      // Find the accordion value that corresponds to this hash
      const hashWithoutPrefix = hash.substring(1);
      const entries = Object.entries(valueToId);
      const entry = entries.find(([_, id]) => id === hashWithoutPrefix);
      
      if (entry) {
        const [value] = entry;
        setOpenItem(value);
        setTimeout(() => {
          const element = document.querySelector(`[value="${value}"]`);
          if (element) {
            const yOffset = 0;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleValueChange = (value) => {
    setOpenItem(value);
    
    // Update URL hash when accordion item changes
    if (value) {
      const id = valueToId[value];
      if (id) {
        window.history.replaceState(null, '', `#${id}`);
      }
    } else {
      // Remove hash when accordion is closed
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  React.useEffect(() => {
    // Handle initial hash
    scrollToHash(window.location.hash);

    // Handle hash changes
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      <div id="faq" className="bg-[#FFFFFB]">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-4 py-20">
          <h1 id="user-faq" className="text-3xl font-bold text-center mb-12">User FAQs</h1>

          <div className="border-[0.5px] bg-white rounded-2xl border-darkMain py-12 px-6 md:py-16 md:px-20 lg:px-24">
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4 [&_.accordion-item]:scroll-mt-36"
              value={openItem}
              onValueChange={handleValueChange}
            >
              <AccordionItem value="item-1" id={valueToId['item-1']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Does Monadic DNA have access to my DNA data?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  No, Monadic DNA does not have access to your unencrypted DNA data. Your DNA file is encrypted using a private key only you can access.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-2" id={valueToId['item-2']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can I delete my data?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Yes, you can delete your data, including DNA sequences, genetic traits and other information, at any time. Monadic DNA gives you full control to remove your profile and DNA file directly from the app. When you delete your data, it's completely erased from the app, backup locations, including any decentralized storage locations. Just keep in mind that once it's gone, it cannot be recovered. In the future, we will allow you to delete individual traits and results without needing to delete all your data.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-3" id={valueToId['item-3']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Where is the DNA file stored?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Your data is encrypted using fully homomorphic encryption (FHE) and stored on our servers. We cannot decrypt your data on our servers which means we never know what your data looks like. Soon, we will store your data on decentralized storage so you can share and delete it yourself. As a backup, we also store an encrypted copy of the data on your device within app storage.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-4" id={valueToId['item-4']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Why do I need to provide an email address?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Your email address is used to create and manage your Monadic DNA account securely. It helps us send you account-related updates, make logging in easy, and recover your data if you switch devices or reinstall the app. Your email address is used only for managing your account. You may use a "Hide My Email" service like Apple's.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-5" id={valueToId['item-5']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  I have been sequenced by more than one service. Can I upload more than one file?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Absolutely! You can upload multiple DNA files from different sequencing services, like 23andMe and Ancestry, to your profile. Each file will be associated with your profile, and you will have full control to manage these files individually. Monadic DNA is a great place to secure these files for long-term storage.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-6" id={valueToId['item-6']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Which DNA services does Monadic DNA support for uploads?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  We currently accept raw DNA files from the following services:
                  <ul className="list-disc pl-6 m-2">
                    <li>23andMe</li>
                    <li>Monadic DNA Test Kit</li>
                  </ul>
                  <p>Simply download your raw DNA data from one of these providers and upload it to Monadic DNA to get started.</p>
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-7" id={valueToId['item-7']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can I upload the DNA file for another person to my account?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Yes, you can upload and manage DNA files for family members or others, as long as you have their permission. This can be useful for family members or dependents who wish to use the platform but prefer you to manage their data. Their files will be treated as separate profiles, so the reports stay personalized and accurate. For example, some reports may require basic details like age or gender to provide more relevant and useful insights.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-8" id={valueToId['item-8']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can I upload the DNA of my pet?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Currently, our platform is designed for human DNA analysis and insights. As we grow, Monadic DNA is an open platform, and we encourage developers and researchers to list pet reports and analyses on the marketplace.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-9" id={valueToId['item-9']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can I export my DNA file if I want to use it elsewhere?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Yes, you can export a non-encrypted version of your DNA file to use it with another service. This can be done easily through the DNA file export option under settings. However, to protect your privacy and security, we generally do not recommend sharing unencrypted versions of the file. If you must share it, ensure that you trust the recipient and the platform you're sharing it with.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-10" id={valueToId['item-10']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  What happens if I delete or reinstall the app, or get a new phone?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  If you delete or reinstall Monadic DNA or switch to a new phone, you can easily restore your data by following our in-app instructions to sync your Keychain on iCloud before making the switch. Simply log in with your Apple account, and your profile, encrypted DNA file, settings, and report history will be restored.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-11" id={valueToId['item-11']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  How long does it take to run a report?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  It usually takes just a few minutes to generate a report, but the time may vary depending on the size of your DNA file and the type of report. We've optimized the platform to give you results as quickly as possible while keeping your data secure. You will receive an app notification when your report is ready to be viewed.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-12" id={valueToId['item-12']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  How is my DNA file secured?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Your DNA file is encrypted using a private key that only you have access to. This ensures that no one, not even Monadic DNA, can view or access your unencrypted data without your permission. We use fully homomorphic encryption (FHE) so we don't need to look at your data even when we run reports!
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-13" id={valueToId['item-13']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Should I back up my private key?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Yes, it's important to back up your private key to ensure you can access your DNA data in the future. On iOS devices like iPhones, the Monadic DNA app automatically takes care of this for you by saving your private key in your Keychain for added convenience and security.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-14" id={valueToId['item-14']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can I recover my private key if I lose it?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  We do not keep a copy of your private key. It always stays on your device. This is for your privacy and security. To prevent losing access, follow our in-app instructions to sync your Keychain on iCloud. This ensures your key is restored when you reinstall the app on the same device or a new one.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-15" id={valueToId['item-15']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  What happens if I lose my private key and my device and don't have iCloud sync enabled?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  If you lose both your private key and your device, and iCloud sync is not enabled, you will not be able to access your encrypted DNA data. Monadic DNA cannot recover or reset your private key, as it is designed for maximum privacy and security. To prevent permanent loss, be sure to store your private key in a secure and accessible location.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-16" id={valueToId['item-16']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Where is Monadic DNA based?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Monadic DNA is headquartered in New York City, and we operate with a global focus on data privacy and secure storage.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-17" id={valueToId['item-17']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Will my data be shared with third parties?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  No, your DNA data stays completely private. Even when your data is processed on the Cloud, it remains encrypted and nobody is able to look at it in raw form. As a policy, we do not sell or sell your raw data to anyone and do not have direct access to it ourselves. Your encrypted DNA file and any insights generated are only accessible to you. If you want, you can choose to share data, specific insights, or reports with others in the Monadic DNA marketplace, but that decision is entirely up to you. Privacy and security aren't just features — they're the foundation of how Monadic DNA is designed to work.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-18" id={valueToId['item-18']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  What is the science behind the insights?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  <p>Monadic DNA is an open ecosystem designed to grow with breakthroughs in genomic science. We invite researchers, developers, and third-party providers with diverse specialties to create apps and insights, which can be listed in the Monadic DNA store. As new research emerges and usage grows, the number of apps and reports available on the platform continuously expands.</p>
                  <p>When DNA data is uploaded, it is encrypted and securely stored in the Monadic DNA vault. Think of this vault as a high-security vault where only you hold the key. Your shielded data can then be used with apps and reports in the Monadic DNA store while keeping your privacy intact. Even when analysis is being done, no one — not even Monadic DNA — can see your raw data thanks to advanced technology called blind computation. This new way of handling sensitive information is trustworthy and security-focused. It ensures your DNA data stays private, while still giving you access to cutting-edge insights and tools as the science of genomics evolves.</p>
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-19" id={valueToId['item-19']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  What features work offline vs. requiring Cloud connectivity?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Your private key, a copy of your encrypted data, and encrypted copies of your traits are stored locally on your device, allowing you to access them even when offline. All other functionality requires an Internet connection to communicate with the Cloud.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-20" id={valueToId['item-20']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Can insights be accessed without an Internet connection once processed?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Yes, once your insights are processed, encrypted copies of your traits are stored on your device and can be accessed without an Internet connection.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-21" id={valueToId['item-21']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  How much free storage does a user typically need on their iPhone and/or iCloud for Monadic DNA?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  To use Monadic DNA, you need at least 10 megabytes (MB) of free storage on iCloud for each DNA file. During data processing, the app may temporarily use up to 1 gigabyte (GB) of RAM for a few minutes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <h2 id="testkit-faq" className="text-2xl font-bold mt-20 mb-8 text-center">Monadic DNA Test Kit FAQs</h2>
          <div className="border-[0.5px] bg-white rounded-2xl border-darkMain py-12 px-6 md:py-16 md:px-20 lg:px-24">
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4 [&_.accordion-item]:scroll-mt-36"
              value={openItem}
              onValueChange={handleValueChange}
            >
              <AccordionItem value="item-22" id={valueToId['item-22']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  How is my DNA sample collected?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  We use a saliva sample to process your DNA. We will send you an easy-to-use collection kit that can be used in the comfort of your home. A return shipping label is included, so sending your sample back to our lab is simple and hassle-free.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-23" id={valueToId['item-23']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  Where is the DNA sequencing lab located?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Saliva samples are sequenced in a specialized third-party genomics laboratory located in Massachusetts. This lab is CLIA certified and trusted to handle your data securely and professionally.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-24" id={valueToId['item-24']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  What happens to my saliva sample after testing?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Your saliva sample will be safely destroyed within 60 days of being received by the lab. As an additional measure of privacy and security, we do not require any identifying information with your sample during the testing process, ensuring your identity remains protected throughout.
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-25" id={valueToId['item-25']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  How do I register a sample collection kit with my account?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  Each sample collection kit comes with a unique 15-digit registration code, which looks like this: X-XX-XXX-XXXX-XXXXX. To register the kit with your Monadic DNA account, simply scan the code using the app or type it in manually. Don't worry, you can enter the code with or without the dashes.
                  <p className="mt-4">Before you send your saliva sample back, make sure to register your kit in the Monadic DNA app. The lab won't start processing your sample until it's registered, so this step is really important!</p>
                </AccordionContent>
              </AccordionItem>

              <hr />
              <AccordionItem value="item-26" id={valueToId['item-26']} className="border-none accordion-item">
                <AccordionTrigger className={commonTriggerClasses}>
                  When can I expect to receive my DNA file?
                </AccordionTrigger>
                <AccordionContent className={commonContentClasses}>
                  You can expect to receive your DNA file in about 2-3 weeks from the time that your sample is received by the lab.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

