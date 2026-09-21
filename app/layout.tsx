import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./landing.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "CM Buddy — WhatsApp Business Platform",
    template: "%s | CM Buddy"
  },
  description: "CM Buddy is a WhatsApp Business Platform with AI-powered automation, shared inbox, campaign management, and analytics. Engage customers at scale.",
  metadataBase: new URL("https://cmbuddy.pk"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CM Buddy"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}