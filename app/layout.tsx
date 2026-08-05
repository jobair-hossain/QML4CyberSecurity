import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteHref } from "./lib/site-path";
import "./globals.css";

const geistSans = localFont({
  src: "../.vinext/fonts/geist-8ac0455e797f/geist-98bbbccb.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  style: "normal",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../.vinext/fonts/geist-mono-00e989178794/geist-mono-013b2f2f.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  style: "normal",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { default: "QML for Cybersecurity", template: "%s | QML for Cybersecurity" },
  description: "An open, research-informed repository of authentic learning modules for Quantum Machine Learning in cybersecurity.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: siteHref("/favicon.svg"),
    shortcut: siteHref("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
