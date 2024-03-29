"use client";

import { Button, FormField } from "@/components";
import { SignInScheme } from "@/schemes";
import { SignIn } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignIn>({
    resolver: zodResolver(SignInScheme)
  });

  const onSubmit = async (data: SignIn) => {
    console.log("SUCCESS", data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        type="email"
        name="email"
        placeholder="Email"
        register={register}
        error={errors.email}
      />

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full"
        variant="secondary"
      >
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
};
