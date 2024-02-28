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
