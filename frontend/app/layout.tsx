import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VerdeGuard - Decentralized Crop Insurance for Latin American Farmers",
  description:
    "Protect your crops with AI-powered, blockchain-based insurance. Instant payouts, transparent claims, and accessible coverage for small-scale farmers.",
  generator: "v0.app",
  keywords: "crop insurance, blockchain, AI, farmers, Latin America, decentralized, smart contracts",
  authors: [{ name: "VerdeGuard Team" }],
  openGraph: {
    title: "VerdeGuard - Revolutionary Crop Insurance",
    description: "AI-powered, blockchain-based crop insurance with instant payouts for Latin American farmers.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        style={{
          fontFamily: `var(--font-geist-sans), system-ui, Arial, sans-serif`,
        }}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
