import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/providers/smoothscroll";
import LoaderProvider from "@/components/providers/LoaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartLens Media",
  description: "Premium Photography, Videography & Livestream Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <LoaderProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LoaderProvider>
      </body>
    </html>
  );
}