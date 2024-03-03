"use client";

import { Button, Icons } from "@/components";
import { signInWithGitHub } from "@/repository";

export const ContinueWithGitHubButton = () => {
  return (
    <Button className="w-full" onClick={signInWithGitHub}>
      <Icons.gh className="mr-2 h-4 w-4 fill-white" /> Continue with GitHub
    </Button>
  );
};
