import "@/app/globals.css";
import AndWeDAOFooter from "@/components/23andwedao-footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  return {
    metadataBase: new URL('https://monadicdna.com'),
    title: '23andWE DAO',
    description: 'Community bid to take back and secure 23andMe Data',
    openGraph: {
      images: [
        {
          url: getFullUrl('/images/social/og-23andWE-DAO.png'),
          width: 1200,
          height: 630,
        },
      ],
      siteName: '23andWE DAO',
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
  };
}

export default function AndWeDAOLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${unbounded.variable} ${inter.variable} antialiased`}>
        {children}
        <AndWeDAOFooter/>
      </body>
    </html>
  );
} 