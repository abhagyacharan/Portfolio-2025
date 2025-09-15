// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  // Replace with your deployed origin
  metadataBase: new URL("https://your-domain.example.com"),
  title: {
    default: "Aela Bhagya Charan — Full Stack Developer",
    template: "%s — Aela Bhagya Charan",
  },
  description:
    "Portfolio showcasing projects across Next.js, React, Python, and scalable systems.",
  applicationName: "Portfolio",
  generator: "v0.app",
  openGraph: {
    title: "Aela Bhagya Charan — Full Stack Developer",
    description:
      "Portfolio showcasing projects across Next.js, React, Python, and scalable systems.",
    url: "https://your-domain.example.com",
    siteName: "Aela Bhagya Charan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aela Bhagya Charan — Full Stack Developer",
    description:
      "Portfolio showcasing projects across Next.js, React, Python, and scalable systems.",
    creator: "@abhagyacharan",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${instrumentSerif.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
