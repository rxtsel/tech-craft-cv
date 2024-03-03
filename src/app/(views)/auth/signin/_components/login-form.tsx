"use client";

import { Button, FormField } from "@/components";
import { SignInScheme } from "@/schemes";
import { SignIn } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmail } from "@/repository";
import { toast } from "sonner";
import { AUTH_ROUTES, DASHBOARD_ROUTES } from "@/constants";
import { redirect } from "next/navigation";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignIn>({
    resolver: zodResolver(SignInScheme)
  });

  const form = document.querySelector("form")!;

  const onSubmit = async (data: SignIn) => {
    startTransition(async () => {
      const result = await signInWithEmail(data);
      const { error } = JSON.parse(result);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Welcome back to TechCraftCV! 😃", { duration: 5000 });

      form.reset();

      redirect(DASHBOARD_ROUTES.dashboard);
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <FormField
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="password"
          name="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
          register={register}
          error={errors.password}
        />
      </div>

      <Button
        disabled={isPending}
        type="submit"
        className="w-full"
        variant="secondary"
      >
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
};
