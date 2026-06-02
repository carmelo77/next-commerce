import type { Metadata } from "next";
import { geistSans, geistMono } from '@/config/fonts';

import "./globals.css";

export const metadata: Metadata = {
  title: "Next commerce",
  description: "Base de tienda virtual",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
