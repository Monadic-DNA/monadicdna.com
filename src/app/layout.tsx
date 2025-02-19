import Footer from "@/components/footer";
import NavPill from "@/components/nav-pill";
import Navbar from "@/components/navbar";
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
  title: "Monadic DNA",
  description: "DNA insights with privacy, autonomy, and boundless curiosity",
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
        <Navbar/>
        <NavPill/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
