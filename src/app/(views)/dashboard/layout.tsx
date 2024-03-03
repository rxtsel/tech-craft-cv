import type { Metadata } from "next";
import { Topbar } from "./_components";

export const metadata: Metadata = {
  title: "Dashboard"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const HEADER_HEIGHT = 64;
  return (
    <>
      <Topbar />
      <main className={`min-h-[calc(100dvh-${HEADER_HEIGHT}px)] pt-16`}>
        {children}
      </main>
    </>
  );
}
