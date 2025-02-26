import Footer from "@/components/footer";
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

export const metadata: Metadata = {
  title: "Monadic DNA | Personal DNA insights with privacy, autonomy, and boundless curiosity",
  description: "An award-winning genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
