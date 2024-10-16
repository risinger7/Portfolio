import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viktor Portfolio",
  description: "Created with Next.js",
};

/* FONTS, import the same way for single pages */
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}

// default Next fonts
// import localFont from "next/font/local";
// `${geistSans.variable} ${geistMono.variable}
/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */
