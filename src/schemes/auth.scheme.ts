import { ZodType, z } from "zod";
import { SignIn, SignUp } from "@/types";

export const SignInScheme: ZodType<SignIn> = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
});

export const SignUpScheme: ZodType<SignUp> = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    repeatPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" })
  })
  .refine(data => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"]
  });
