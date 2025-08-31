import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/provider";

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
        className="antialiased font-sans"
        style={{
          fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        }}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
