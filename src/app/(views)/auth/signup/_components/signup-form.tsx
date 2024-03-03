"use client";

import { Button, FormField } from "@/components";
import { AUTH_ROUTES } from "@/constants";
import { signUpWithEmailAndPassword } from "@/repository";
import { SignUpScheme } from "@/schemes";
import { SignUp } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpScheme)
  });

  const form = document.querySelector("form")!;

  const onSubmit = async (data: SignUp) => {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success(
        "Account created successfully, confirm your email and sign in",
        { duration: 5000 }
      );

      form.reset();

      redirect(AUTH_ROUTES.signIn);
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

        <FormField
          type="password"
          name="repeatPassword"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
          register={register}
          error={errors.repeatPassword}
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
          "Sign Up"
        )}
      </Button>
    </form>
  );
};
