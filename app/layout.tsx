import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glam Institute of Fashion Designing",
  description:
    "Glam Institute of Fashion Designing (GIFD) is a premier design institute dedicated to nurturing creative talent through industry-driven education, hands-on training, and professional mentorship, preparing students for real-world careers in fashion and design.",

  verification: {
    google: "8CwJQS7VWUC2m77Xy0cimRW-zUKtPlB71qVQDL5XmhY",
  },
  icons: {
    icon: "/icons/main-icon-ico-2.ico",
    shortcut: "/icons/main-icon-ico-2.ico",
    apple: "/icons/main-icon-ico-2.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
