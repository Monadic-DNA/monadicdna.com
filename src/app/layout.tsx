import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NavPill from "@/components/nav-pill";
import NavbarDesktop from "@/components/navbar-desktop";
import NavbarMobile from "@/components/navbar-mobile";
import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                 (process.env.NODE_ENV === 'production' ? 'https://monadicdna.com' : 'http://localhost:3000');
  
  return {
    title: {
      default: 'Monadic DNA | Personal DNA insights with privacy, autonomy, and boundless curiosity',
      template: '%s | Monadic DNA',
    },
    description: 'Next generation, award-winning, genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.',
    openGraph: {
      images: [
        {
          url: `${baseUrl}/images/social/og-image-app.png`,
          width: 1200,
          height: 630,
        },
      ],
      siteName: 'Monadic DNA',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
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
