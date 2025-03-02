import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} angtialiased`}>
            <Navigation/> 
            {}
            <div className="pt-16">
              {children}
              </div> 
          </body>
      </html>
  );
};