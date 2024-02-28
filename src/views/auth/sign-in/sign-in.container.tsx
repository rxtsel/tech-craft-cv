import { AuthLayout } from "@/layouts";
import { SignIn } from "./sign-in.view";

export const SignInContainer = () => {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
};
