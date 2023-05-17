import { ReactNode } from "react";
import { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-inter",
});

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
});

import SkipToContent from "../components/SkipToContent/SkipToContent";
import Header from "../components/Header/Header";

import "../styles/globals.css";
import "tippy.js/dist/tippy.css";

export const metadata: Metadata = {
  title: {
    default: "Phillip Raffnsøe Nilsson",
    template: "%s | Phillip Raffnsøe Nilsson",
  },
  keywords: ["developer", "full stack", "freelance", "software engineer"],
  creator: "Phillip Raffnsøe Nilsson",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dm_serif_display.variable}`}
    >
      <body className="bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
        <SkipToContent href="#main-content" />
        <Header />
        <main id="main-content" className="mx-auto container px-4 mb-10">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
