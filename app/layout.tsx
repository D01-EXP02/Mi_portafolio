import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import Header from "@/component/header";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page EXP",
  description: "Mi portafolio de proyecto personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}>
          <Navbar />
          <Header />
        {children}
      </body>
    </html>
  );
}
