import React from "react";
import { ProfileMenu } from "..";
import Link from "next/link";
import { SidebarMobile } from "../sidebar";

export const Topbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 flex items-center justify-between border-b-2 border-b-muted px-4 py-3">
      <div className="flex items-center gap-2">
        <SidebarMobile />

        <Link href="/" className="flex h-fit items-center gap-2 text-lg ">
          <span className="m-0 p-0 text-4xl leading-none">🤓</span>
          <strong className="hidden font-medium md:block">TechCraftCV</strong>
        </Link>
      </div>

      <ProfileMenu />
    </header>
  );
};
