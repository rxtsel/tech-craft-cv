"use client";

import { Button, FormField } from "@/components";
import { SignUpScheme } from "@/schemes";
import { SignUp } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUp>({
    resolver: zodResolver(SignUpScheme)
  });

  const onSubmit = async (data: SignUp) => {
    console.log("SUCCESS", data);
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
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        variant="secondary"
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Get Started"
        )}
      </Button>
    </form>
  );
};
