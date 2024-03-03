import { FieldError, UseFormRegister } from "react-hook-form";
import { SignIn, SignUp } from "./auth.type";

export type FormFieldProps = {
  type: "email" | "password";
  placeholder: string;
  name: ValidFieldNames;
  register: Register;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

type Register = UseFormRegister<SignIn | SignUp>;

export type ValidFieldNames = "email" | "password" | "repeatPassword";
