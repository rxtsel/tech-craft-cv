"use client";

import { Button, Icons } from "@/components";
import { signUpWithGitHub } from "@/repository";

export const SignUpWithGitHubButton = () => {
  return (
    <Button className="w-full" onClick={signUpWithGitHub}>
      <Icons.gh className="mr-2 h-4 w-4 fill-white" /> Register with GitHub
    </Button>
  );
};
