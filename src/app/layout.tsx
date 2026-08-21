import type { Metadata } from "next";
import { Inter, Jost, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

import SiteNav from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

// Free stand-ins for the reference site's type system. Its display face
// (WestmanAtelierSansUC) is bespoke to that brand and Caslon 540 is licensed,
// so neither is used here — these match the register, not the files.
const jost = Jost({
  variable: "--font-display-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caslon = Libre_Caslon_Text({
  variable: "--font-accent-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Riveo — Stop guessing your shade",
    template: "%s — Riveo",
  },
  description:
    "Riveo scans your face, reads your undertone and depth, and matches you to foundation, concealer and blush that actually fit. Stop guessing your shade.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${inter.variable} ${caslon.variable}`}
    >
      <body className="bg-shell text-ink font-sans antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
