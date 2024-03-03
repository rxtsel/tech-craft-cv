"use client";

import { Button, Icons } from "@/components";
import { continueWithGitHub } from "@/repository";

export const ContinueWithGitHubButton = () => {
  return (
    <Button className="w-full" onClick={continueWithGitHub}>
      <Icons.gh className="mr-2 h-4 w-4 fill-white" /> Continue with GitHub
    </Button>
  );
};
