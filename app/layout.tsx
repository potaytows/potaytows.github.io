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
  title: "Takachi Yakinuma — Frontend & Full-Stack Developer",
  description:
    "Portfolio of Takachi Yakinuma, a frontend and full-stack developer building enterprise applications and AI-powered products.",
  openGraph: {
    title: "Takachi Yakinuma",
    description: "Frontend & Full-Stack Developer",
  },
  twitter: {
    card: "summary",
    title: "Takachi Yakinuma",
    description: "Frontend & Full-Stack Developer",
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
