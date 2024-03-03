"use client";

import { Button, Icons } from "@/components";
import { AUTH_ROUTES } from "@/constants";
import Link from "next/link";
import { SignUpForm } from "./_components/signup-form";
import { SignUpWithGitHubButton } from "./_components/signup-with-github";

const SignUp = () => {
  return (
    <section className="mx-auto flex w-full max-w-xs flex-col gap-4">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold ">Sign Up</h1>
        <p className="text-muted-foreground">Create an account</p>
      </header>

      <div className="space-y-4">
        <SignUpWithGitHubButton />

        <Button className="w-full" variant="outline">
          <Icons.google className="mr-2 h-4 w-4" /> Register with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              or continue with
            </span>
          </div>
        </div>
      </div>

      <SignUpForm />

      <Link
        href={AUTH_ROUTES.signIn}
        className="text-sm text-muted-foreground transition-colors hover:text-black hover:underline dark:hover:text-white"
      >
        Aleady have an account? Sign in
      </Link>
    </section>
  );
};

export default SignUp;
