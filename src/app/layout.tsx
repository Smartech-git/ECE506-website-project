import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Roboto, Unna } from "next/font/google";
import "./globals.css";
const unna = Unna({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
import AppProvider from "@/context/GLobalContext";
import Toast from "@/components/alert/Toast";

export const metadata: Metadata = {
  title: "WATER TRANSPORTATION",
  description: "ECE 506 PRACTICAL PROJECT (WATER TRANSPORTAION) - GROUP 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scrollbar-thin scrollbar-none'>
      <body className={`${unna.className} overflow-x-hidden w-full relative scrollbar-thin scrollbar-none`}>
        <NextUIProvider>
          <AppProvider>
            <Toast />
            {children}
          </AppProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
