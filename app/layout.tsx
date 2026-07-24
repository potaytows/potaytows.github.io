import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://alex-carter-portfolio-2026.nattagitphootsorn.chatgpt.site",
  ),
  title: "Alex Carter — Product Designer & Developer",
  description:
    "A simple portfolio for product designer and front-end developer Alex Carter.",
  openGraph: {
    title: "Alex Carter",
    description: "Product Designer & Developer",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Carter",
    description: "Product Designer & Developer",
    images: ["/og.png"],
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
