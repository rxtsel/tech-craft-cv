import { Button, Icons } from "@/components";
import { LoginForm } from "./_components/login-form";

const SignUp = () => {
  return (
    <section className="mx-auto flex w-full max-w-xs flex-col gap-4">
      <header className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold ">Sign Up</h1>
        <p className="text-muted-foreground">Create an account</p>
      </header>

      <div className="space-y-4">
        <Button className="w-full">
          <Icons.gh className="mr-2 h-4 w-4 fill-white" /> Register with GitHub
        </Button>

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

      <LoginForm />
    </section>
  );
};

export default SignUp;
