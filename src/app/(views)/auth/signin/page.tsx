import { AUTH_ROUTES } from "@/constants";
import Link from "next/link";
import {
  ContinueWithGitHubButton,
  ContinueWithGoogleButton
} from "../_components";
import { LoginForm } from "./_components/login-form";

const SignIn = () => {
  return (
    <section className="mx-auto flex w-full max-w-xs flex-col gap-4">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold ">Sign In</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </header>

      <div className="space-y-4">
        <ContinueWithGitHubButton />

        <ContinueWithGoogleButton />

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

      <LoginForm />

      <Link
        href={AUTH_ROUTES.signUp}
        className="text-sm text-muted-foreground transition-colors hover:text-black hover:underline dark:hover:text-white"
      >
        Don&apos;t have an account? Sign up
      </Link>
    </section>
  );
};

export default SignIn;
