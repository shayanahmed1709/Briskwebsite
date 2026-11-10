import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        {/* Google Fonts — Space Grotesk (headings) + Inter (body/nav/labels).
            Space Grotesk GF max weight is 700 (800/900 not published).
            Loaded via link (next/font google fetch unavailable in this env). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-brisk-dark text-brisk-white antialiased">
        {children}
      </body>
    </html>
  );
}
