import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ weight: ["300", "400", "500", "700", "900"], subsets: ["latin"], display: "swap" });
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppProvider from "@/context/GLobalContext";
import Toast from "@/components/alert/Toast";

export const metadata: Metadata = {
  title: "WATER TRANSPORTATION",
  description: "Afro-Street Fusion: Where Tradition Meets Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scrollbar-thin scrollbar-none'>
      <body className={`${roboto.className} overflow-x-hidden w-full relative scrollbar-thin scrollbar-none`}>
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
