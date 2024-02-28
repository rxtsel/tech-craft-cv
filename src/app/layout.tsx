import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TechCraftCV",
    template: "%s · TechCraftCV"
  },
  description:
    "TechCraftCV is a cutting-edge resume generator tailored for developers, powered by AI and featuring customizable templates, content management, and more.",
  icons: [
    {
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png"
    },
    {
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png"
    },
    {
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png"
    },
    {
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png"
    },
    {
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png"
    }
  ],
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
