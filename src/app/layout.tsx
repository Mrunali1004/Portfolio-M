import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mrunali Zalavadiya",
  description: "Software Developer",
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
        className={twMerge(
          inter.variable,
          "bg-[#001152] text-white antialiased font-sans relative"
        )}
      >
        {children}
      </body>
    </html>
  );
}
