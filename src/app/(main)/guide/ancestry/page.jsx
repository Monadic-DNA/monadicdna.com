import { getFullUrl } from '@/lib/utils';

export const metadata = {
  title: 'Download AncestryDNA Data',
  description: 'Instructions for downloading your raw DNA data from AncestryDNA',
  openGraph: {
    images: [
      {
        url: getFullUrl('/images/social/og-image-logo.png'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DownloadAncestryPage() {
  const steps = [
    {
      title: 'Sign in',
      text: 'First, go to the AncestryDNA website on your computer and log in to your account.',
    },
    {
      title: 'Navigate to DNA Results',
      text: 'At the top, click on the "DNA" menu option and select "Your Results Summary" from the dropdown. This will take you to the Results Summary page.',
    },
    {
      title: 'Access DNA Settings',
      text: 'On the Results Summary page, find and click on the "DNA Settings" option on the side.',
    },
    {
      title: 'Navigate to the DNA settings page',
      text: 'Scroll down to the bottom of the DNA settings page and click on "Download DNA Data".',
    },
    {
      title: 'Confirm Download Request',
      text: 'Check the box to confirm, and then click "continue".',
    },
    {
      title: 'Verify Your Account',
      text: 'You’ll be asked to verify your account by entering a code sent to your email or re-entering your password.',
    },
    {
      title: 'Check Your Email',
      text: 'After verification, AncestryDNA will send an email to the address associated with your account.',
    },
    {
      title: 'Click the Download Link',
      text: 'In the email, find and click the link that says "Download DNA Data"',
    },
    {
      title: 'Download the Data File',
      text: 'Clicking the link will redirect you back to Ancestry’s page, where you’ll find a button that says "Download DNA Data". Click this button to download the file to your computer.',
    },

  ];

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk',sans-serif] tracking-wide">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-darkMain tracking-tight mb-4">
              DOWNLOAD YOUR ANCESTRYDNA DATA
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#4B5563] max-w-2xl mx-auto tracking-wide uppercase">
              Step-by-step guide to access your raw genetic data
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[#4B5563]">
            <h2 className="text-xl sm:text-2xl font-bold text-darkMain tracking-wider uppercase mb-6">
              Instructions
            </h2>

            {steps.map((step, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#af4a8c]">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="mb-4">{step.text}</p>

                {index !== 0 && (
                  <div className="flex flex-col items-center">
                    <img
                      src={`/images/guide/ancestry/step-${index + 1}.png`}
                      alt={`Step ${index + 1} - ${step.title}`}
                      className="w-full max-w-[800px] rounded-t-lg border border-b-0 border-[#af4a8c]/10"
                    />
                    <div className="w-full max-w-[800px] bg-[#af4a8c]/5 py-2 px-4 text-center text-[#4B5563] text-sm italic rounded-b-lg border-t border-[#af4a8c]/10">
                      Step {index + 1}: {step.title}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <p className="text-[#4B5563] leading-relaxed mt-8 tracking-wide">
              That’s it! You now have a copy of your raw DNA data. The downloaded file will be in a
              plain text format containing letters and numbers that represent your genetic code. Be
              sure to keep this file secure. You are now ready to use it with{' '}
              <span className="font-semibold text-darkMain">MonadicDNA</span>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
