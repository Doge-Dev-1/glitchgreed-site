import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlitchGreed ($GLITCH)",
  description:
    "Rug yourself... into profit. The chaotic glitch goblin on Solana.",
  icons: {
    icon: "/mascot.jpeg", // This is the browser tab icon
    apple: "/mascot.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
