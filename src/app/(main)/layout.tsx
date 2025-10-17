import "@/app/globals.css";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import NavPill from "@/components/nav-pill";
import NavbarDesktop from "@/components/navbar-desktop";
import NavbarMobile from "@/components/navbar-mobile";
import { getFullUrl } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Monadic DNA | Personal DNA insights with privacy, autonomy, and boundless curiosity';
  const description = 'Next generation, award-winning, genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.';
  const url = getFullUrl('');
  const image = getFullUrl('/images/social/og-image-app.png');

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: '%s | Monadic DNA',
    },
    description,
    keywords: ['DNA testing', 'genomics', 'privacy', 'genetic testing', 'DNA analysis', 'personalized health', 'encrypted DNA', 'blind computation', '23andMe alternative'],
    authors: [{ name: 'Recherché Inc', url: 'https://recherche.tech/' }],
    creator: 'Recherché Inc',
    publisher: 'Recherché Inc',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'Monadic DNA',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Monadic DNA - Personal DNA insights with privacy',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@monadicdna',
      site: '@monadicdna',
    },
    icons: {
      icon: [
        {
          url: '/favicon.ico',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/favicon-dark.ico',
          media: '(prefers-color-scheme: dark)',
        },
        {
          url: '/favicon-96x96.png',
          media: '(prefers-color-scheme: light)',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          url: '/favicon-96x96-dark.png',
          media: '(prefers-color-scheme: dark)',
          sizes: '96x96',
          type: 'image/png',
        }
      ],
    },
    verification: {
      google: 'wBCKypAAtTIQVriud5mF0WdXmLr-vbduTBYX0ZW9bVI',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <StructuredData />
      </head>
      <body
        className={`${unbounded.variable} ${inter.variable} antialiased`}
      >
        <NavbarMobile/>
        <NavbarDesktop/>
        <NavPill/>
        {children}
        <Footer/>
      </body>
    </html>
  );
} 