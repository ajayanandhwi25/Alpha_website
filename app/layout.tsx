import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Desi Alpha Spices | असली स्वाद, शुद्धता का वादा | ₹10 से 1000g तक शुद्ध मसाले",
  description: "Desi Alpha - 100% Shuddh, Cold Stone Ground Masale. Haldi, Lal Mirch, Dhaniya, Shahi Garam Masala, Biryani Masala. Available in ₹10 sachets, 50g, 100g, 200g, 500g and 1000g packs.",
  keywords: ["Desi Alpha", "Desi Alpha Spices", "Pure Masala", "Indian Spices", "Haldi Powder", "Garam Masala", "Chilli Powder", "₹10 Masala Pack", "Spices Dealership"],
  openGraph: {
    title: "Desi Alpha Spices | शुद्धता का वादा",
    description: "असली भारतीय स्वाद व 100% शुद्धता। ₹10 के छोटे पैकेट से लेकर 1Kg फैमिली पैक तक।",
    type: "website",
    locale: "hi_IN"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0a08] text-[#f3ece4]">
        {children}
      </body>
    </html>
  );
}
