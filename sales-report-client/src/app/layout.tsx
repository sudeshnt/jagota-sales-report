import Header from "@/components/Layout/Header/Header";
import TopLeftImg from "@/components/Layout/TopLeftImage/TopLeftImage";

import { DurationPicker } from "@/components/Sales/DurationPicker/DurationPicker";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center text-white bg-site bg-cover ${roboto.className}`}
      >
        <TopLeftImg />
        <Header />
        <main className="h-full w-full pt-16 px-[10%] z-20 lg:px-0 lg:max-w-[90%] ">
          <DurationPicker />
          {children}
        </main>
      </body>
    </html>
  );
}
