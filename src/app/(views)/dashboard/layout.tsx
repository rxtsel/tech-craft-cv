import type { Metadata } from "next";
import { SidebarDesktop, Topbar } from "./_components";

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
      <main className="min-h-dvh pt-16 md:pl-72">
        <SidebarDesktop className="top-16 w-72" />
        {children}
      </main>
    </>
  );
}
