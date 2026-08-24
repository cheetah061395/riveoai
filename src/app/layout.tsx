import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Karla } from "next/font/google";
import "./globals.css";

import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Type stack per the homepage handoff: Archivo for display, Instrument Serif
// for the wordmark, Karla for body and UI.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Riveo — Find your perfect foundation shade",
    template: "%s — Riveo",
  },
  description:
    "Scan your face with our lab grade device and we match you with your foundation shade.",
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
      className={`${archivo.variable} ${instrumentSerif.variable} ${karla.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
