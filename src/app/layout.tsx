import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

/* Condensed heavy display — closest Google Font substitute for MARKO */
const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

/* Geometric grotesk fallback; Host Grotesk loads via CSS @import and takes priority */
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRISK — Cybersecurity Reimagined",
  description:
    "Protect. Automate. Dominate. AI-native cybersecurity for modern enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-brisk-mist text-brisk-ink antialiased">{children}</body>
    </html>
  );
}
