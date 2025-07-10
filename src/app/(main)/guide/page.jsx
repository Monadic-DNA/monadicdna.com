import { getFullUrl } from '@/lib/utils';
import Link from 'next/link';

export const metadata = {
  title: 'Download Your DNA Data',
  description: 'Choose your provider to get a step-by-step guide on downloading your raw DNA data.',
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

export default function GuideLandingPage() {
  const guides = [
    {
      id: '23andme',
      name: '23andMe',
      description: 'Learn how to download your raw DNA data from 23andMe.',
    },
    {
      id: 'ancestry',
      name: 'AncestryDNA',
      description: 'Step-by-step instructions for downloading your data from Ancestry.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-['Space_Grotesk',sans-serif] tracking-wide">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-darkMain tracking-tight mb-6">
            DOWNLOAD YOUR DNA DATA
          </h1>
          <p className="text-base md:text-lg text-[#4B5563] mb-12">
            Select your testing provider to view step-by-step instructions for downloading your raw
            genetic data.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={`/guide/${guide.id}`}
                className="block rounded-xl border border-[#af4a8c]/10 bg-[#af4a8c]/5 hover:bg-[#af4a8c]/10 p-6 transition"
              >
                <h2 className="text-xl font-semibold text-darkMain mb-2">{guide.name}</h2>
                <p className="text-sm text-[#4B5563]">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
