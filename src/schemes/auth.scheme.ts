import { LoginFormData } from "@/models";
import { ZodType, z } from "zod";

export const LoginScheme: ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Invalid email" })
});
