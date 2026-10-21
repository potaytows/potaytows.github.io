import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Takachi Yakinuma — Full-Stack Developer",
  description:
    "Portfolio of Takachi Yakinuma, a full-stack developer building enterprise systems, Rust agent runtimes, and AI-powered developer tools.",
  openGraph: {
    title: "Takachi Yakinuma",
    description: "Full-Stack Developer — Enterprise Systems & AI Tools",
  },
  twitter: {
    card: "summary",
    title: "Takachi Yakinuma",
    description: "Full-Stack Developer — Enterprise Systems & AI Tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
