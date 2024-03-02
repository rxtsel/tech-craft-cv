import { ZodType, z } from "zod";

// types
import { FieldError, UseFormRegister } from "react-hook-form";

export type LoginFormData = {
  email: string;
};

export type FormFieldProps = {
  type: "email";
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<LoginFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "email";

// scheme
export const LoginScheme: ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Invalid email" })
});
