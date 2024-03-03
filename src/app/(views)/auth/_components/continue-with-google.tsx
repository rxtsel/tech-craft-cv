"use client";

import { Button, Icons } from "@/components";
import { continueWithGoogle } from "@/modules";

export const ContinueWithGoogleButton = () => {
  return (
    <Button className="w-full" variant="outline" onClick={continueWithGoogle}>
      <Icons.google className="mr-2 h-4 w-4" /> Continue with Google
    </Button>
  );
};
