"use client";

import { signUpWithEmailAndPassword } from "@/actions/auth/signup/signup-with-email-and-password";
import { Button, FormField } from "@/components";
import { SignUpScheme } from "@/schemes";
import { SignUp } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
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

  const onSubmit = async (data: SignUp) => {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);

      if (error) {
        console.log("ERROR", error);

        toast.error(error.message);
        return;
      }

      toast.success("Account created successfully");
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
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          register={register}
          error={errors.password}
        />

        <FormField
          type="password"
          name="repeatPassword"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
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
          "Get Started"
        )}
      </Button>
    </form>
  );
};
