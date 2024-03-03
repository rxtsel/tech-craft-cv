"use client";

import { Button, Icons } from "@/components";
import { signInWithGitHub } from "@/repository";
import { useTransition } from "react";

export const SignInWithGitHubButton = () => {
  const [isPending] = useTransition();

  return (
    <Button className="w-full" onClick={signInWithGitHub} disabled={isPending}>
      <Icons.gh className="mr-2 h-4 w-4 fill-white" /> Login with GitHub
    </Button>
  );
};
