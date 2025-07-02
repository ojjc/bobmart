import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bobMart",
  description: "A PopMart Blind Box Simulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-between items-center px-[4vw] py-[0.5vw] border-b">
          <div className="flex">
            <div className="flex justify-center space-x-4 p-3">
              <Link href="/" className="inline-block font-bold rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">Home</Link>
              <Link href="/about" className="inline-block font-bold rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">About</Link>
              <Link href="/contact" className="inline-block font-bold rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">Contact</Link>
            </div>
          </div>

          <div className="flex justify-center space-x-4 p-3">
            <input type="text" placeholder="Search.." className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"></input>
          </div>
        </div>


        {children}
      </body>
    </html>
  );
}
