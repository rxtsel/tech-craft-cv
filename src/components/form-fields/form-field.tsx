import { Input } from "@/components";
import type { FormFieldProps } from "@/schemes";

export const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber
}) => {
  return (
    <>
      <Input
        placeholder={placeholder}
        type={type}
        {...register(name, { valueAsNumber })}
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </>
  );
};
