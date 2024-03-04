import type { Metadata } from "next";
import { SidebarDesktop, Topbar } from "./_components";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <main className="min-h-[calc(100dvh-36px)] pr-2 pt-24 md:pl-80 md:pr-8">
        <SidebarDesktop className="top-16 w-72" />
        {children}
      </main>
      <Footer />
    </>
  );
}
